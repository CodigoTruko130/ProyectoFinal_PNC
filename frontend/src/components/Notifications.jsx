import React from 'react';
import Notification from './Notification';
import "../style/components/MenuHover.css"

function MenuHover() {
  
  return (
    <>
    <div className="menu-container-n">
        <div className="menu-item-n" >
            <img src="icons/notification.png" alt="" className='profile-n'/>
            <div className="dropdown-content-n">
            <div className="menu-option"><Notification/></div>
            </div>
        </div>
    </div>
    </>
  )
}

export default MenuHover