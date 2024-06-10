import React, {useState} from "react";
import Navbar from "../../components/Navbar";
import MenuHover from "../../components/MenuHover";
import Profile from "../../components/Profile";
import EditProfile from "../../components/EditProfile";
import "../../style/admin-view/Main.css";

function Main() {
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
      <div className="main-container-main">
        <div className="profile-nav-option">
          <MenuHover showOverlay={showOverlay}/>
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
          <button className="main-btn">ESCANEAR QR</button>
          <button className="main-btn"><a href="invitation" className="ref-main">ADMINISTRAR GRUPOS</a></button>
          <button className="main-btn"><a href="invitation" className="ref-main">HACER INVITACIÓN</a></button>

          <div className="buttons">
            <button className='action-btn'><img src="pluma.png" alt="" className='btn-image'/></button>
            <button className='action-btn'><img src="list.png" alt="" className='btn-image'/></button>
        </div>
        </div>
      </div>
    </>
  );
}

export default Main;
