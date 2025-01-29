import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

const NotFoundPage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="max-w-7xl mx-auto py-16 px-4 text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">404 - Halaman Tidak Ditemukan</h1>
        <p className="text-gray-600 mb-8">Maaf, halaman yang Anda cari tidak ditemukan.</p>
        <Link to="/" className="text-blue-600 hover:text-blue-800">
          Kembali ke Beranda
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;