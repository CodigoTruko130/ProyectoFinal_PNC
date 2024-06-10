import React from 'react'
import MenuHover from './MenuHover'
import "../style/components/Navbar.css"

function Navbar() {
  return (
    <>
        <div className="main-container-nav">
            <img src="logos/notification.png" alt="" className='notification'/>
            <img src="logos/notification-dark.png" alt="" className='notification-dark'/>
            <div className='image-container-nav'>
                <img src="house-logo.png" alt="" className='house-little'/>
                <p className='subtitle-little'>HVLS</p>
            </div>
            <MenuHover/>
        </div>
    </>
  )
}

export default Navbar;