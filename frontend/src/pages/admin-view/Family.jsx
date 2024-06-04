import React from 'react'
import FamilyGroup from '../../components/FamilyGroup';
import "../../style/Family.css"

function Family() {

    const numberOfMembers = 5; 

  return (
    <>
    <div className="main-container-invitation">
            <p className='main-title-i'>GRUPOS FAMILIARES</p>
            <div className="overview-container" style={{ overflow: 'auto', maxHeight: '400px', alignItems: 'flex-start' }}>
                {Array.from({ length: numberOfMembers }).map((_, index) => (
                    <div key={index} className="overview-item-f">
                        {/*index === 0 && <p className="owner-label">(Owner)</p>*/}
                        <FamilyGroup />
                    </div>
                ))}
            </div>

            <button className='add-btn-f'><img src="logos/add.png" alt="" className='add-icon'/>Añadir miembro</button>
        </div>
    </>
  )
}

export default Family