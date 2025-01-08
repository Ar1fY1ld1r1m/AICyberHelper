import React from "react";
import { useNavigate } from "react-router-dom";
import "./SettingsPage.css";
import settingspage from "./images/aihead.jpg";

function SettingsPage() {
  const navigate = useNavigate();

  return (
    <div className="settings-page">
      <header className="settings-header">
        <h1>Account &amp; Settings</h1>
        <div className="banner">
          <img src={settingspage} alt="AI Cyber Helper Banner" />
        </div>
      </header>
      <main className="settings-content">
        <div className="settings-list">
          <button
            className="settings-button"
            onClick={() => navigate("/general-information")}
          >
            General Information
          </button>
          <button
            className="settings-button"
            onClick={() => navigate("/socials")}
          >
            Socials
          </button>
          <button
            className="settings-button"
            onClick={() => navigate("/privacy")}
          >
            Privacy
          </button>
        </div>
        <section className="faq-section">
          <h2>FAQ</h2>
          <button
            className="faq-link"
            onClick={() => navigate("/faq")}
          >
            Go to FAQ
          </button>
        </section>
      </main>
      <footer className="settings-footer">
        <p>Help?</p>
      </footer>
    </div>
  );
}

export default SettingsPage;
