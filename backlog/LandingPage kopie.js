import React from "react";
import { useNavigate } from "react-router-dom";
import "./LandingPage.css";

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="landing-page">
      <header className="header">
        <h1>AI Cyber Helper</h1>
        <nav>
          <button onClick={() => navigate("/functional")}>Phishing Tools</button>
        </nav>
      </header>

      <section className="intro-section">
        <h2>Analyze digital security with AI assistance</h2>
        <p>
          This web application offers a set of tools to help keep your network
          safe. You can scan ports, check phishing URLs, and more.
        </p>
      </section>
    </div>
  );
};

export default LandingPage;
