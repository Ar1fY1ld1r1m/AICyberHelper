import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./FunctionalPage.css";
import npscan from "./images/networkscan.jpg";
import phishing from "./images/phishingcard.jpg";
import databreach from "./images/databreach.webp";

const FunctionalPage = () => {
  const [activeTool, setActiveTool] = useState("phishing");
  const [results, setResults] = useState(null);
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);

  const handleCheck = (e) => {
    e.preventDefault();
    setResults([
      { field: "URL", value: "https://google.com" },
      { field: "Threats", value: "0 found" },
      { field: "Scan Status", value: "Safe" },
    ]);
  };

  const handleSendResults = () => {
    setIsChatbotOpen(true);
  };

  const closeResults = () => {
    setResults(null);
  };

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
            <form onSubmit={handleCheck}>
              <label>
                Enter URL:
                <input type="text" placeholder="Paste suspicious URL here" />
              </label>
              <button type="submit">Check</button>
            </form>
            {results && (
              <div className="results-table">
                <div className="results-header">
                  <h3>Scan Results</h3>
                  <button className="close-results" onClick={closeResults}>
                    ✖
                  </button>
                </div>
                <table>
                  <tbody>
                    {results.map((result, index) => (
                      <tr key={index}>
                        <td>{result.field}</td>
                        <td>{result.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <button className="send-results" onClick={handleSendResults}>
                  Send results to Cyber Helper →
                </button>
              </div>
            )}
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
        <h1 className="header-title">Tools</h1>
        <div className="button-row">
          <div className="navigation-bar">
            <button>
              <Link to="/settings" className="emoji-button">
                ⚙️
              </Link>
            </button>
            <button>
              <Link to="/reports" className="emoji-button">
                📊
              </Link>
            </button>
            <button>
              <Link to="/account" className="emoji-button">
                👤
              </Link>
            </button>
          </div>
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
        </div>
      </header>

      <section className="tools-section">{renderToolContent()}</section>
      <div className="chatbot-trigger">
        <button onClick={() => setIsChatbotOpen(true)}>
          AI Cyber Helper 🤖
        </button>
      </div>
      {isChatbotOpen && (
        <div className="chatbot-popup">
          <div className="chatbot-header">
            <h2>AI Cyber Helper</h2>
            <button onClick={() => setIsChatbotOpen(false)}>✖</button>
          </div>
          <div className="chatbot-body">
            <p>Welcome! How can I assist you today?</p>
            <textarea
              rows="4"
              placeholder="Ask Cyber Helper a question..."
            ></textarea>
            <button className="chatbot-send">Send</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default FunctionalPage;
