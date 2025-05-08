import React from 'react';
import Card from '../components/Card/Card';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Ana Carolina Leite
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Estudante de Web Design
          </p>
          <div className="flex justify-center space-x-4">
            <a href="#contact" className="px-6 py-3 bg-black text-white rounded-md hover:bg-gray-800 transition-colors">
              Entre em Contato
            </a>
            <a href="#projects" className="px-6 py-3 border border-black text-black rounded-md hover:bg-gray-100 transition-colors">
              Ver Projetos
            </a>
          </div>
        </section>

        {/* About Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-black mb-8 text-left">Sobre Mim</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <p className="text-gray-600">
                Olá! Sou Ana Carolina Leite, tenho 19 anos e sou apaixonada por design e desenvolvimento web.
                Atualmente, estou cursando Web Design, onde estou aprendendo a criar interfaces utilizando básico junto com frameworks como React, sem esquecer do Mobile e gosto de fazer o back-end, sabendo para onde vão as informações.
              </p>
              <p className="text-gray-600">
                Meu objetivo é combinar criatividade com habilidades técnicas para criar experiências digitais
                memoráveis e acessíveis.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Card
                title="Idade"
                description="19 anos"
                icon="🎂"
              />
              <Card
                title="Formação"
                description="Web Design"
                icon="🎓"
              />
              <Card
                title="Localização"
                description="Brasil"
                icon="📍"
              />
              <Card
                title="Interesses"
                description="Design, Desenvolvimento Web, UI/UX"
                icon="💡"
              />
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-black mb-8 text-center">Habilidades</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Card
              title="HTML/CSS"
              description="Estruturação e estilização de páginas web"
              icon="🌐"
            />
            <Card
              title="JavaScript"
              description="Desenvolvimento de interatividade"
              icon="⚡"
            />
            <Card
              title="React"
              description="Desenvolvimento de interfaces modernas"
              icon="⚛️"
            />
            <Card
              title="UI/UX"
              description="Focando na experiência do usuário, story telling e design thinking"
              icon="🎨"
            />
            <Card
            title="Figma"
            description="Design de interfaces e experiência do usuário"
            icon="✍🏻"
            />

            <Card
            title="Git"
            description="Controle de versão"
            icon="🔄"
            />
          <Card 
          title="Next.js"
          description="Framework para desenvolvimento de aplicações web"
          icon="📟"
          />
          <Card 
          title="Node.js"
          description="Framework para desenvolvimento de aplicações web"
          icon="💾"
          />
          <Card 
          title="Python"
          description="Linguagem de programação"
          icon="🖋️"
          />
          <Card
          title="React Native"
          description="Framework para desenvolvimento de aplicações móveis"
          icon="📲"
          />
          <Card 
          title="SQL"
          description="Linguagem de consulta estruturada"
          icon="📠"
          />
          
            
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About; 