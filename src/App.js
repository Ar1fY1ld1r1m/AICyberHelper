import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainPage from "./MainPage";
import LoginPage from "./LoginPage";
import RegisterPage from "./RegisterPage";
import LandingPage from "./LandingPage";
import FunctionalPage from "./FunctionalPage";
import SettingsPage from "./SettingsPage";
import FAQPage from "./FAQPage";
import ReportsPage from "./ReportsPage";
import AccountPage from "./AccountPage";
import GeneralInformation from "./GeneralInformation"; 
import Socials from "./Socials"; 
import Privacy from "./Privacy"; 

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/landing" element={<LandingPage />} />
        <Route path="/tools/functional" element={<FunctionalPage />} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/reports" element={<ReportsPage />} />
        <Route path="/account" element={<AccountPage />} />
        <Route path="/general-information" element={<GeneralInformation />} />
        <Route path="/socials" element={<Socials />} />
        <Route path="/privacy" element={<Privacy />} />
      </Routes>
    </Router>
  );
};

export default App;
