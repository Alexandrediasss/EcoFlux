import React from "react"
import { Sprout } from "lucide-react" 
import Gases from "../../../assets/Home/gases.png"
import Energia from "../../../assets/Home/energia.png"
import Lencois from "../../../assets/Home/lencois.png"

const CardsComponent: React.FC = () => {
    return (
        <section className="bg-white pb-20 px-6 md:px-24">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
                <div className="lg:col-span-8 bg-[#F8F9F5] border-l-4 border-[#1A2412] rounded-xl p-8 flex flex-col md:flex-row gap-6 shadow-sm">
                    <div className="w-16 h-16 bg-[#E2E8D8] rounded-2xl flex items-center justify-center shrink-0">
                        <Sprout className="text-[#1A2412]" size={32} />
                    </div>
                    <div>
                        <h3 className="text-[#1A2412] text-xl font-bold mb-3">Acúmulo De Resíduos Orgânicos</h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            Milhares de toneladas de dejetos animais e restos culturais são descartados incorretamente todos os dias, tornando-se focos de doenças, odores desagradáveis e poluição visual em áreas produtivas.
                        </p>
                    </div>
                </div>
                <div className="lg:col-span-4 relative overflow-hidden rounded-xl min-h-[220px] group shadow-md">
                    <img src={Lencois} alt="Contaminação" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-black/60 p-6 flex flex-col justify-end">
                        <h3 className="text-white text-lg font-bold mb-2">Contaminação de Lençóis</h3>
                        <p className="text-gray-300 text-xs leading-relaxed">
                            O chorume resultante da decomposição a céu aberto infiltra-se no solo, atingindo águas subterrâneas.
                        </p>
                    </div>
                </div>
                <div className="lg:col-span-5 relative overflow-hidden rounded-xl min-h-[250px] group shadow-md">
                    <img src={Energia} alt="Custos Energia" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-8 flex flex-col justify-end">
                        <h3 className="text-white text-xl font-bold mb-3">Custos Energéticos Crescentes</h3>
                        <p className="text-gray-200 text-sm leading-relaxed">
                            A dependência de fontes de energia convencionais e caras asfixia a margem de lucro do produtor rural e de indústrias agroalimentares.
                        </p>
                    </div>
                </div>
                <div className="lg:col-span-7 relative overflow-hidden rounded-xl min-h-[250px] group shadow-md">
                    <img src={Gases} alt="Gases Efeito Estufa" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-black/50 p-8 flex flex-col justify-end">
                        <h3 className="text-white text-xl font-bold mb-3">Emissões de Gases de Efeito Estufa</h3>
                        <p className="text-gray-200 text-sm leading-relaxed">
                            O metano liberado pela decomposição anaeróbica descontrolada é 25 vezes mais potente que o CO2 no aquecimento global, acelerando as mudanças climáticas severas.
                        </p>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default CardsComponent