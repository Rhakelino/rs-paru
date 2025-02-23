import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/home';  // Import halaman Home
import Visi from './pages/visi';  // Import halaman Visi

function App() {
  return (
    <Router>
      <Routes>
        {/* Route untuk halaman Home */}
        <Route path="/" element={<Home />} />
        {/* Route untuk halaman Visi */}
        <Route path="/visi" element={<Visi />} />
      </Routes>
    </Router>
  );
}

export default App;
