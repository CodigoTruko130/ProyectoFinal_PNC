import React from 'react';
import Overview from './Overview';
import "../style/components/MenuHover.css"

function MenuHover() {
  return (
    <>
    <div className="menu-container">
        <div className="menu-item">
            <img src="profile.png" alt="" className='profile'/>
            <div className="dropdown-content">
            <Overview/>
            <a href="#link1" className='menu-option'><img src="icons/user.png" alt="" id='user'/>Mi perfil</a>
            <a href="#link2" className='menu-option'><img src="icons/edit.png" alt="" id='edit'/>Editar perfil</a>
            <a href="#link3" className='menu-option'><img src="icons/exit.png" alt="" id='exit'/>Salir</a>
            </div>
        </div>
    </div>
    </>
  )
}

export default MenuHover