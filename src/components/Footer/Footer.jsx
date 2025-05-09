import React from 'react';


const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-[#EEAECA] via-[#DEB0D0] via-[#C9B3D7] via-[#B0B7E0] to-[#94BBE9] py-8">
            <div className="h-[1px] bg-white/50 mt-4"></div>
      <div className="container  items-center">
        <div className="flex flex-col justify-between items-center">
          <div className="text-white mb-4 md:mb-0">
            <p>&copy; 2025 Ana Carolina Leite. Todos os direitos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 