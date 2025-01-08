import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AuthPage.css";

import aibotbanner from "./images/aibotbanner.jpg";

const LoginPage = () => {
  const navigate = useNavigate();
  const [passwordVisible, setPasswordVisible] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("User logged in successfully!");
    navigate("/landing");
  };

  return (
    <div className="login-page">
      <header className="header">
        <h1>AI Cyber Helper</h1>
      </header>

      <div className="banner">
        <img src={aibotbanner} alt="AI Cyber Helper Banner" />
      </div>

      <section className="login-section">
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <label>
            E-mail or username:
            <input type="text" name="username" required />
          </label>
          <label>
            Password:
            <div className="password-container">
              <input
                type={passwordVisible ? "text" : "password"}
                name="password"
                required
              />
              <span
                className="toggle-password"
                onClick={() => setPasswordVisible(!passwordVisible)}
              >
                {passwordVisible ? "🔍" : "🔍"}
              </span>
            </div>
          </label>
          <button type="submit">Login</button>
        </form>
      </section>
    </div>
  );
};

export default LoginPage;
