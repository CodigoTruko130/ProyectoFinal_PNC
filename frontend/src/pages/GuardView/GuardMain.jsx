import React from "react"
import { useNavigate } from 'react-router-dom';
import '../../style/GuardView/GuardMain.css'

function QR_Page () {

    const navigate = useNavigate();

    const navigateToScanQR = () => {
        navigate('/ScanQR');
      };

    return (
        <>
            <div className="main-container">
                
                <div className="qr-container">
                    <img src="qr-code-example.png" className="qr-img" alt="QR Code Logo" />
                </div>

                <div className="buttons-container">
                    <div className="button-container">
                        <button className="scan-page-button" onClick={navigateToScanQR}><p>Escanear QR</p></button>
                    </div>

                    <div className="button-container">
                        <button className="scan-page-button"><p>Registrar Visita</p></button>
                    </div>
                </div>

            </div>
        </>
    )
}

export default QR_Page