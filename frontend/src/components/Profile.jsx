import React from 'react'
import "../style/components/Profile.css"

function Profile({hideOverlay}) {

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      hideOverlay();
    }
  };

  return (
  <>
    <div className="main-container-profile" onClick={handleOverlayClick}>
      <button onClick={hideOverlay} className='btn-overlay'><img src="/icons/back.png" alt=""className='img-btn-overlay'/></button>
      <img src="/profile.png" alt="" className='profile-info-img'/>
      <p className='subtitle-profile'>Rodrigo Mona (owner)</p>
      <p className="text-profile">Ancient anubis</p>
      <p className='home-info'><b>Grupo Familiar:</b> Casa Caballero Guerrero</p>
      <p className="title">DATOS PERSONALES</p>
      <div className="info-grid">
        <div className="column-profile">
          <p className="grid-title">DUI:</p>
          <p className="grid-title">Nombre:</p>
          <p className="grid-title">Edad:</p>
          <p className="grid-title">Correo</p>
        </div>
        <div className="column-profile">
          <p className="grid-info">000001343-1</p>
          <p className="grid-info">Rodrigo Mona</p>
          <p className="grid-info">∞</p>
          <p className="grid-info">rodand19@uca.edu.sv</p>
        </div>
      </div>
    </div>
  </>
  )
}

export default Profile