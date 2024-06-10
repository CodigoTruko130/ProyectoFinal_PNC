#pragma region Includes
  #include <SPI.h>
  #include <MFRC522.h>
  #include <WiFi.h>
  #include <WiFiClientSecure.h>
  #include "Adafruit_MQTT.h"
  #include "Adafruit_MQTT_Client.h"
  #include <ESP32Servo.h>
  #include <HTTPClient.h>
  #include <UrlEncode.h>
#pragma endregion

#pragma region variablesDefinitions
  /**********************************RFID**********************************/
  #define RST_PIN  27
  #define SS_PIN  5
  #define PIN_SG90 22
  MFRC522 mfrc522(SS_PIN, RST_PIN);
  byte LecturaUID[4];
  byte adminUser[4]= {0x13, 0x48, 0x39, 0x08} ;

  /**********************************API-BOT*******************************/
  String phoneNumber = "+50379187645";
  String apiKey = "9003435";
  String userName = "";

  /**********************************WIFI**********************************/
  #define WLAN_SSID       "POCOKAI"
  #define WLAN_PASS       "KAIROSA2020"
  String hostname = "ESP32-MODULES";

  /**********************************ULTRASONIC****************************/
  #define trigPin 16
  #define echoPin 17
  long duration;
  int distance;
  bool currentObjectState;
  bool lastObjectState;

  /**********************************MAGNETIC******************************/
  #define DOOR_SENSOR_PIN 15
  int currentDoorState;
  int lastDoorState; 

  /**********************************SERVO*********************************/
  Servo sg90;
  bool lastAccesState;
  bool currentAccesState;

  /**********************************LOGIC*********************************/
  bool isDoorOpen = false;

#pragma endregion

#pragma region adafruit
  /************************* ADAFRUIT *********************************/
  #define AIO_SERVER      "io.adafruit.com"
  #define AIO_SERVERPORT  1883                   // use 8883 for SSL
  #define AIO_USERNAME  "Rosita"
  #define AIO_KEY       "aio_PnFU80AMmjsHZxWkZrKHROAYqVzl"
  WiFiClient client;
  Adafruit_MQTT_Client mqtt(&client, AIO_SERVER, AIO_SERVERPORT, "ESP32-MODULES", AIO_USERNAME, AIO_KEY);
  Adafruit_MQTT_Publish sensor_rfid = Adafruit_MQTT_Publish(&mqtt, AIO_USERNAME "/feeds/sensor-rfid");
  Adafruit_MQTT_Publish sensor_ultrasonic = Adafruit_MQTT_Publish(&mqtt, AIO_USERNAME "/feeds/sensor_ultrasonic");
  Adafruit_MQTT_Publish sensor_magnetic = Adafruit_MQTT_Publish(&mqtt, AIO_USERNAME "/feeds/sensor_magnetic");
  /************************* ADAFRUIT *********************************/
#pragma endregion


void setup() {
  Serial.begin(9600);

  /**********************************RFID-INIT**************************************/
  SPI.begin();
  mfrc522.PCD_Init();

  /**********************************WIFI****-INIT**********************************/
  wifiInit();

  /**********************************ULTRASONIC-INIT********************************/
  pinMode(trigPin, OUTPUT);
  pinMode(echoPin, INPUT);

  /**********************************MAGNETIC-LOGIC*********************************/
  pinMode(DOOR_SENSOR_PIN, INPUT_PULLUP);
  currentDoorState = digitalRead(DOOR_SENSOR_PIN);

  /**********************************SERVO-INIT*************************************/
  sg90.setPeriodHertz(50);
  sg90.attach(PIN_SG90, 500, 2400);
}

void loop() {
  /**********************************ADAFRUIT-CONNECTION****************************/
  MQTT_connect();
  mqtt.processPackets(2000);
  if(!mqtt.ping()) mqtt.disconnect();

  /**********************************PROGRAM-LOGIC****************************************/
  RFIDLogic();
  ultrasonicLogic();
  magneticLogic();
  servoLogic();

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


boolean comparaUID(byte lectura[],byte usuario[]){
  for (byte i=0; i < mfrc522.uid.size; i++)
  if(lectura[i] != usuario[i]) return(false);
  
  return(true);
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


void sendMessage(String message){
  String url = "https://api.callmebot.com/whatsapp.php?phone=" + phoneNumber + "&apikey=" + apiKey + "&text=" + urlEncode(message);    
  HTTPClient http;
  http.begin(url);
  http.addHeader("Content-Type", "application/x-www-form-urlencoded");
  int httpResponseCode = http.POST(url);
  if (httpResponseCode == 200) Serial.println("Message sent successfully");
  else{
    Serial.println("Error sending the message");
    Serial.print("HTTP response code: ");
    Serial.println(httpResponseCode);
  }
  http.end();
}


void RFIDLogic(){
  if (!mfrc522.PICC_IsNewCardPresent()) return;
  if (!mfrc522.PICC_ReadCardSerial()) return;
           
  Serial.print("UID:");
  for (byte i = 0; i < mfrc522.uid.size; i++) {
    if (mfrc522.uid.uidByte[i] < 0x10) Serial.print(" 0");
    else Serial.print(" ");

    Serial.print(mfrc522.uid.uidByte[i], HEX);
    LecturaUID[i]=mfrc522.uid.uidByte[i];
  }

  if(comparaUID(LecturaUID, adminUser)){
    userName = "xDFrankito777xD";
    Serial.println(userName + " utilizo sus creedenciales\t"); 
    isDoorOpen = !isDoorOpen;
  } 
  else{
    Serial.println("Acceso denegado");
    sensor_rfid.publish("Acceso denegado");
    sendMessage("Acceso denegado");
  }
  mfrc522.PICC_HaltA();
}


void ultrasonicLogic(){
  lastObjectState = currentObjectState;

  digitalWrite(trigPin, LOW);
  delayMicroseconds(2);
  digitalWrite(trigPin, HIGH);
  delayMicroseconds(10);
  digitalWrite(trigPin, LOW);
  duration = pulseIn(echoPin, HIGH);
  distance = duration * 0.034 / 2;

  if(distance < 10) currentObjectState = true;
  else currentObjectState = false;

  if (lastObjectState == false && currentObjectState == true) {
    Serial.println("Se ha colocado un objeto en la caja.");
    sendMessage("Se ha colocado un objeto en la caja.");
    sensor_ultrasonic.publish("Se ha colocado un objeto en la caja.");
  }
  else
    if (lastObjectState == true && currentObjectState == false) {
      Serial.println("El objeto se ha retirado de la caja.");
      sendMessage("El objeto se ha retirado de la caja.");
      sensor_ultrasonic.publish("El objeto se ha retirado de la caja.");
    }

}

void magneticLogic(){
  lastDoorState = currentDoorState;
  currentDoorState  = digitalRead(DOOR_SENSOR_PIN);

  if (lastDoorState == LOW && currentDoorState == HIGH) {
    Serial.println("La puerta ha sido abierta.");
    sendMessage("La puerta ha sido abierta.");
    sensor_magnetic.publish("La puerta ha sido abierta.");
  }
  else
    if (lastDoorState == HIGH && currentDoorState == LOW) {
      Serial.println("La puerta ha sido cerrada.");
      sendMessage("La puerta ha sido cerrada.");
      sensor_magnetic.publish("La puerta ha sido cerrada.");
    } 
 
}

void servoLogic(){      
  lastAccesState = currentAccesState;

  if(isDoorOpen) currentAccesState = true;
  else currentAccesState = false;

  if (lastAccesState == false && currentAccesState == true) {
    sg90.write(0);
    sendMessage(userName + " ha desbloqueado la puerta.");
    sensor_rfid.publish("Se ha desbloqueado la puerta.");
  }
  else
    if (lastAccesState == true && currentAccesState == false) {
      sg90.write(180);
      sendMessage(userName + " ha bloqueado la puerta.");
      sensor_rfid.publish("Se ha bloqueado la puerta.");
    }

}

