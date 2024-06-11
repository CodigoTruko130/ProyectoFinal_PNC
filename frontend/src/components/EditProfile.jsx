import React from 'react'
import "../style/components/EditProfile.css"

  function EditProfile({ hideOverlay }) {
    const handleOverlayClick = (e) => {
      if (e.target === e.currentTarget) {
        hideOverlay();
      }
    };
    
  return (
    <>
      <div className="main-container-edit" onClick={handleOverlayClick}>
      <button onClick={hideOverlay} className='btn-overlay'><img src="/icons/back.png" alt=""className='img-btn-overlay'/></button>
      <img src="/profile.png" alt="" className='profile-edit-img'/>
      <p className='text'>¿Desdeas cambiar tus datos?</p>
      <input type="text" className="edit" placeholder='Nombre de usuario'/>
      <input type="text" className="edit" placeholder='Nombre'/>
      <input type="text" className="edit" placeholder='Edad'/>
      <input type="text" className="edit" placeholder='DUI'/>

      <button className='update'>ACTUALIZAR</button>

      <p className="text">¿Deseas abandonar tu grupo familiar?</p>

      <button className='leave'>ABANDONAR</button>
      </div>
    </>
  )
}

export default EditProfile