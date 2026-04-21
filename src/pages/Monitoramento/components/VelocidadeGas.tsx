import React, { useState } from "react"
import { Calendar, HelpCircle } from "lucide-react"

const VelocidadeGasComponent: React.FC = () => {
    const [periodo, setPeriodo] = useState("24H")

    return (
        <section className="w-full px-6 md:px-24 py-12 bg-[#F8F9F6]">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
                <div className="lg:col-span-2 flex flex-col">
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-12 gap-6">
                        <div>
                            <h3 className="text-[#133524] text-xl md:text-[22px] font-bold uppercase tracking-wide mb-1">
                                Velocidade Produção de Gás
                            </h3>
                            <span className="text-[10px] font-bold text-[#4A5043] uppercase tracking-widest">
                                Dados Estimados
                            </span>
                        </div>
                        <div className="flex border border-[#133524] rounded-sm overflow-hidden text-xs font-bold">
                            {["24H", "7D", "30D"].map((p) => (
                                <button 
                                    key={p}
                                    onClick={() => setPeriodo(p)}
                                    className={`px-5 py-2 transition-colors ${
                                        periodo === p 
                                        ? "bg-[#133524] text-white" 
                                        : "bg-transparent text-[#133524] hover:bg-[#133524]/10"
                                    } ${p !== "24H" ? "border-l border-[#133524]" : ""}`}
                                >
                                    {p}
                                </button>
                            ))}
                        </div>
                    </div>
                    <div className="relative w-full flex mt-2">
                        <div className="flex flex-col justify-between items-end pr-4 text-[10px] font-bold text-[#4A5043] h-[260px]">
                            <span>2.0m³</span>
                            <span>1.0m³</span>
                            <span>0.0m³</span>
                        </div>
                        <div className="flex-1 relative border-l-2 border-b-2 border-[#133524] h-[260px]">
                            <div className="absolute w-3 h-3 bg-[#4F6D17] rounded-full left-[30%] bottom-[45%] shadow-md transform -translate-x-1/2 translate-y-1/2"></div>
                            <div className="absolute w-3 h-3 bg-[#4F6D17] rounded-full left-[75%] bottom-[85%] shadow-md transform -translate-x-1/2 translate-y-1/2"></div>
                            <div className="absolute -bottom-10 left-0 w-full flex justify-between text-[10px] font-bold text-[#4A5043]">
                                <span>06:00 AM</span>
                                <span>12:00 PM</span>
                                <span>06:00 PM</span>
                                <span>12:00 AM</span>
                                <span>06:00 AM</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="lg:col-span-1 flex flex-col gap-8 mt-16 lg:mt-0">
                    <div className="border-b border-[#133524]/30 pb-3">
                        <h3 className="text-[#133524] text-sm font-bold uppercase tracking-widest">
                            Saúde do Sistema
                        </h3>
                    </div>
                    <div className="flex flex-col gap-6 text-sm font-bold text-[#133524]">
                        <div className="flex justify-between items-center">
                            <span className="text-[11px] text-[#4A5043] uppercase tracking-widest">Status Atual</span>
                            <div className="flex items-center gap-2">
                                <div className="w-2.5 h-2.5 bg-[#4F6D17] shrink-0"></div>
                                <span>Ativo</span>
                            </div>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-[11px] text-[#4A5043] uppercase tracking-widest">Tempo de Atividade</span>
                            <span>3D 04H 22M</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-[11px] text-[#4A5043] uppercase tracking-widest">Carga</span>
                            <span>14%</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-[11px] text-[#4A5043] uppercase tracking-widest">Pressão</span>
                            <span>1.2 BAR</span>
                        </div>
                    </div>
                    <button className="w-full border border-[#133524] py-3.5 mt-2 text-[#133524] text-xs font-bold uppercase tracking-widest hover:bg-[#133524] hover:text-white transition-all flex justify-center items-center gap-2">
                        <HelpCircle size={16} />
                        Não Sei
                    </button>
                    <div className="mt-2 bg-[#FCE5D3] border-l-4 border-[#8B4513] p-5 shadow-sm">
                        <div className="flex items-start gap-3 mb-4">
                            <Calendar className="text-[#8B4513] shrink-0 mt-0.5" size={20} />
                            <div>
                                <h4 className="text-[10px] text-[#8B4513] font-bold uppercase tracking-widest mb-1.5">
                                    Próxima Manutenção
                                </h4>
                                <p className="text-[#8B4513] text-sm font-black">
                                    Terça, 24 OUTUBRO
                                </p>
                            </div>
                        </div>
                        <button className="text-[#8B4513] text-[10px] font-bold uppercase tracking-widest hover:underline ml-8">
                            Mais Detalhes
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default VelocidadeGasComponent