import React from 'react'
import "../style/components/Menu.css"

function Menu() {
  return (
    <>
        <div className="main-container-menu">
            <div className="user">
            <img src="profile.png" alt="" className='profile-menu'/>
            <div className="user-info">
                <p className='subtitle-menu'>Rodrigo Mona</p>
                <p className='text-menu'>Ancient Anubis</p>
            </div>
            </div>
            <div className="menu-options">
                <div className="menu-option">
                    <img src="logos/profile.png" alt="" className='menu-icon'/>
                    <p className='menu-text'>Mi perfil</p>
                </div>
                <div className="menu-option">
                    <img src="logos/edit.png" alt="" className='menu-icon'/>
                    <p className='menu-text'>Editar perfil</p>
                </div>
                <div className="menu-option">
                    <img src="logos/logout.png" alt="" className='menu-icon'/>
                    <p className='menu-text'>Salir</p>
                </div>
            </div>
        </div>
    </>
  )
}

export default Menu