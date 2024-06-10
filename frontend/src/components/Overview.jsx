import React from 'react'
import "../style/components/Overview.css"

function Overview() {
  return (
    <>
        <div className="main-container-overview">
            <img src="profile.png" alt="" className='profile-overview-img'/>
            <div className="names">
                <p className='name'>Rodrigo Mona</p>
                <p className='user'>Antares</p>
            </div>
        </div>
    </>
  )
}

export default Overview