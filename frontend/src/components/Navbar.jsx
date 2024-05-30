import React from 'react'
import "../style/components/Navbar.css"

function Navbar() {
  return (
    <>
        <div className="main-container-nav">
            <img src="logos/notification.png" alt="" className='notification'/>
            <div className='image-container-nav'>
                <img src="house-logo.png" alt="" className='house-little'/>
                <p className='subtitle-little'>HVLS</p>
            </div>
            <img src="profile.png" alt="" className='profile-nav'/>
        </div>
    </>
  )
}

export default Navbar