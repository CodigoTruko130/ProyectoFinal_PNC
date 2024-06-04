import React from 'react'
import '../../style/Login.css'

function main() {
  return (
    <>
        <div className='main-container'>
            <p className='subtitle'>Residencia</p>
            <p className='main-title'>HLVS</p>
            <div className='image-container'>
                <img src="house-logo.png" alt="" className='house'/>
            </div>
            <div className='button-container'>
                <button className='login-btn'><img src="google.png" alt="" className='google' /><p className='main-text'>LOGIN WITH GOOGLE</p></button>
            </div>
            <div className='button-container'>
                <button className='register-btn'><img src="google.png" alt="" className='google' /><p className='main-text'>CREATE AN ACCOUNT</p></button>
            </div>
        </div>
    </>
  )
}

export default main