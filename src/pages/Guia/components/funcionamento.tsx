import React from 'react';

const Funcionamento: React.FC = () => {
  const etapas = [
    {
      id: 1,
      titulo: '1. Coleta e Preparação',
      texto: 'Recolhimento de resíduos orgânicos agrícolas e urbanos para processamento inicial.',
      icon: '🍏',
      classDesktop: 'md:translate-y-20',
      hasArrow: true 
    },
    {
      id: 2,
      titulo: '2. Digestão Anaeróbica',
      texto: 'Microorganismos decompõem a matéria orgânica na ausência de oxigênio.',
      icon: '🦠',
      classDesktop: 'md:translate-y-0',
      hasArrow: true 
    },
    {
      id: 3,
      titulo: '3. Produção de Biogás',
      texto: 'O processo gera biogás, uma fonte de energia limpa e renovável.',
      icon: '🔥',
      classDesktop: 'md:translate-y-40',
      hasArrow: true 
    },
    {
      id: 4,
      // MODIFICAÇÕES APLICADAS NO CARD 4:
      titulo: '4. Geração de Energia',
      texto: 'Conversão do biogás através da queima em motores geradores, transformando o gás diretamente em energia elétrica limpa.',
      icon: '⚡',
      classDesktop: 'md:translate-y-0',
      hasArrow: false 
    }
  ];

  return (
    <section className="py-24 px-6 max-w-7xl mx-auto font-sans relative overflow-visible bg-white">
      
      {/* TÍTULO DA SEÇÃO - Quebra idêntica ao Figma em qualquer tela */}
      <div className="text-center mb-16 md:mb-32 relative z-10">
        <h2 className="text-4xl md:text-6xl font-black text-[#2d5a27] tracking-tight leading-none uppercase">
          Processo De <br /> Funcionamento
        </h2>
      </div>

      {/* ÁREA DOS CARDS E DA LINHA GUIA VETORIAL */}
      <div className="relative w-full min-h-[650px]">
        
        {/* LINHA VERDE SINOUSA (SVG INLINE) */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0 hidden md:block">
          <svg 
            viewBox="0 0 1200 600" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg" 
            className="w-full h-full overflow-visible"
          >
            <defs>
              <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                <feDropShadow dx="0" dy="0" stdDeviation="8" floodColor="#22c55e" floodOpacity="0.6"/>
              </filter>
            </defs>

            <path 
              d="M -50 180 
                 L 120 180 
                 C 220 180, 100 420, 220 420 
                 C 320 420, 420 80, 520 80 
                 C 620 80, 550 520, 720 520 
                 C 850 520, 850 120, 980 120 
                 L 1250 120" 
              stroke="#2d5a27" 
              strokeWidth="10" 
              strokeLinecap="round" 
              strokeLinejoin="round"
              filter="url(#glow)"
            />
          </svg>
        </div>

        {/* GRID DOS CARDS COM AS SETAS INTEGRADAS */}
        <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 items-start">
          {etapas.map((etapa) => (
            <div key={etapa.id} className="relative w-full">
              
              {/* CONTAINER COM EFEITO TRANSLATE-Y */}
              <div className={`relative transition-all duration-300 hover:scale-[1.02] ${etapa.classDesktop}`}>
                
                {/* CARD INDIVIDUAL */}
                <div className="bg-white p-8 rounded-[32px] border-2 border-[#a3b18a]/40 w-full shadow-[0_15px_45px_rgba(45,90,39,0.04),0_0_50px_rgba(34,197,94,0.12)]">
                  {/* ÍCONE */}
                  <div className="text-4xl md:text-5xl mb-5 flex justify-start">
                    {etapa.icon}
                  </div>

                  {/* TÍTULO */}
                  <h3 className="text-xl md:text-2xl font-black text-black tracking-tight mb-4 leading-tight">
                    {etapa.titulo}
                  </h3>

                  {/* TEXTO DESCRITIVO */}
                  <p className="text-gray-500 text-sm md:text-base leading-relaxed font-semibold">
                    {etapa.texto}
                  </p>
                </div>

                {/* SETA INDICATIVA */}
                {etapa.hasArrow && (
                  <div className="absolute right-[-22px] top-[45%] z-20 hidden md:flex items-center justify-center w-11 h-11 bg-[#2d5a27] rounded-full shadow-lg border-2 border-white">
                    <span className="text-white font-bold text-lg leading-none select-none">→</span>
                  </div>
                )}

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Funcionamento;