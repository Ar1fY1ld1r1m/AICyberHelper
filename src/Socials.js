import React from "react";
import "./Socials.css";

const Socials = () => {
  return (
    <div className="socials-page">
      <header className="socials-header">
        <h1>Find Us on Social Media</h1>
      </header>
      <main className="socials-content">
        <ul>
          <li>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              Instagram
            </a>
          </li>
          <li>
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              Facebook
            </a>
          </li>
          <li>
            <a href="https://x.com" target="_blank" rel="noreferrer">
              X (formerly Twitter)
            </a>
          </li>
          <li>Email: contact@ai-cyberhelper.com</li>
        </ul>
      </main>
      <footer className="socials-footer">
        <p>Help?</p>
      </footer>
    </div>
  );
};

export default Socials;
