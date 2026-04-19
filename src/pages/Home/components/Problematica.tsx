import React from "react"
import { Leaf } from "lucide-react"

const ProblematicaComponent: React.FC = () => {
    return (
        <section className="relative w-full bg-white py-20 px-6 md:px-24 overflow-hidden">
            <div className="absolute top-10 -left-10 text-[#00D99E]/5 -rotate-12 pointer-events-none">
                <Leaf size={400} strokeWidth={1} />
            </div>

            <div className="max-w-4xl mx-auto flex flex-col items-center text-center relative z-10">
                <h2 className="text-[#00A878] text-4xl md:text-6xl font-black uppercase tracking-tighter mb-4">
                    PROBLEMÁTICA
                </h2>
                <div className="bg-[#B4F45D] text-[#1A2412] px-6 py-1.5 rounded-full text-xs md:text-sm font-bold uppercase tracking-widest mb-10 shadow-sm">
                    Entenda o problema!
                </div>
                <div className="space-y-6 text-[#1A2412] text-sm md:text-lg leading-relaxed font-medium">
                    <p>
                        O acesso ao gás ainda é limitado em muitas áreas do Amazonas. 
                        O alto custo, a dificuldade de transporte e a dependência de fornecimento externo 
                        tornam o uso do gás de cozinha restrito e, em alguns casos, inviável.
                    </p>

                    <p>
                        Em comunidades do interior, essa realidade é ainda mais evidente, devido ao isolamento geográfico 
                        e à logística mais difícil de abastecimento. Como alternativa, muitas pessoas recorrem à lenha 
                        ou a outras fontes menos eficientes, o que acaba gerando danos ambientais e problemas de saúde. 
                        É a partir dessa problemática que se mostra necessária a criação de um biodigestor como uma 
                        alternativa mais acessível e sustentável.
                    </p>
                </div>
                <div className="w-24 h-1 bg-[#00D99E] mt-12 rounded-full opacity-30"></div>
            </div>
        </section>
    )
}

export default ProblematicaComponent