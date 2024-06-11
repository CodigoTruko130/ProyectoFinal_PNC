import React from 'react'
import { useNavigate } from "react-router-dom";
import FamilyGroup from '../../pages/family-owner-view/FamilyGroup';
import "../../style/admin-view/Family.css"

function Family() {

    const navigate = useNavigate();
    const numberOfMembers = 5; 

    const navToOwnerMain = () => {
      navigate('/OwnerView');
    };   

    const navToSearch = () => {
      navigate('/OwnerSearch');
    };


  return (
    <>
    <div className="main-container-invitation">
      <button className='btn-overlay-i' onClick={navToOwnerMain}><img src="icons/back.png" alt=""className='img-btn-overlay-i'/></button>
            <p className='main-title-i'>GRUPOS FAMILIARES</p>
            <div className="overview-container" style={{ overflow: 'auto', maxHeight: '400px', alignItems: 'flex-start' }}>
                {Array.from({ length: numberOfMembers }).map((_, index) => (
                    <div key={index} className="overview-item-f">
                        {/*index === 0 && <p className="owner-label">(Owner)</p>*/}
                        <FamilyGroup />
                    </div>
                ))}
            </div>

            <button className='add-btn-f' onClick={navToSearch}><img src="logos/add.png" alt="" className='add-icon'/>Añadir miembro</button>
        </div>
    </>
  )
}

export default Family;