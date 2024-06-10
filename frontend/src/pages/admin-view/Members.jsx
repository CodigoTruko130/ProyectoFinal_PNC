import React from 'react'
import OverviewMember from '../../components/OverviewMember'
import "../../style/admin-view/Members.css"

function Members() {
    const numberOfMembers = 5; 
return (
    <>
            <div className="main-container-members">
      <button className='btn-overlay-i'><a href="main" className='ref-i'><img src="icons/back.png" alt=""className='img-btn-overlay-i'/></a></button>
            <p className='main-title-m'>MIEMBROS</p>
            <div className="overview-container" style={{ overflow: 'auto', maxHeight: '400px', alignItems: 'flex-start' }}>
                {Array.from({ length: numberOfMembers }).map((_, index) => (
                    <div key={index} className="overview-item">
                        {/*index === 0 && <p className="owner-label">(Owner)</p>*/}
                        <OverviewMember/>
                    </div>
                ))}
            </div>

            <button className='add-btn-f'><a href="search" className='ref-f'><img src="logos/add.png" alt="" className='add-icon'/>Añadir miembro</a></button>
        </div>
    </>
)
}

export default Members;