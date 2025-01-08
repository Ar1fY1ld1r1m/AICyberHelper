import React from "react";
import { useNavigate } from "react-router-dom";
import "./LandingPage.css";
import aibotbanner from "./images/aibotbanner.jpg";

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="landing-page">
      <header className="header">
        <h1>Welcome to AI Cyber Helper</h1>
      </header>

      <div className="banner">
        <img src={aibotbanner} alt="AI Cyber Helper Banner" />
      </div>

      <section className="content">
        <p>
          Use our tools to analyze your digital security. From phishing
          detection to network scanning, we've got you covered.
        </p>
        <button
        className="landing-button" onClick={() => navigate("/tools/functional")} >
          Go to Tools
      </button>   
    </section>
    <section className="phishing">
    <p>
        Phishing URL Scanner
    </p>  
</section>
<section className="data-leak">
    <p>
        Data Leak E-mail Scanner
    </p>  
</section>
<section className="network-port">
    <p>
        Network and Port Scanner
    </p>  
</section>
    </div>
  );
};

export default LandingPage;
