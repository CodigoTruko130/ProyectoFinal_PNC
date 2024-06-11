import React from 'react'
import "../style/components/OverviewMember.css"

function Overview() {
  return (
    <>
        <div className="main-container-overview-m">
            <img src="profile.png" alt="" className='profile-overview-img-member'/>
            <div className="names">
                <p className='name'>Rodrigo Mona</p>
                <p className='user'>Antares</p>
            </div>
        </div>
    </>
  )
}

export default Overview