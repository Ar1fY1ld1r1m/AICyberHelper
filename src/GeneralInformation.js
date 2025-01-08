import React from "react";
import "./GeneralInformation.css";

const GeneralInformation = () => {
  return (
    <div className="general-information-page">
      <header className="general-header">
        <h1>General Information</h1>
      </header>
      <main className="general-content">
        <p>
          AI Cyber Helper is a platform designed to assist users with their
          cybersecurity needs. From phishing detection to network scans, our
          tools empower users to stay safe in the digital world.
        </p>
        <p>
          Our mission is to make cybersecurity accessible to everyone,
          regardless of technical expertise.
        </p>
      </main>
      <footer className="general-footer">
        <p>Help?</p>
      </footer>
    </div>
  );
};

export default GeneralInformation;
