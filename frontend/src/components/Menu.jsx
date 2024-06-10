import React, {useState} from 'react'
import "../style/components/Menu.css"

function Menu({ isMenuVisible, setIsMenuVisible, showOverlay }) {

  const handleMenuClose = () => {
    setIsMenuVisible(false);
  };

  const handleProfileClick = () => {
    showOverlay('Profile');
    setIsMenuVisible(false); // Cierra el menú cuando se muestra el overlay
};

const handleEditProfileClick = () => {
  showOverlay('EditProfile');
  setIsMenuVisible(false); // Cierra el menú cuando se muestra el overlay
};

  return (
    <>
    {isMenuVisible && 
    (<div className="main-container-menu" onClick={handleMenuClose}>
            <div className="user">
            <img src="profile.png" alt="" className='profile-menu'/>
            <div className="user-info">
                <p className='subtitle-menu'>Rodrigo Mona</p>
                <p className='text-menu'>Ancient Anubis</p>
            </div>
            </div>
            <div className="menu-options">
                <button className='menu-option' onClick={handleProfileClick} >
                    <img src="logos/profile.png" alt="" className='menu-icon'/>
                    <p className='menu-text'>Mi perfil</p>
                </button >
                <button className='menu-option' onClick={handleEditProfileClick}>
                    <img src="logos/edit.png" alt="" className='menu-icon'/>
                    <p className='menu-text'>Editar perfil</p>
                </button>
                <button className="menu-option">
                    <img src="logos/logout.png" alt="" className='menu-icon'/>
                    <p className='menu-text'>Salir</p>
                </button>
            </div>
        </div>)}
    </>
  )
}

export default Menu