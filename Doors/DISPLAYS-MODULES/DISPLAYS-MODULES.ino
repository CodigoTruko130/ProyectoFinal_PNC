#include <WiFi.h>
#include <WiFiClientSecure.h>
#include "Adafruit_MQTT.h"
#include "Adafruit_MQTT_Client.h"
#include <TFT_eSPI.h> // Graphics and font library for ILI9341 driver chip
#include <SPI.h>

/**********************************WIFI**********************************/
#define WLAN_SSID       "POCOKAI"
#define WLAN_PASS       "KAIROSA2020"
String hostname= "ESP32-DISPLAYS";

/************************* ADAFRUIT *********************************/
#define AIO_SERVER      "io.adafruit.com"
#define AIO_SERVERPORT  1883                   // use 8883 for SSL
#define AIO_USERNAME  "Rosita"
#define AIO_KEY       "aio_PnFU80AMmjsHZxWkZrKHROAYqVzl"
WiFiClient client;
Adafruit_MQTT_Client mqtt(&client, AIO_SERVER, AIO_SERVERPORT, "ESP32-DISPLAYS", AIO_USERNAME, AIO_KEY);
Adafruit_MQTT_Subscribe sensor_rfid = Adafruit_MQTT_Subscribe(&mqtt, AIO_USERNAME "/feeds/sensor-rfid", MQTT_QOS_1);
Adafruit_MQTT_Subscribe sensor_ultrasonic = Adafruit_MQTT_Subscribe(&mqtt, AIO_USERNAME "/feeds/sensor_ultrasonic", MQTT_QOS_1);
Adafruit_MQTT_Subscribe sensor_magnetic = Adafruit_MQTT_Subscribe(&mqtt, AIO_USERNAME "/feeds/sensor_magnetic", MQTT_QOS_1);


TFT_eSPI tft = TFT_eSPI();  // Invoke library, pins defined in User_Setup.h

String mainMessage = "Zzz...";
int Led = 19;
#define alarm 22

void setup() {
  Serial.begin(115200);

  wifiInit();

  sensor_rfid.setCallback(rfidCallBack);

  mqtt.subscribe(&sensor_rfid);
  mqtt.subscribe(&sensor_ultrasonic);
  mqtt.subscribe(&sensor_magnetic);


  tft.init();
  tft.setRotation(1);

  pinMode(Led, OUTPUT);
  pinMode(alarm, OUTPUT);
  digitalWrite(Led, LOW);

}

void loop() {
  MQTT_connect();
  if(!mqtt.ping()) mqtt.disconnect();

  if(mainMessage == "Zzz..."){
      tft.setTextSize(2);
      tft.fillScreen(TFT_BLACK);
      tft.setTextColor(TFT_WHITE, TFT_BLACK);
      tft.drawString(mainMessage, 100, 85, 4);
  }

  delay(10);

}



void wifiInit(){
  Serial.println(); Serial.println();
  Serial.print("Connecting to ");
  Serial.println(WLAN_SSID);

  WiFi.mode(WIFI_STA);
  WiFi.config(INADDR_NONE, INADDR_NONE, INADDR_NONE, INADDR_NONE);
  WiFi.setHostname(hostname.c_str());
  WiFi.begin(WLAN_SSID, WLAN_PASS);
  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }
  Serial.println();
  Serial.println("WiFi connected");
  Serial.println("IP address: "); Serial.println(WiFi.localIP());
}


void MQTT_connect() {
  int8_t ret;
  if (mqtt.connected()) return;
  Serial.print("Connecting to MQTT... ");
  uint8_t retries = 3;
  while ((ret = mqtt.connect()) != 0) {
    Serial.println(mqtt.connectErrorString(ret));
    Serial.println("Retrying MQTT connection in 10 seconds...");
    mqtt.disconnect();
    delay(10000);
    retries--;
    if (retries == 0) while (1);
  }
  Serial.println("MQTT Connected!");
}



void rfidCallBack(char *data, uint16_t len) {
  Serial.println(data);
  mainMessage = String(data);
  tft.setTextSize(1);
  tft.fillScreen(TFT_BLACK);
  if (mainMessage == "Se ha bloqueado la puerta."){
      tft.setTextColor(TFT_WHITE, TFT_BLACK);
      tft.drawString("Bloqueando puerta...", 40, 95, 4);
      delay(1000);
      mainMessage = "Zzz...";
      digitalWrite(Led, LOW);
  }
  else if(mainMessage == "Se ha desbloqueado la puerta."){
      tft.setTextColor(TFT_GREEN, TFT_BLACK);
      tft.drawString("Acceso concedido", 50, 95, 4);
      tone(alarm, 1000);
      delay(1000);
      tft.setTextColor(TFT_WHITE, TFT_BLACK);
      tft.drawString("Puerta desbloqueada", 40, 95, 4);
      digitalWrite(Led, HIGH);
      noTone(alarm);
      
  }
  else if(mainMessage == "Acceso denegado"){
      tft.setTextColor(TFT_RED, TFT_BLACK);
      tft.drawString("Acceso denegado", 50, 95, 4);
  }
}
