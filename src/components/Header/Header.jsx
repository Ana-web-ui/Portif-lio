import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-[#EEAECA] via-[#DEB0D0] via-[#C9B3D7] via-[#B0B7E0] to-[#94BBE9] py-4">
      <nav className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold text-white">
            AC
          </Link>
          <div className="hidden md:flex space-x-6">
            <Link to="/" className="text-white hover:text-gray-200 transition-colors">
              Início
            </Link>
            <Link to="/project" className="text-white hover:text-gray-200 transition-colors">
              Projetos
            </Link>
            <Link to="/contact" className="text-white hover:text-gray-200 transition-colors">
              Contato
            </Link>
          </div>
        </div>
      </nav>
      <div className="h-[1px] bg-white/100 mt-4"></div>
    </header>
  );
};

export default Header; 