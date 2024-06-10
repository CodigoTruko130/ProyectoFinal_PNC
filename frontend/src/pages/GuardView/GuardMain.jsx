import React, {useState} from "react";
import { useNavigate } from 'react-router-dom';
import Navbar from "../../components/Navbar";
import MenuHover from "../../components/MenuHover";
import Profile from "../../components/Profile";
import EditProfile from "../../components/EditProfile";
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

    const [isOverlayVisible, setIsOverlayVisible] = useState(false);
    const [overlayComponent, setOverlayComponent] = useState(null);
  
    const showOverlay = (component) => {
        setOverlayComponent(component);
        setIsOverlayVisible(true);
    };
  
    const hideOverlay = () => {
        setIsOverlayVisible(false);
        setOverlayComponent(null);
    };

    return (
        <>
            <div className="main-container">
    
                <div className="profile-nav-option">
                    <MenuHover showOverlay={showOverlay}/>
                    {isOverlayVisible &&(
                        <div className="overlay">
                            {overlayComponent === 'Profile' && <Profile hideOverlay={hideOverlay} />}
                            {overlayComponent === 'EditProfile' && <EditProfile hideOverlay={hideOverlay} />}
                        </div>
                    )}
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