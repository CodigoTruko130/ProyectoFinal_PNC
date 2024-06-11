import React from 'react'
import { useNavigate } from "react-router-dom";
import "../../style/components/FamilyGroup.css"

function FamilyGroup() {

  const navigate = useNavigate();

  const navToFamily = () => {
    navigate('/OwnerEditM');
  };

  return (
    <>
        <div className="main-container-fg" onClick={navToFamily}>
            <img src="/logos/house.png" alt="" className='hp-img'/> <p className='hp-title'>Caballero Guerrero</p>
        </div>
    </>
  )
}

export default FamilyGroup