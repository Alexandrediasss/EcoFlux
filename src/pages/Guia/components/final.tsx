import React from 'react';
import imagemFinal from '../../../assets/Guia/evitar.svg';

const Final: React.FC = () => {
  return (
    <section className="py-20 px-6 max-w-7xl mx-auto">
      <div className="flex justify-center items-center w-full">
        <img 
          src={imagemFinal} 
          alt="Orientações e Cuidados com o Biodigestor" 
          className="w-full h-auto max-w-6xl object-contain drop-shadow-sm" 
        />
      </div>
    </section>
  );
};

export default Final;