import React from 'react'
import Overview from '../../components/Overview'
import "../../style/admin-view/Members.css"

function Members() {
    const numberOfMembers = 5; 
return (
    <>
            <div className="main-container-invitation">
            <p className='main-title-i'>MIEMBROS</p>
            <div className="overview-container" style={{ overflow: 'auto', maxHeight: '400px', alignItems: 'flex-start' }}>
                {Array.from({ length: numberOfMembers }).map((_, index) => (
                    <div key={index} className="overview-item">
                        {/*index === 0 && <p className="owner-label">(Owner)</p>*/}
                        <Overview />
                    </div>
                ))}
            </div>

            <button className='add-btn'><img src="logos/add.png" alt="" className='add-icon'/>Añadir miembro</button>
        </div>
    </>
)
}

export default Members;