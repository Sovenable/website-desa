import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getLinkClass = (path) => {
    const isActive = location.pathname === path;
    return `hover:text-gray-300 transition-colors duration-200 ${
      isActive ? 'text-white font-semibold' : 'text-gray-300'
    }`;
  };

  return (
    <>
      {/* Spacer div to prevent content jump when navbar becomes fixed */}
      <div className="h-16"></div>
      
      {/* Fixed navbar with high z-index */}
      <nav className={`fixed top-0 left-0 right-0 z-50 bg-blue-900 text-white transition-all duration-300 ${
        isScrolled ? 'shadow-lg' : ''
      }`}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo dan Judul */}
            <div className="flex items-center space-x-3">
              <img
                src="/image/logo.jpg"
                alt="Logo"
                className="h-8 w-8 rounded-full"
              />
              <Link to="/" className="text-xl font-semibold">
                Desa Tanjung Jaya
              </Link>
            </div>

            {/* Hamburger Menu Button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden focus:outline-none"
            >
              {menuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>

            {/* Links untuk layar besar */}
            <div className="hidden md:flex items-center space-x-6">
              <Link to="/" className={getLinkClass('/')}>
                Home
              </Link>
              <Link to="/profil" className={getLinkClass('/profil')}>
                Profil
              </Link>
              <Link to="/informasi" className={getLinkClass('/informasi')}>
                Informasi Desa
              </Link>
              <Link to="/aktivitas-desa" className={getLinkClass('/aktivitas-desa')}>
                Aktivitas Desa
              </Link>
            </div>
          </div>

          {/* Dropdown Menu untuk Mobile */}
          {menuOpen && (
            <div className="md:hidden flex flex-col space-y-4 pb-4">
              <Link to="/" className="text-gray-300 hover:text-white" onClick={() => setMenuOpen(false)}>
                Home
              </Link>
              <Link to="/profil" className="text-gray-300 hover:text-white" onClick={() => setMenuOpen(false)}>
                Profil
              </Link>
              <Link to="/informasi" className="text-gray-300 hover:text-white" onClick={() => setMenuOpen(false)}>
                Informasi Desa
              </Link>
              <Link to="/aktivitas-desa" className="text-gray-300 hover:text-white" onClick={() => setMenuOpen(false)}>
                Aktivitas Desa
              </Link>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;