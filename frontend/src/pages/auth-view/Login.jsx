import React, { useState } from "react";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";
import "../../style/auth-view/Login.css";

function Login() {
  // Establece 'admin' como el valor predeterminado para selectedOption
  const [selectedOption, setSelectedOption] = useState("admin");
  const navigate = useNavigate();

  function handleLogin(response) {
    const token = response.credential;
    const decoded = jwtDecode(token);
    const postData = {
      name: decoded.name,
      picture: decoded.picture,
      email: decoded.email,
    };
    console.log("Datos del usuario:", postData);

    fetch("http://localhost:8080/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Respuesta del servidor:", data);
      })
      .catch((error) => {
        console.error("Error al enviar datos:", error);
      });
  }

  function handleSelectChange(event) {
    setSelectedOption(event.target.value);
    console.log("Opción seleccionada:", event.target.value);
  }

  function handleNavigate() {
    if (selectedOption === "admin") {
      navigate("/Main");
    } else if (selectedOption === "owner") {
      navigate("/OwnerView");
    } else if (selectedOption === "member") {
      navigate("/MemberView");
    } else if (selectedOption === "user") {
      navigate("/UserView");
    } else if (selectedOption === "guard") {
      navigate("/GuardView/");
    }
  }

  return (
    <>
      <div className="main-container-main">
        <div className="column-login">
          <p className="subtitle">Residencia</p>
          <p className="main-title">HLVS</p>
          <div className="image-container">
            <img src="house-logo.png" alt="" className="house" />
          </div>
        </div>

        <div className="column-login-op">
          <div className="button-container">
            <button onClick={handleNavigate} className="login-btn">
              <img src="google.png" alt="" className="google" />
              <p className="main-text">LOGIN WITH GOOGLE</p>
            </button>
            <div className="dropdown-container">
              <select
                value={selectedOption}
                onChange={handleSelectChange}
                className="dropdown"
              >
                <option value="admin">Admin View</option>
                <option value="owner">House Owner View</option>
                <option value="member">House Member View</option>
                <option value="user">User View</option>
                <option value="guard">Guard View</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;


// ***************** PROBANDO, FALTA ARREGLARLO ***************** \\
// // Login.js
// import React from 'react';
// import '../../style/Login.css';
// import CustomLoginButton from './CustomLoginButton';

// function Login() {
//   function handleLogin(response) {
//     console.log('Login Successful:', response);
//     // Lógica para manejar el token de autenticación
//   }

//   return (
//     <>
//       <div className='main-container'>
//         <p className='subtitle'>Residencia</p>
//         <p className='main-title'>HLVS</p>
//         <div className='image-container'>
//           <img src="house-logo.png" alt="" className='house' />
//         </div>
//         <div className='button-container'>
//           <CustomLoginButton
//             onLoginSuccess={handleLogin}
//             onLoginError={() => console.log('Login Failed')}
//           />
//         </div>
//       </div>
//     </>
//   );
// }

// export default Login;
