import React from "react";
import { Link } from "react-router-dom"; 
import "./MainPage.css";

import aibotbanner from "./images/aibotbanner.jpg";
import humanandai from "./images/humanandai.jpg";
import aihead from "./images/aihead.jpg";
import aichat from "./images/aichat.jpg";

const MainPage = () => {
  const content = [
    {
      image: aibotbanner,
      text: "The AI Cyber Helper is developed to support various types of people with their questions on cybersecurity related topics.",
    },
    {
      image: humanandai,
      text: "Our tools allow you to scan for phishing URLs, check network vulnerabilities, and analyze potential data breaches.",
    },
    {
      image: aihead,
      text: "With AI Cyber Helper, you can stay ahead on cyber threats and protect your personal or organizational data.",
    },
    {
      image: aichat,
      text: "Explore our wide range of tools and get AI-powered assistance!",
    },
  ];

  return (
    <div className="main-page">
      <header className="header">
        <h1>AI Cyber Helper</h1>
        <div className="auth-buttons">
          <button onClick={() => (window.location.href = "/login")}>Login</button>
          <button onClick={() => (window.location.href = "/register")}>
            Sign up
          </button>
        </div>
      </header>

      <section className="intro-section">
        <h2>Analyze digital security with AI assistance</h2>
        <p>
          This web application allows you to analyze multiple digital security
          aspects, while being assisted by an AI chatbot!
        </p>
      </section>

      <section className="dynamic-section">
        {content.map((item, index) => (
          <div className="image-section" key={index}>
            <img src={item.image} alt={`Slide ${index + 1}`} />
            <div className="text-section">
              <p>{item.text}</p>
            </div>
          </div>
        ))}
      </section>

      <footer className="footer">
        <p>
          <Link to="/faq" className="help-link">Help?</Link> 
        </p>
      </footer>
    </div>
  );
};

export default MainPage;
