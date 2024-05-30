import React from 'react'
import Navbar from '../../components/Navbar'
import "../../style/Main.css"

function Main() {
  return (
    <>
        <div className="main-container">
            <Navbar/>
            <img src="qr.png" alt="" className='qr'/>
            <button className='main-btn'>ESCANEAR QR</button>
            <button className='main-btn'>ADMINISTRAR GRUPOS</button>
            <button className='main-btn'>HACER INVITACIÓN</button>
        <div className="buttons">
            <button className='action-btn'><img src="pluma.png" alt="" className='btn-image'/></button>
            <button className='action-btn'><img src="list.png" alt="" className='btn-image'/></button>
        </div>
        </div>
    </>
  )
}

export default Main