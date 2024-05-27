import React, { useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../style/GuardView/ScanQR.css';

function ScanQR() {

  // Navegar a otras paginas.
  const navigate = useNavigate();

  const navigateToMainGuardView = () => {
    navigate('/');
  };

  // Activar camara para leer QR.
  const videoRef = useRef(null);

  useEffect(() => {
    const getMedia = async () => {
      if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        try {
          const stream = await navigator.mediaDevices.getUserMedia({ video: true });
          if (videoRef.current) {
            videoRef.current.srcObject = stream;
            videoRef.current.onloadedmetadata = () => {
              videoRef.current.play();
            };
          }
        } catch (error) {
          console.error("Error accessing the camera: ", error);
        }
      }
    };

    getMedia();

    return () => {
      if (videoRef.current && videoRef.current.srcObject) {
        videoRef.current.srcObject.getTracks().forEach(track => track.stop());
      }
    };
  }, []);

  return (
    <div className="main-scan-container">
        <div className="back-container">
          <button onClick={ navigateToMainGuardView } className="back-button"><img src="./GuardView/back.png" className="back-img" alt="Boton para ir hacia pagina anterior."/></button>
        </div>

        <p className="main-title">Escanear Código QR</p>
        <div className="camera-container">
            <video ref={ videoRef } className="camera-view" autoPlay playsInline />
        </div>

        <div className="scan-button-container">
            <button className="scan-qr-button" ><img src='./GuardView/scan.png' className="scan-img" alt="Boton para escaner QR" /><p className="button-text" >Scan QR</p></button>
        </div>
    </div>
  );
}

export default ScanQR;
