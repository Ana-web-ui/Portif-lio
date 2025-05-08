import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-600 mb-4 md:mb-0">
            © 2025 Ana Carolina Leite. Todos os direitos reservados.
          </div>
          <div className="flex space-x-6">
            <a href="https://github.com/Ana-web-ui" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-black transition-colors">
              GitHub
            </a>
            <a href="www.linkedin.com/in/ana-leite-4a404a313" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-black transition-colors">
              LinkedIn
            </a>
            <a href="anacarolinaleite1401@gmail.com" className="text-gray-600 hover:text-black transition-colors">
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 