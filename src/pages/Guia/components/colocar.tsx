import React from 'react';

const Colocar: React.FC = () => {
  const itens = [
    {
      icon: "🍎", 
      titulo: "Restos De Alimentos",
      descricao: "Cascas de frutas, restos de vegetais e sobras de alimentos cozidos são um combustível potente para o seu sistema.",
      exemplos: ["Batata", "Cascas", "Borra De Café", "Fruta Podre"]
    },
    {
      icon: "♻️",
      titulo: "Resíduos Orgânicos",
      descricao: "O \"iniciador\" essencial para a atividade bacteriana, sendo que esterco de vaca, porco e aves funcionam melhor.",
      exemplos: ["Vaca, porco, esterco de aves"]
    }
  ];

  return (
    <section className="py-16 px-6 max-w-5xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-black text-[#2d5a27] uppercase mb-4">O Que Colocar</h2>
        <p className="text-gray-500 max-w-2xl mx-auto text-sm md:text-base">
          Nem tudo pode ser utilizado em um biodigestor, por isso é importante saber o que é permitido antes de usar.
        </p>
        <div className="w-16 h-1 bg-[#344e41] mx-auto mt-6"></div>
      </div>

      <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100">
        <div className="bg-[#f1f3f5] grid grid-cols-12 p-4 border-b border-gray-200">
          <div className="col-span-8 font-bold text-[#344e41] px-4">Tipos</div>
          <div className="col-span-4 font-bold text-[#344e41] px-4">Exemplos</div>
        </div>

        {itens.map((item, index) => (
          <div key={index} className="grid grid-cols-12 p-8 border-b border-gray-50 items-center hover:bg-gray-50 transition-colors">
            {/* Coluna Tipos */}
            <div className="col-span-12 md:col-span-8 flex gap-6 px-4 mb-4 md:mb-0">
              <div className="w-16 h-16 bg-[#c7e596] rounded-2xl flex items-center justify-center text-3xl shrink-0">
                {item.icon}
              </div>
              <div>
                <h3 className="font-bold text-lg text-[#1a2e1a] mb-1">{item.titulo}</h3>
                <p className="text-sm text-gray-500 leading-relaxed max-w-md">{item.descricao}</p>
              </div>
            </div>

            <div className="col-span-12 md:col-span-4 px-4 text-sm text-gray-500 leading-loose border-l border-transparent md:border-gray-100">
              {item.exemplos.map((ex, i) => (
                <p key={i}>{ex}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Colocar;