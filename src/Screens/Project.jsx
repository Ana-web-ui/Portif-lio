import React from 'react';

import Projects from '../components/Projects/Projects';
import SyntheticaMobile from '../components/images/SyntheticaMobile.png'
import TodoList from '../components/images/TodoList.png'
import FutureEnergy from '../components/images/FutureEnergy.png'
import { Link } from 'react-router-dom';
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
              title="To-do List com FASTAPI"
              description="Um to-do list simples fazendo conexão com o backend usando o FastAPI."
              image={TodoList}
            />

            {/* Projeto 3 */}
            <Projects 
              className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-white"
              title="Future Energy"
              description="Um site para concientizar as pessoas sobre as energias renováveis"
              image={FutureEnergy}

            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project; 