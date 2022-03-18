import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from 'layouts/Admin';
import SignIn from './views/Signin/SignIn';
import SignUp from './views/Signup/SignUp';

import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="signin" element={<SignIn />} />
        <Route path="signup" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
