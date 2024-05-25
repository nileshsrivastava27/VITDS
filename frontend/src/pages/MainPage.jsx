// import React from 'react'

// const MainPage = () => {
//   return (
//     <div className='mainpage'>
//         <h1>Welcome to VITDS</h1>
//         <div className='leftpage'>
//             <div className='rightPage'>
//               <button className = "rightPageButton">Merchant's Page</button>
//               <button className = "rightPageButton">Driver's Page</button>
//               <button className = "rightPageButton">Passenger's Page</button>
//             </div>
//         </div>
//     </div> 
//   )
// }

// export default MainPage

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login/Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault(); 
    console.log("Attempting to log in with", email, password); 

    if (email === "nilesh@test.com" && password === "password123") {
      console.log("Credentials are correct, navigating to /surveillance");
      navigate("/surveillance");
    } else {
      console.log("Invalid credentials!");
      alert("Invalid credentials!");
    }
  };

  const handleClick1 = () => {
    navigate("/login");
  }
  const handleClick2 = () =>{
    navigate("/surveillance")
  }

  return (
    <div className="Loginpage-container">
      <div className="loginpage-gridleft">
        {/* Potential place for an image or additional content */}
        <h1>Welcome to Cab Threat Detection System</h1>
      </div>
      <div className="loginpage-gridright">
              <button className = "rightPageButton" onClick={handleClick1}>Merchant's Page</button>
              <button className = "rightPageButton" onClick = {handleClick2}>Driver's Page</button>
      </div>
    </div>
  );
};

export default Login;
