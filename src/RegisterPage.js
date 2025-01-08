import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AuthPage.css";

import aibotbanner from "./images/aibotbanner.jpg";

const RegisterPage = () => {
  const navigate = useNavigate();
  const [passwordVisible, setPasswordVisible] = useState(false);

  const handleRegister = (e) => {
    e.preventDefault();
    console.log("User registered successfully!");
    navigate("/landing");
  };

  return (
    <div className="register-page">
      <header className="header">
        <h1>AI Cyber Helper</h1>
      </header>

      <div className="banner">
        <img src={aibotbanner} alt="AI Cyber Helper Banner" />
      </div>

      <section className="register-section">
        <h2>Register</h2>
        <form onSubmit={handleRegister}>
          <label>
            E-mail:
            <input type="email" name="email" required />
          </label>
          <label>
            Username:
            <input type="text" name="username" required />
          </label>
          <label>
            Date of Birth:
            <input type="date" name="dbirth" required />
          </label>
          <label>
            Address:
            <input type="text" name="address" required />
          </label>
          <label>
            Phone Number:
            <input type="tel" name="pnumber" required />
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
          <label>
            Repeat Password:
            <input
              type={passwordVisible ? "text" : "password"}
              name="repeat_password"
              required
            />
          </label>
          <button type="submit">Register</button>
        </form>
      </section>
    </div>
  );
};

export default RegisterPage;
