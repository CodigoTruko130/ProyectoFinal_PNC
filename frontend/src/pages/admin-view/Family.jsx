import React from 'react'
import FamilyGroup from '../../components/FamilyGroup';
import "../../style/admin-view/Family.css"

function Family() {

    const numberOfMembers = 5; 

  return (
    <>
    <div className="main-container-invitation">
      <button className='btn-overlay-i'><a href="main" className='ref-i'><img src="icons/back.png" alt=""className='img-btn-overlay-i'/></a></button>
            <p className='main-title-i'>GRUPOS FAMILIARES</p>
            <div className="overview-container" style={{ overflow: 'auto', maxHeight: '400px', alignItems: 'flex-start' }}>
                {Array.from({ length: numberOfMembers }).map((_, index) => (
                    <div key={index} className="overview-item-f">
                        {/*index === 0 && <p className="owner-label">(Owner)</p>*/}
                        <FamilyGroup />
                    </div>
                ))}
            </div>

            <button className='add-btn-f'><a href="search" className='ref-f'><img src="logos/add.png" alt="" className='add-icon'/>Añadir miembro</a></button>
        </div>
    </>
  )
}

export default Family;