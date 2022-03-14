import React from "react";
import { Routes, Route } from "react-router-dom";

import LoginPage from './pages/login/LoginPage'
import LandingPage from './pages/landing/LandingPage'
import RegisterPage from './pages/register/RegisterPage'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
      </Routes>
    </div>
  );
}

export default App;
