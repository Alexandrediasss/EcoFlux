import React from "react"
import { Leaf } from "lucide-react"

interface ConteudoProps {
    titulo: string
    card: string
    p1: string
    p2: string
}

interface InfoSectionProps {
    conteudo: ConteudoProps
}

const InfoComponent: React.FC<InfoSectionProps> = ({ conteudo }) => {
    return (
        <section className="relative w-full bg-white py-20 px-6 md:px-24 overflow-hidden">
            <div className="absolute top-10 -left-10 text-[#00D99E]/5 -rotate-12 pointer-events-none">
                <Leaf size={400} strokeWidth={1} />
            </div>

            <div className="max-w-4xl mx-auto flex flex-col items-center text-center relative z-10">
                <h2 className="text-[#00A878] text-4xl md:text-6xl font-black uppercase tracking-tighter mb-4">
                    {conteudo.titulo}
                </h2>
                
                <div className="bg-[#B4F45D] text-[#1A2412] px-6 py-1.5 rounded-full text-xs md:text-sm font-bold uppercase tracking-widest mb-10 shadow-sm">
                    {conteudo.card}
                </div>

                <div className="space-y-6 text-[#1A2412] text-sm md:text-lg leading-relaxed font-medium">
                    <p>{conteudo.p1}</p>
                    <p>{conteudo.p2}</p>
                </div>
                
                <div className="w-24 h-1 bg-[#00D99E] mt-12 rounded-full opacity-30"></div>
            </div>
        </section>
    )
}

export default InfoComponent