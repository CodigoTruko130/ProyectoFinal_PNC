import React from 'react'
import "../style/components/OverviewInvitation.css"

function Overview() {
  return (
    <>
        <div className="main-container-overview-i">
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