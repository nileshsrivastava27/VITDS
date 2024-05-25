
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault(); 
    console.log("Attempting to log in with", email, password); 

    if (email === "nilesh@test.com" && password === "password123") {
      console.log("Credentials are correct, navigating to /surveillance");
      navigate("/");
    } else {
      console.log("Invalid credentials!");
      alert("Invalid credentials!");
    }
  };

  return (
    <div className="Loginpage-container">
      <div className="loginpage-gridleft">
        {/* Potential place for an image or additional content */}
      </div>
      <div className="loginpage-gridright">
        <form className="loginInsidecontent" onSubmit={handleLogin}>
          <div className="loginFormHeader-loginpage">
            <div className="loginpage-color">Sign in</div>
            <span>or <a href="#">create an account</a></span>
          </div>
          <input 
            className="input-loginpage" 
            type="text" 
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            className="input-loginpage"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="loginformbottom-loginpage">
            <div className="checkboxloginpage">
              <input type="checkbox" name="remember" id="rememberLoginPage" />
              <label htmlFor="rememberLoginPage" className="loginpage-color">Remember me</label>
            </div>
            <button type="submit">Sign in</button>
          </div>
          <a href="#">Forgot your password?</a>
        </form>
      </div>
    </div>
  );
};

export default Login;
