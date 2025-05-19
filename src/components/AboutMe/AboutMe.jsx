import React from "react";
import Ana from "../images/Ana.png";

const AboutMe = () => {
  return (

    <div className="max-w-6xl mx-auto p-6 relative">
      {/* Título */}
      <h2 className="text-white text-3xl font-extrabold mb-6">Sobre Mim</h2>


      <div className="flex items-center gap-8">

        <div className="bg-white rounded-[20px] p-8 flex-grow">
          <p className="text-black text-xl">
            Olá! Sou Ana Carolina Leite, uma desenvolvedora web apaixonada por
            criar experiências digitais incríveis. Com experiência em React.js,
            JavaScript e outras tecnologias modernas, busco sempre entregar
            soluções elegantes e funcionais para os desafios que encontro. Estou
            sempre em busca de novos conhecimentos e desafios para expandir
            minhas habilidades e criar projetos cada vez mais impactantes.
          </p>
        </div>

        <div className="flex-shrink-0">
          <img
            src={Ana}
            alt="Ana Carolina Leite"
            className="w-64 h-64 object-cover rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
