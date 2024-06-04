import React from 'react'
import '../../style/Login.css'
import { GoogleLogin } from '@react-oauth/google';
import {jwtDecode} from 'jwt-decode';

function main() {

    
    function handleLogin(response) {
        const token = response.credential; // Aquí usas el valor de 'credential' que recibiste
        const decoded = jwtDecode(token);
        const postData = {
            name: decoded.name,
            picture: decoded.picture,
            email: decoded.email
        };
        console.log('Datos del usuario:', postData);
    
        fetch('http://localhost:8080/api/auth/login', { 
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(postData)
        })
        .then(response => response.json())
        .then(data => {
            console.log('Respuesta del servidor:', data);
        })
        .catch(error => {
            console.error('Error al enviar datos:', error);
        });
    }

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
                <GoogleLogin
                    onSuccess={credentialResponse => {
                        handleLogin(credentialResponse);
                    }}
                    onError={() => {
                        console.log('Login Failed');
                    }}
                />
            </div>
        </>
    )
}

export default main