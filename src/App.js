import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainPage from "./MainPage";
import LoginPage from "./LoginPage";
import RegisterPage from "./RegisterPage";
import LandingPage from "./LandingPage";
import FunctionalPage from "./FunctionalPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        
        <Route path="/landing" element={<LandingPage />} />
        
        <Route path="/tools/functional" element={<FunctionalPage />} />
      </Routes>
    </Router>
  );
};

export default App;
