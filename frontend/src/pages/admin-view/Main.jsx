import React from "react";
import Navbar from "../../components/Navbar";
import MenuHover from "../../components/MenuHover";
import "../../style/admin-view/Main.css";

function Main() {
  return (
    <>
      <div className="main-container-main">
        <div className="profile-nav-option">
          <MenuHover />
        </div>
        <div className="column-main">
          <div className="navbar-container-mobile">
            <Navbar />
          </div>
          <img src="qr.png" alt="" className="qr" />
          <button className="main-btn">ESCANEAR QR</button>
          <button className="main-btn">ADMINISTRAR GRUPOS</button>
          <button className="main-btn">HACER INVITACIÓN</button>
        </div>
      </div>
    </>
  );
}

export default Main;
