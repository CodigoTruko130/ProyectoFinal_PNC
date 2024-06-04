import React from 'react'
import "../style/components/Notification.css"

function notification() {
  return (
    <>
        <div className="main-container-noti">
            <img src="profile.png" alt="" className='profile-nav-2'/>
            <div className="info-noti">
                <p className='subtitle-noti'>Rodrigo Mona</p>
                <p className='text-noti'>Se ha unido a un grupo de hogar ...</p>
            </div>
            
        </div>
    </>
  )
}

export default notification