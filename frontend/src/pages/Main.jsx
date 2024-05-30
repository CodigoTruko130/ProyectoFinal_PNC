import React from 'react'
import '../style/Main.css'
import axios from 'axios';
import GoogleLogin from 'react-google-login';

function main() {
    const clientID = "851868671234-u9ll7dnvslhlkk5di89j8q8cn350dl6q.apps.googleusercontent.com"

    const onSuccess = async (response) => {
        const { accessToken, googleId } = response;
        const { email } = response.profileObj;
        const userD = {
          accessToken,
          googleId,
          email,
        };
        console.log(response);
        try {
          const responseAPI = await axios.post('http://localhost:8080/api/auth/login-google', userD);
            console.log(responseAPI.data);
        } catch (error) {
          console.error('Error al iniciar:', error);
        }
      }
    
      
      const onFailure = (response) => {
        console.log("Something Failure")
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
                clientId={clientID}
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy={"single_host_policy"}
            />
            
        </div>
    </>
  )
}

export default main