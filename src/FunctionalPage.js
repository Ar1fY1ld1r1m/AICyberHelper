import React, { useState } from "react";
import "./FunctionalPage.css";
import npscan from "./images/networkscan.jpg";
import phishing from "./images/phishingcard.jpg";
import databreach from "./images/databreach.webp";


const FunctionalPage = () => {
  const [activeTool, setActiveTool] = useState("phishing"); 

  const renderToolContent = () => {
    switch (activeTool) {
      case "phishing":
        return (
          <div className="tool-content">

          <div className="banner">
          <img src={phishing} alt="AI Cyber Helper Banner" />
          </div>

            <h2>Phishing URL Scanner</h2>
            <p>
              Phishing is a way of scamming where hackers try to steal your
              information. Use this tool to check if a URL is suspicious.
            </p>
            <form>
              <label>
                Enter URL:
                <input type="text" placeholder="Paste suspicious URL here" />
              </label>
              <button type="submit">Check</button>
            </form>
          </div>
        );
      case "data-leak":
        return (
          <div className="tool-content">

          <div className="banner">
          <img src={databreach} alt="AI Cyber Helper Banner" />
          </div>

            <h2>Data Leak E-mail Scanner</h2>
            <p>
              Check if your email address has been leaked in any data breaches.
            </p>
            <form>
              <label>
                Enter E-mail:
                <input type="email" placeholder="Enter your email address" />
              </label>
              <button type="submit">Check</button>
            </form>
          </div>
        );
      case "network":
        return (
          <div className="tool-content">

          <div className="banner">
          <img src={npscan} alt="AI Cyber Helper Banner" />
          </div>

            <h2>Network and Port Scanner</h2>
            <p>Scan a specific IP address for open ports and vulnerabilities.</p>
            <form>
              <label>
                Enter IP Address:
                <input type="text" placeholder="Enter IP address to scan" />
              </label>
              <button type="submit">Scan</button>
            </form>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="functional-page">
      <header className="header">
        <h1>Tools</h1>
        <nav className="tool-nav">
          <button onClick={() => setActiveTool("phishing")}>
            Phishing URL Scanner
          </button>
          <button onClick={() => setActiveTool("data-leak")}>
            Data Leak E-mail Scanner
          </button>
          <button onClick={() => setActiveTool("network")}>
            Network and Port Scanner
          </button>
        </nav>
      </header>

      <section className="tools-section">{renderToolContent()}</section>
    </div>
  );
};

export default FunctionalPage;
