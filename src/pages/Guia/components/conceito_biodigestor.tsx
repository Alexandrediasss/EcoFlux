import React from 'react';

const GuiaBiodigestor: React.FC = () => {
  return (
    // Removido o min-h-screen e o header para não conflitar com o layout global
    <div className="font-sans text-[#1a2e1a] overflow-x-hidden">
      
      {/* Hero Section - Ajustado o padding top para encaixar abaixo da sua Navbar global */}
      <main className="pt-10 md:pt-20 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:grid md:grid-cols-2 gap-12 items-center">
          
          {/* Lado Esquerdo: Conteúdo */}
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

          {/* Lado Direito: Ilustração */}
          <div className="relative flex justify-center order-1 md:order-2 w-full max-w-[300px] md:max-w-full mx-auto">
            <div className="bg-white p-6 md:p-8 rounded-[30px] md:rounded-[40px] shadow-2xl relative z-10 w-full">
              {/* Espaço para a imagem */}
              <div className="w-full aspect-square bg-gray-100 rounded-2xl flex items-center justify-center border border-dashed border-gray-300">
                 <span className="text-gray-400 text-xs text-center px-4 italic"></span>
              </div>
              
              {/* Badge Flutuante */}
              <div className="absolute -bottom-4 -left-4 md:-bottom-6 md:-left-10 bg-white p-3 md:p-4 rounded-xl md:rounded-2xl shadow-xl flex items-center gap-2 md:gap-3 border border-gray-100 min-w-[150px]">
                <div className="bg-[#a3b18a] p-1.5 md:p-2 rounded-lg shrink-0">
                  <svg className="w-4 h-4 md:w-6 md:h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                </div>
                <span className="font-bold text-[#344e41] text-[10px] md:text-sm whitespace-nowrap">Energia Renovável</span>
              </div>
            </div>
          </div>
        </div>

        {/* Seção "O Que É" */}
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