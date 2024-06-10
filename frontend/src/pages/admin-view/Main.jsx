import React, {useState} from "react";
import Navbar from "../../components/Navbar";
import Menu from "../../components/Menu";
import Profile from "../../components/Profile";
import EditProfile from "../../components/EditProfile";
import { useNavigate } from 'react-router-dom';
import "../../style/admin-view/Main.css";


function Main() {

  const navigate = useNavigate();

  const navToScanQR = () => {
      navigate('/ScanQRA');
  };

  const navToFamily = () => {
    navigate('/Family');
  };

  const navToInvitation = () => {
    navigate('/Invitation');
  };

  const navToList = () => {
    navigate('/ListOfVisitsA');
  };

  
  const [isOverlayVisible, setIsOverlayVisible] = useState(false);
  const [overlayComponent, setOverlayComponent] = useState(null);
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const showOverlay = (component) => {
    setOverlayComponent(component);
    setIsOverlayVisible(true);
  };

  const hideOverlay = () => {
    setIsOverlayVisible(false);
    setOverlayComponent(null);
  };
  
  const handleMenuToggle = () => {
    setIsMenuVisible(!isMenuVisible);
  };

  return (
    <>
      <div className="main-container-main">
        <button className="notification-btn"><img src="logos/notification.png" alt="" className="notification-img"/></button>
        <div className="profile-nav-option" >
          <button className="display-menu" onClick={handleMenuToggle}><img src="profile.png" alt="" className="display-menu-img"/></button>
          <Menu isMenuVisible={isMenuVisible} setIsMenuVisible={setIsMenuVisible} showOverlay={showOverlay}/>
          {isOverlayVisible &&(
            <div className="overlay">
            {overlayComponent === 'Profile' && <Profile hideOverlay={hideOverlay} />}
            {overlayComponent === 'EditProfile' && <EditProfile hideOverlay={hideOverlay} />}
          </div>
          )}
        </div>
        <div className="column-main">
          <div className="navbar-container-mobile">
            <Navbar />
          </div>
          <img src="qr.png" alt="" className="qr" />
          <button className="main-btn" onClick={navToScanQR}>ESCANEAR QR</button>
          <button className="main-btn" onClick={navToFamily}>ADMINISTRAR GRUPOS</button>
          <button className="main-btn" onClick={navToInvitation}>HACER INVITACIÓN</button>

          <div className="buttons">
            <button className='action-btn'><img src="pluma.png" alt="" className='btn-image'/></button>
            <button className='action-btn' onClick={navToList}><img src="list.png" alt="" className='btn-image'/></button>
        </div>
        </div>
      </div>
    </>
  );
}

export default Main;
