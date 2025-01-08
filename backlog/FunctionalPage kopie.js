import React from "react";
import './FunctionalPage.css';

const FunctionalPage = () => {
  return (
    <div className="functional-page">
      <h1>Tools</h1>
      <ul>
        <li><a href="/tools/networkscan">Network and Port Scan</a></li>
        <li><a href="/tools/dataleak">Data Leak Scan</a></li>
        <li><a href="/tools/faq">FAQ</a></li>
        <li><a href="/tools/settings">Settings</a></li>
        <li><a href="/tools/phishing">Phishing Detection</a></li>
      </ul>
    </div>
  );
};

export default FunctionalPage;
