import React from 'react';
import './FAQPage.css'; 

function FAQPage() {
  return (
    <div className="faq-page">
      <h1>Frequently Asked Questions</h1>
      <ul className="faq-list">
        <li>
          <h3>What exactly does this web application do?</h3>
          <p>This application helps you analyze digital security risks, including phishing detection, data leak analysis, and network scanning.</p>
        </li>
        <li>
          <h3>What is phishing?</h3>
          <p>Phishing is a method used by hackers to trick individuals into providing sensitive information, such as passwords and credit card details.</p>
        </li>
        <li>
          <h3>What are data breaches?</h3>
          <p>A data breach is a security incident where confidential data is accessed or disclosed without authorization.</p>
        </li>
        <li>
          <h3>How does this web application scan my network?</h3>
          <p>It uses advanced algorithms to scan your network for open ports, vulnerabilities, and other potential security risks.</p>
        </li>
      </ul>
    </div>
  );
}

export default FAQPage;
