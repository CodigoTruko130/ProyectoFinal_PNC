import React, { useRef, useEffect } from 'react';
import '../../style/GuardView/ScanQR.css';

function ScanQR() {
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
    <div className="main-container">

        <p className="main-title">Escanear Código QR</p>
        <div className="camera-container">
            <video ref={videoRef} className="camera-view" autoPlay playsInline />
        </div>

        <div className="scan-button-container">
            <button className="scan-qr-button" ><p className="button-text" >Scan QR</p></button>
        </div>

    </div>
  );
}

export default ScanQR;
