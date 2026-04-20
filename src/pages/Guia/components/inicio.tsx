import React from 'react';
import imagemBiodigestor from '../../../assets/Guia/Container.svg';

const GuiaBiodigestor: React.FC = () => {
  return (
    <div className="font-sans text-[#1a2e1a] overflow-x-hidden">
      <main className="pt-24 md:pt-32 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:grid md:grid-cols-2 gap-12 items-center">
          
          <section className="text-center md:text-left order-2 md:order-1">
            <span className="inline-block bg-[#a3b18a]/30 text-[#588157] px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wider">
              Sustentabilidade
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-[#344e41] mt-4 md:mt-6 leading-tight">
              Guia De Utilização <br />
              <span className="text-[#3a5a40]">BIODIGESTOR</span>
            </h1>
            <p className="text-gray-500 mt-4 md:mt-6 max-w-md mx-auto md:mx-0 text-base md:text-lg">
              Guia completo para entender o funcionamento de um biodigestor de forma simples e prática.
            </p>
          </section>

          <div className="relative flex justify-center order-1 md:order-2 w-full max-w-[400px] md:max-w-full mx-auto">
            <div className="bg-white p-6 md:p-8 rounded-[30px] md:rounded-[40px] shadow-2xl relative z-10 w-full flex items-center justify-center">
              
              <img 
                src={imagemBiodigestor} 
                alt="Ilustração do Biodigestor" 
                className="w-full h-auto object-contain"
              />
              
            </div>
          </div>
        </div>

        <section className="mt-20 md:mt-32 max-w-2xl text-center md:text-left pb-20">
          <h2 className="text-3xl md:text-4xl font-black text-[#3a5a40] mb-6 md:mb-8 ">O QUE É</h2>
          <p className="text-lg md:text-xl font-medium leading-relaxed text-gray-800">
            Um sistema que transforma resíduos orgânicos em gás e fertilizante. Ele funciona por meio da decomposição da matéria sem presença de oxigênio. O gás gerado pode ser usado como energia de forma sustentável.
          </p>
        </section>
      </main>
    </div>
  );
};

export default GuiaBiodigestor;