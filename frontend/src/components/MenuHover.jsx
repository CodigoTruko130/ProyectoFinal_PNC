import React, {useState} from 'react';
import Overview from './Overview';
import "../style/components/MenuHover.css"

function MenuHover({showOverlay}) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleProfileClick = () => {
      showOverlay('Profile');
      setIsOpen(false); // Cierra el menú cuando se muestra el overlay
  };

  const handleEditProfileClick = () => {
    showOverlay('EditProfile');
    setIsOpen(false); // Cierra el menú cuando se muestra el overlay
};

  return (
    <>
    <div className="menu-container">
        <div className="menu-item" onClick={toggleMenu}>
            <img src="profile.png" alt="" className='profile'/>
            <div className="dropdown-content">
            <Overview/>
            <button className='menu-option' onClick={handleProfileClick}><img src="icons/user.png" alt="" id='user'/>Mi perfil</button>
            <button className='menu-option' onClick={handleEditProfileClick}><img src="icons/edit.png" alt="" id='edit'/>Editar perfil</button>
            <button className='menu-option'><img src="icons/exit.png" alt="" id='exit'/>Salir</button>
            </div>
        </div>
    </div>
    </>
  )
}

export default MenuHover