import React from 'react';
import imagemProcesso from '../../../assets/Guia/Group.svg';

const Funcionamento: React.FC = () => {
  return (
    <section className="py-15 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-black text-[#2d5a27] uppercase">
          Processo De <br /> Funcionamento
        </h2>
      </div>

      <div className="flex justify-center items-center w-full">
        <img 
          src={imagemProcesso} 
          alt="Processo de Funcionamento do Biodigestor" 
          className="w-full h-auto max-w-5xl object-contain drop-shadow-xl"
        />
      </div>
    </section>
  );
};

export default Funcionamento;