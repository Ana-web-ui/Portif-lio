import React from 'react';

import Projects from '../components/Projects/Projects';
import SyntheticaMobile from '../components/images/SyntheticaMobile.png'

const Project = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-[#EEAECA] via-[#DEB0D0] via-[#C9B3D7] via-[#B0B7E0] to-[#94BBE9] py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-white mb-8 text-center">Meus Projetos</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Projeto 1 */}
            <Projects 
              className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-white"
              title="Synthetica Mobile"
              description="Aplicativo de informações no universo da Synthetica."
              image={SyntheticaMobile}
            />

            {/* Projeto 2 */}
            <Projects 
              className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-white"
              title="Projeto 2"
              description="Descrição do projeto 2"
              image={SyntheticaMobile}
            />

            {/* Projeto 3 */}
            <Projects 
              className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-white"
              title="Projeto 3"
              description="Descrição do projeto 3"
              image={SyntheticaMobile}

            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project; 