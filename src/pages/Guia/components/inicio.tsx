import React from 'react';
import imagemBiodigestor from '../../../assets/Guia/Container.svg';
import linhasFundo from '../../../assets/Guia/Linhas.svg'; 

const GuiaBiodigestor: React.FC = () => {
  return (
    <div className="font-sans text-[#1a2e1a] overflow-x-hidden relative bg-white">
     
      <div className="absolute top-[45%] left-0 w-full h-auto pointer-events-none z-0">
        <img 
          src={linhasFundo} 
          alt="" 
          className="w-full h-auto opacity-60" 
        />
      </div>

      <main className="relative pt-24 md:pt-32 px-6 max-w-7xl mx-auto z-10">
        <div className="flex flex-col md:grid md:grid-cols-2 gap-12 items-center">
          
          <section className="text-center md:text-left order-2 md:order-1">
            <span className="inline-block bg-[#d4e9a9] text-[#4b632d] px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest">
              Sustentabilidade
            </span>
            
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-black text-[#1a3d2c] mt-4 md:mt-6 leading-[1.1] tracking-tighter">
              Guia De Utilização <br />
              <span className="text-[#2d5a27]">BIODIGESTOR</span>
            </h1>
            
            <p className="text-gray-500 mt-6 max-w-md mx-auto md:mx-0 text-lg md:text-xl font-medium leading-relaxed">
              Guia completo para entender o funcionamento de um biodigestor de forma simples e prática.
            </p>
          </section>

          <div className="relative flex justify-center order-1 md:order-2 w-full max-w-[450px] md:max-w-full mx-auto">
            <div className="bg-white p-6 md:p-10 rounded-[40px] md:rounded-[60px] shadow-[0_20px_60px_rgba(0,0,0,0.08)] relative z-10 w-full flex items-center justify-center border border-gray-50">
              <img 
                src={imagemBiodigestor} 
                alt="Ilustração do Biodigestor" 
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>

        <section className="mt-32 md:mt-48 max-w-3xl text-center md:text-left pb-20">
          <h2 className="text-3xl md:text-5xl font-black text-[#2d5a27] mb-8 tracking-tighter">O QUE É</h2>
          <p className="text-xl md:text-2xl font-medium leading-relaxed text-gray-700/90">
            Um sistema que transforma resíduos orgânicos em gás e fertilizante. Ele funciona por meio da decomposição da matéria sem presença de oxigênio. O gás gerado pode ser usado como energia de forma sustentável.
          </p>
        </section>
      </main>
    </div>
  );
};

export default GuiaBiodigestor;