import React from 'react';
import { Link } from 'react-router-dom';

const Project = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-[#EEAECA] via-[#DEB0D0] via-[#C9B3D7] via-[#B0B7E0] to-[#94BBE9] py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-white mb-8 text-center">Meus Projetos</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Projeto 1 */}
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-white">
            <h3 className="text-xl font-semibold mb-4">Portfólio Pessoal</h3>
            <p className="mb-4">
              Desenvolvimento de um portfólio pessoal utilizando React.js e Tailwind CSS,
              com design responsivo e moderno.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-white/20 rounded-full text-sm">React</span>
              <span className="px-3 py-1 bg-white/20 rounded-full text-sm">Tailwind CSS</span>
              <span className="px-3 py-1 bg-white/20 rounded-full text-sm">JavaScript</span>
            </div>
          </div>

          {/* Projeto 2 */}
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-white">
            <h3 className="text-xl font-semibold mb-4">E-commerce</h3>
            <p className="mb-4">
              Plataforma de e-commerce com carrinho de compras, autenticação de usuários
              e integração com pagamentos.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-white/20 rounded-full text-sm">React</span>
              <span className="px-3 py-1 bg-white/20 rounded-full text-sm">Node.js</span>
              <span className="px-3 py-1 bg-white/20 rounded-full text-sm">MongoDB</span>
            </div>
          </div>

          {/* Projeto 3 */}
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-white">
            <h3 className="text-xl font-semibold mb-4">App de Gerenciamento</h3>
            <p className="mb-4">
              Aplicativo de gerenciamento de tarefas com funcionalidades de drag-and-drop
              e notificações em tempo real.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-white/20 rounded-full text-sm">React Native</span>
              <span className="px-3 py-1 bg-white/20 rounded-full text-sm">Firebase</span>
              <span className="px-3 py-1 bg-white/20 rounded-full text-sm">Redux</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project; 