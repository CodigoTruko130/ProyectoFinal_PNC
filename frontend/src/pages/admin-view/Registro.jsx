import React from 'react'
import "../../style/Registro.css"

function Registro() {
  return (
    <>
        <div className="main-container">
            <div className='image-container-little'>
                    <img src="house-logo.png" alt="" className='house-little'/>
                    <p className='subtitle-little'>HVLS</p>
            </div>
                <p className='subtitle-v2'>REGISTRO</p>
            <form action="" className='form'>
                <input type="text" placeholder='Nombre completo' className='input'/>
                <input type="text" placeholder='Edad' className='input'/>
                <p className='sub-subtitle'>Si eres mayor de edad llena el campo DUI</p>
                <input type="text" placeholder='DUI' className='input'/>

                <button className='btn'>REGISTRAR</button>
            </form>
        </div>
    </>
  )
}

export default Registro