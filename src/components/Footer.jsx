import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#485935] text-white py-10 mt-16">
      <div className="container mx-auto text-center space-y-8 px-4">
        <div className="space-y-4">
          <p className="text-lg font-semibold">Contáctanos:</p>
          <div className="flex justify-center space-x-8">
            <p>Email: <a href="mailto:contacto@repack.cin" className="hover:text-[#93A267]">contacto@repack.cin</a></p>
            <p>Teléfono: <a href="tel:+51123456789" className="hover:text-[#93A267]">+51 123 456 789</a></p>
          </div>
          <p>Domicilio: Coronel Narcisso Maria Loreto #63, Fracc Insurgentes, San Miguel de Allende, Gto</p>
        </div>

        <div className="flex justify-center items-center space-x-4 mt-4">
          <p className="text-lg font-semibold">Síguenos:</p>
          <a href="https://www.facebook.com/share/1AkmhpeCEX/?" target="_blank" rel="noopener noreferrer" className="hover:text-[#93A267]">
            <FaFacebookF size={32} />
          </a>
          <a href="https://www.instagram.com/repack2024/profilecard/?igsh=NWdtNmFjb2NzOWs1" target="_blank" rel="noopener noreferrer" className="hover:text-[#93A267]">
            <FaInstagram size={32} />
          </a>
        </div>

        <div className="mt-8 text-sm">
          <p>&copy; {new Date().getFullYear()} Re-pack. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
