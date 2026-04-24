import React, { useState } from 'react';
import fundoAlertas from '../../../assets/Alertas/fundo_sino.svg';
import imagemSino from '../../../assets/Alertas/sino.svg';

const Cards: React.FC = () => {
  const [filtroAtivo, setFiltroAtivo] = useState('Todos');

  const categorias = [
    { id: 'Todos', label: 'Todos', icon: '🔔' },
    { id: 'Críticos', label: 'Críticos', icon: '⚠️' },
    { id: 'Atenção', label: 'Atenção', icon: '⚡' },
    { id: 'Médio', label: 'Médio', icon: '❗️' },
    { id: 'Informativo', label: 'Informativo', icon: 'ℹ️' },
    { id: 'Sistema', label: 'Sistema', icon: '⚙️' },
  ];

  const notificacoes = [
    { 
      id: 1, 
      categoria: 'Críticos', 
      data: 'Hoje, 08:45 AM', 
      msg: 'PRESSÃO DO BIODIGESTOR ACIMA DO LIMITE!', 
      labelAcao: 'PLANO DE AÇÃO:',
      acao: 'Abrir válvula de alívio e reduzir carga orgânica imediatamente.',
      cor: 'red',
      iconAcao: '💡'
    },
    { 
      id: 2, 
      categoria: 'Atenção', 
      data: 'Hoje, 09:12 AM', 
      msg: 'TEMPERATURA INTERNA OSCILANDO FORA DA MARGEM.', 
      labelAcao: 'PLANO DE AÇÃO:',
      acao: 'Verificar vedação da cúpula e entrada de substrato aquecido.',
      cor: 'yellow',
      iconAcao: '💡'
    },
    { 
      id: 3, 
      categoria: 'Médio', 
      data: 'Hoje, 10:15 AM', 
      msg: 'NÍVEL DE PH LEVEMENTE ÁCIDO NO REATOR.', 
      labelAcao: 'PLANO DE AÇÃO:',
      acao: 'Adicionar solução alcalina corretora e suspender nova carga por 4 horas.',
      cor: 'orange',
      iconAcao: '💡'
    },
    { 
      id: 4, 
      categoria: 'Informativo', 
      data: 'Ontem, 11:30 PM', 
      msg: 'PRODUÇÃO DIÁRIA DE BIOGÁS ATINGIU A META.', 
      labelAcao: 'SUGESTÃO:',
      acao: 'Manter alimentação constante para estabilizar a curva de produção.',
      cor: 'blue',
      iconAcao: '💡'
    },
    { 
      id: 5, 
      categoria: 'Sistema', 
      data: 'Hoje, 11:00 AM', 
      msg: 'SENSOR DE PH RECALIBRADO COM SUCESSO.', 
      labelAcao: 'NOTA DO SISTEMA:',
      acao: 'A calibração automática foi concluída com sucesso.',
      cor: 'gray',
      iconAcao: 'ℹ️'
    }
  ];

  const filtradas = filtroAtivo === 'Todos' 
    ? notificacoes 
    : notificacoes.filter(n => n.categoria === filtroAtivo);

  return (
    <section className="relative min-h-screen pt-32 md:pt-48 px-6 max-w-7xl mx-auto font-sans overflow-hidden">

      <div className="absolute top-24 md:top-28 right-0 w-full h-[600px] z-0 pointer-events-none">
 
        <img 
          src={fundoAlertas} 
          alt="" 
          className="absolute top-0 right-0 w-full h-auto max-w-6xl ml-auto opacity-80 z-0" 
        />

        <div className="absolute top-[10%] right-[5%] md:top-[12%] md:right-[8%] w-40 md:w-80 h-40 md:h-80 flex items-center justify-center">
          <img 
            src={imagemSino} 
            alt="Sino" 
            className="w-24 md:w-44 h-auto drop-shadow-2xl" 
          />
        </div>
      </div>

      <div className="relative z-10">
        <div className="mb-14">
          <h1 className="text-5xl md:text-6xl font-black text-[#1a3d2c] tracking-tight leading-[1.1]">
            Alertas e <br /> Notificações
          </h1>
          <p className="text-gray-600 mt-6 text-lg max-w-lg leading-relaxed">
            Gestão inteligente de biossinais e métricas operacionais. Identifique desvios em tempo real para manter a integridade regenerativa do seu biodigestor.
          </p>
        </div>

        <div className="flex flex-wrap gap-3 mb-16">
          {categorias.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFiltroAtivo(cat.id)}
              className={`cursor-pointer flex items-center gap-2 px-6 py-3 rounded-2xl font-bold text-lg transition-all border ${
                filtroAtivo === cat.id 
                  ? 'bg-white text-[#1a3d2c] border-[#1a3d2c] border-b-4 shadow-md scale-105' 
                  : 'bg-white/60 backdrop-blur-sm text-gray-400 border-gray-100'
              }`}
            >
              <span>{cat.icon}</span> {cat.label}
            </button>
          ))}
        </div>

        <div className="space-y-10 pb-24">
          {filtradas.map((item) => (
            <div key={item.id} className="bg-white p-8 md:p-12 rounded-[50px] md:rounded-[70px] shadow-[0_10px_40px_rgba(0,0,0,0.03)] border border-gray-50">
              
              <div className="flex items-center gap-4 mb-6">
                <span className={`px-4 py-1 rounded-md text-[10px] font-black uppercase ${
                  item.cor === 'red' ? 'bg-red-50 text-red-500' :
                  item.cor === 'orange' ? 'bg-orange-50 text-orange-500' :
                  item.cor === 'yellow' ? 'bg-yellow-50 text-yellow-600' :
                  item.cor === 'blue' ? 'bg-blue-50 text-blue-500' : 'bg-gray-100 text-gray-500'
                }`}>
                  {item.categoria}
                </span>
                <span className="text-gray-300 text-sm font-bold italic">{item.data}</span>
              </div>

              <h2 className="text-[#1a3d2c] font-black text-xl md:text-3xl mb-8 tracking-tight">
                {item.msg}
              </h2>

              <div className={`p-6 md:p-8 rounded-[30px] border flex gap-4 ${
                item.cor === 'red' ? 'bg-red-50/30 border-red-100' :
                item.cor === 'orange' ? 'bg-orange-50/30 border-orange-100' :
                item.cor === 'yellow' ? 'bg-yellow-50/30 border-yellow-100' :
                item.cor === 'blue' ? 'bg-blue-50/30 border-blue-100' : 'bg-gray-50 border-gray-100'
              }`}>
                <div className={`w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm shrink-0 ${
                  item.cor === 'red' ? 'text-red-500' :
                  item.cor === 'orange' ? 'text-orange-500' :
                  item.cor === 'yellow' ? 'text-yellow-600' :
                  item.cor === 'blue' ? 'text-blue-500' : 'text-gray-500'
                }`}>
                  {item.iconAcao}
                </div>
                
                <div>
                  <p className={`text-[10px] font-black uppercase tracking-widest mb-1 ${
                    item.cor === 'red' ? 'text-red-400' :
                    item.cor === 'orange' ? 'text-orange-400' :
                    item.cor === 'yellow' ? 'text-yellow-500' :
                    item.cor === 'blue' ? 'text-blue-400' : 'text-gray-400'
                  }`}>
                    {item.labelAcao}
                  </p>
                  <p className="text-gray-600 text-sm md:text-base italic leading-relaxed">
                    {item.acao}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Cards;