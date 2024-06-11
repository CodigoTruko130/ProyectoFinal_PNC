import React, {useState} from 'react'
import "../../style/admin-view/Invitation.css"
import { useNavigate } from 'react-router-dom';
import Overview from '../../components/OverviewInvitation';

function Search() {
  const [searchValue, setSearchValue] = useState('');
  const handleSearchEvent = (event) => {
      setSearchValue(event.target.value);
  };
  const numberOfPeopleToInvite = 5; 

  const navigate = useNavigate();

  const navToOwnerMain = () => {
    navigate('/FamilyOwner');
  };

  return (
    <>
      <div className="main-container-invitation">
      <button className='btn-overlay-i' onClick={navToOwnerMain}><img src="icons/back.png" alt=""className='img-btn-overlay-i'/></button>
        <p className='main-title-i'>BUSCAR MIEMBROS</p>
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

export default Search;