import React, { useRef, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import jsQR from 'jsqr';
import '../../style/admin-view/ScanQRA.css';

function ScanQR() {
  const navigate = useNavigate();
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [scanning, setScanning] = useState(false);

  const navToMainGuardView = () => {
    navigate('/GuardView');
  };

  useEffect(() => {
    const getMedia = async () => {
      if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        try {
          const stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' } });
          if (videoRef.current) {
            videoRef.current.srcObject = stream;
            videoRef.current.onloadedmetadata = () => {
              videoRef.current.play();
            };
          }
        } catch (error) {
          console.error('Error accessing the camera: ', error);
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

  const scanQRCode = () => {
    if (videoRef.current && canvasRef.current) {
      const canvas = canvasRef.current;
      const context = canvas.getContext('2d');

      const drawFrame = () => {
        if (scanning) {
          if (videoRef.current.readyState === videoRef.current.HAVE_ENOUGH_DATA) {
            canvas.width = videoRef.current.videoWidth;
            canvas.height = videoRef.current.videoHeight;
            context.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);

            const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
            const code = jsQR(imageData.data, imageData.width, imageData.height);

            if (code) {
              console.log('QR Code found:', code.data);
              setScanning(false); // Stop scanning after finding a QR code
              // Aquí puedes hacer algo con el código QR leído
            }
          }
          requestAnimationFrame(drawFrame);
        }
      };

      drawFrame();
    }
  };

  const handleScanButtonClick = () => {
    setScanning(true);
    scanQRCode();
  };

  return (
    <div className="main-scan-container">
      <button className='btn-overlay-i'><a href="main" className='ref-i'><img src="icons/back-white.png" alt=""className='img-btn-overlay-i'/></a></button>
      <p className="main-title">Escanear Código QR</p>
      <div className="camera-container">
        <video ref={videoRef} className="camera-view" autoPlay playsInline />
        <canvas ref={canvasRef} className="camera-canvas" style={{ display: 'none' }} />
      </div>

    </div>
  );
}

export default ScanQR;
