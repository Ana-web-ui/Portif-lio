import React from 'react';
import Card from '../components/Card/Card';

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-[#EEAECA] via-[#DEB0D0] via-[#C9B3D7] via-[#B0B7E0] to-[#94BBE9] py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-white mb-8 text-center">Sobre Mim</h1>
          <Card 
            className="bg-white/10 backdrop-blur-sm rounded-lg p-8 text-white mb-8"
            description="Olá! Sou Ana Carolina Leite, uma desenvolvedora web apaixonada por criar experiências digitais incríveis. Com experiência em React.js, JavaScript e outras tecnologias modernas, busco sempre entregar soluções elegantes e funcionais para os desafios que encontro. Estou sempre em busca de novos conhecimentos e desafios para expandir minhas habilidades e criar projetos cada vez mais impactantes."
          />

          {/* Seção de Habilidades */}
          <h2 className="text-3xl font-bold text-white mb-6 pt-10 text-center">Habilidades</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <Card 
              className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-white"
              title="HTML/CSS"
              description="Construção básica de websites"
              icon="💻"
            />

            <Card 
              className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-white"
              title="JavaScript"
              description="Focado na experiência do usuário"
              icon="⚡️"
            />

            <Card 
              className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-white"
              title="React.js"
              description="Framework para agilidade"
              icon="⚛️"
            />

            <Card 
              className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-white"
              title="Figma"
              description="Criação de Layouts"
              icon="✍🏻"
            />

            <Card 
              className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-white"
              title="Design"
              description="Experiência do usuário, storytelling e design thinking"
              icon="🎨"
            />

            <Card 
              className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-white"
              title="Banco de Dados"
              description="Banco de dados relacional"
              icon="💾"
            />

            <Card 
              className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-white"
              title="Node.js"
              description="Back-end"
              icon="📟"
            />

            <Card 
              className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-white"
              title="Next.js"
              description="Back-end"
              icon="📠"
            />

            <Card 
              className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-white"
              title="React Native"
              description="Focado no mobile"
              icon="📲"
            />

            <Card 
              className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-white"
              title="Python"
              description="Usado para back-end e Inteligência Artificial"
              icon="🖊️"
            />

            <Card 
              className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-white"
              title="FASTAPI"
              description="API com banco de dados"
              icon="🗂️"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About; 