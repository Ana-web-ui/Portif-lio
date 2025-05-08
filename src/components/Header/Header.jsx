import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold text-black">
            AC
          </div>
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-600 hover:text-black transition-colors">Sobre</Link>
            <Link to="/projects" className="text-gray-600 hover:text-black transition-colors">Projetos</Link>
            <Link to="/contact" className="text-gray-600 hover:text-black transition-colors">Contato</Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header; 