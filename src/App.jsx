import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './components/Homepage';
import ProfilePage from './components/ProfilePage';
import InformasiPage from './components/InformasiPage';
import AktivitasPage from './components/AktivitasPage';
import BeritaPage from './components/BeritaPage';
import NotFoundPage from './components/NotFoundPage';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/profil" element={<ProfilePage />} />
        <Route path="/informasi" element={<InformasiPage />} />
        <Route path="/aktivitas-desa" element={<AktivitasPage />} />
        <Route path="/berita/:id" element={<BeritaPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default App;