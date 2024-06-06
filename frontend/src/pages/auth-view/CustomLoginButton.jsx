import React from 'react';
import { useGoogleLogin } from '@react-oauth/google';
import '../../style/auth-view/CustomLoginButton.css'

function CustomLoginButton({ onLoginSuccess, onLoginError }) {
  const googleLogin = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      const accessToken = tokenResponse.access_token;
      console.log('Google login successful', accessToken);

      try {
        const userInfoResponse = await fetch('https://www.googleapis.com/oauth2/v3/userinfo', {
          headers: {
            'Authorization': `Bearer ${accessToken}`,
          },
        });

        const userInfo = await userInfoResponse.json();
        const postData = {
          name: userInfo.name,
          picture: userInfo.picture,
          email: userInfo.email,
        };
        console.log('Datos del usuario:', postData);

        fetch('http://localhost:8080/api/auth/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(postData),
        })
          .then((response) => response.json())
          .then((data) => {
            console.log('Respuesta del servidor:', data);
          })
          .catch((error) => {
            console.error('Error al enviar datos:', error);
          });

        onLoginSuccess(tokenResponse);
      } catch (error) {
        console.error('Error fetching user info:', error);
        onLoginError();
      }
    },
    onError: () => {
      console.error('Google login failed');
      onLoginError();
    },
    flow: 'auth-code',
  });

  return (
    <button onClick={() => googleLogin()} className='google-button'>
      <img src="google.png" alt="" className='google' /><p className='main-text'>LOGIN WITH GOOGLE</p>
    </button>
  );
}

export default CustomLoginButton;