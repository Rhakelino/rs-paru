import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './Pages/Home';
import Visi from './Pages/Visi';
import Tugas from './Pages/Tugas';
import Sejarah from './Pages/Sejarah';
import Igd from './Pages/Igd';
import Rawat from './Pages/Rawat';
import Inap from './Pages/Inap';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/visi" element={<Visi />} />
        <Route path="/tugas" element={<Tugas />} />
        <Route path="/sejarah" element={<Sejarah />} />
        <Route path="/igd" element={<Igd />} />
        <Route path="/rawat" element={<Rawat />} />
        <Route path="/inap" element={<Inap />} />
      </Routes>
    </Router>
  );
}

export default App;
