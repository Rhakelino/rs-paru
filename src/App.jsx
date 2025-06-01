import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from "./components/ScrollToTop";

import Home from './Pages/Home';
import Visi from './Pages/Visi';
import Tugas from './Pages/Tugas';
import Sejarah from './Pages/Sejarah';
import Igd from './Pages/Igd';
import Rawat from './Pages/Rawat';
import Inap from './Pages/Inap';
import Labor from './Pages/Labor';
import Radiologi from './Pages/Radiologi';
import Farmasi from './Pages/Farmasi';
import Unggulan from './Pages/Unggulan';
import ProfilPPID from './Pages/ProfilPPID'
import InformasiBerkala from './Pages/InformasiBerkala';
import Keberatan from './Pages/Keberatan';
import Maklumat from './Pages/Maklumat';
import Galeri from './Pages/Galeri';
import Tarif from './Pages/Tarif';
import JadwalDokter from './Pages/JadwalDokter';
import AlurPasien from './Pages/AlurPasien';
import AlurPenangananKomplain from './Pages/AlurKomplain';
import Artikel from './Pages/Artikel';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/visi" element={<Visi />} />
        <Route path="/tugas" element={<Tugas />} />
        <Route path="/sejarah" element={<Sejarah />} />
        <Route path="/igd" element={<Igd />} />
        <Route path="/rawat" element={<Rawat />} />
        <Route path="/inap" element={<Inap />} />
        <Route path="/labor" element={<Labor />} />
        <Route path="/radio" element={<Radiologi />} />
        <Route path="/farmasi" element={<Farmasi />} />
        <Route path="/unggulan" element={<Unggulan />} />
        <Route path="/profilPPID" element={<ProfilPPID />} />
        <Route path="/informasiBerkala" element={<InformasiBerkala />} />
        <Route path="/keberataninformasi" element={<Keberatan />} />
        <Route path="/maklumat" element={<Maklumat />} />
        <Route path="/galeri" element={<Galeri />} />
        <Route path="/tarif" element={<Tarif />} />
        <Route path="/jadwaldokter" element={<JadwalDokter />} />
        <Route path="/alurpasien" element={<AlurPasien />} />
        <Route path="/alurkomplain" element={<AlurPenangananKomplain />} />
        <Route path="/artikel" element={<Artikel />} />
      </Routes>
    </Router>
  );
}

export default App;
