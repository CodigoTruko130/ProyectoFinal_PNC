import React, {useState} from 'react'
import "../../style/admin-view/Invitation.css"
import Overview from '../../components/OverviewMember';
import { useNavigate } from "react-router-dom";

function Invitation() {
  const [searchValue, setSearchValue] = useState('');
  const handleSearchEvent = (event) => {
      setSearchValue(event.target.value);
  };

  const navigate = useNavigate();

  const navToOwnerMain = () => {
    navigate('/MemberView');
  };

  const numberOfPeopleToInvite = 5; 
  return (
    <>
      <div className="main-container-invitation">
      <button className='btn-overlay-i' onClick={navToOwnerMain}><img src="icons/back.png" alt=""className='img-btn-overlay-i'/></button>
        <p className='main-title-i'>HACER INVITACIÓN</p>
        <input type="text" value={searchValue} onChange={handleSearchEvent} placeholder="Nombre de usuario" className="search-input"/>
        <div className="overview-container" style={{ overflow: 'auto', maxHeight: '400px', alignItems: 'flex-start' }}>
          {Array.from({ length: numberOfPeopleToInvite }).map((_, index) => (
            <div key={index} className="overview-item">
              <Overview />
            </div>
          ))}
        </div>
        <button className='invitation-button'>INVITAR </button>
      </div>
    </>
  )
}

export default Invitation;