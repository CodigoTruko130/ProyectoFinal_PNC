import React from "react"
import { useNavigate } from 'react-router-dom';
import '../../style/GuardView/GuardMain.css'

function GuardMain() {

    const navigate = useNavigate();

    const navToScanQR = () => {
        navigate('/ScanQR');
    };

    const navToRegVisitView = () => {
        navigate('/RegisterVisit');
    };  

    const navToListOfVisits = () => {
        navigate('/ListOfVisits');
    }

    return (
        <>
            <div className="main-container">
                
                <div className="top-bar-container">
                    <button className="notification-button">
                        <img src="./noNotification.png" className="notification-img" alt="Icono de Notificaciones" />
                    </button>

                    <div className="tittle-container">
                        <img src="./house.png" className="house-img" alt="Icono de Casa"/>
                        <p className="tittle-text">HLVS</p>
                    </div>

                    <button className="profile-button">
                        <img src="./profilePhoto.png" className="profile-img" alt="Foto de Perfil" />
                    </button>
                </div>

                <div className="qr-container">
                    <img src="/qr.png" className="qr-img" alt="QR Code Logo" />
                </div>

                <div className="buttons-container">
                    <div className="button-container">
                        <button onClick={ navToScanQR } className="scan-page-button"><p className="main-button-text">Escanear QR</p></button>
                    </div>

                    <div className="button-container">
                        <button onClick={ navToRegVisitView } className="scan-page-button"><p className="main-button-text">Registrar Visita</p></button>
                    </div>

                    <div className="utils-container">
                        <button className="utils-button">
                            <img src="./pluma.png" className="utils-img" alt="Foto de Perfil" />
                        </button>
                        <button className="utils-button">
                            <img onClick={ navToListOfVisits } src="./registerVisit.png" className="utils-img" alt="Foto de Perfil" />
                        </button>
                    </div>
                </div>

            </div>
        </>
    )
}

export default GuardMain;