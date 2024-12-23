import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full bg-white z-50 transition-all duration-300 ease-in-out ${scrolled ? 'bg-opacity-100 shadow-md py-6' : 'bg-opacity-0 py-6'}`}
    >
      <div className="container mx-auto mt-2 px-4 flex justify-between items-center">
        {/* Logo y texto como enlace a la página principal */}
        <Link to="/" className="flex items-center">
          <img
            src="/icons/logo-192x192.png"  // Logo real
            alt="Re-pack logo"
            className="w-16 h-16 object-contain transform -translate-y-3"  // Mover el logo hacia arriba con translate-y negativo
          />
          <img
            src="/icons/logotipo.png"  // Texto en formato imagen
            alt="Re-pack logo text"
            className="w-38 h-16 ml-6 object-contain transform translate-y-1"  // Ajuste vertical del texto
          />
        </Link>

        {/* Navbar */}
        <nav className="flex space-x-6">
          <Link to="/" className="text-lg font-medium text-[#485935] hover:text-[#4B5D16] transition duration-300">Inicio</Link>
          <Link to="/about" className="text-lg font-medium text-[#485935] hover:text-[#4B5D16] transition duration-300">Nosotros</Link>
          <Link to="/contact" className="text-lg font-medium text-[#485935] hover:text-[#4B5D16] transition duration-300">Contacto</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
