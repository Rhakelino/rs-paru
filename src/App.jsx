import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './Pages/Home';
import Visi from './Pages/Visi';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/visi" element={<Visi />} />
      </Routes>
    </Router>
  );
}

export default App;
