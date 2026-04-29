import React, { useState } from "react"
import { Calendar, TrendingUp } from "lucide-react"
import { useEcoFluxCalculations } from "../../../hooks/useEcoFluxCalculations"

const VelocidadeGasComponent: React.FC = () => {
    const [periodo, setPeriodo] = useState("PRÓX. 24H")
    const { sensorData, metrics } = useEcoFluxCalculations();

    const volumeAtual = metrics ? metrics.volumeGasM3 : 0;
    const tempAtual = sensorData ? sensorData.temperaturaC : 25;

    const taxaProducaoBase = 0.05; 
    const fatorTemperatura = tempAtual > 30 ? 1.5 : 1.0; 
    
    const pontosProjecao = [0, 2, 4, 6, 8].map(hora => {
        const valorProjetado = volumeAtual + (taxaProducaoBase * fatorTemperatura * hora);
        return {
            hora: `+${hora}h`,
            valor: valorProjetado
        };
    });

    const maxEscala = Math.max(...pontosProjecao.map(p => p.valor), 2.5);

    return (
        <section className="w-full px-6 md:px-24 py-12 bg-[#F8F9F6]">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
                
                <div className="lg:col-span-2 flex flex-col">
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-12 gap-6">
                        <div>
                            <h3 className="text-[#133524] text-xl md:text-[22px] font-bold uppercase tracking-wide mb-1">
                                Projeção de Produção de Gás
                            </h3>
                            <div className="flex items-center gap-2">
                                <TrendingUp size={14} className="text-[#4F6D17]" />
                                <span className="text-[10px] font-bold text-[#4A5043] uppercase tracking-widest">
                                    Cálculo Preditivo (Próximas Horas)
                                </span>
                            </div>
                        </div>
                        <div className="flex border border-[#133524] rounded-sm overflow-hidden text-xs font-bold">
                            {["PRÓX. 24H", "PRÓX. 48H"].map((p) => (
                                <button 
                                    key={p}
                                    onClick={() => setPeriodo(p)}
                                    className={`px-5 py-2 transition-colors cursor-pointer ${
                                        periodo === p ? "bg-[#133524] text-white" : "text-[#133524]"
                                    }`}
                                >
                                    {p}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="relative w-full flex mt-2">
                        <div className="flex flex-col justify-between items-end pr-4 text-[10px] font-bold text-[#4A5043] h-[260px]">
                            <span>{maxEscala.toFixed(1)}m³</span>
                            <span>{(maxEscala/2).toFixed(1)}m³</span>
                            <span>0.0m³</span>
                        </div>
                        <div className="flex-1 relative border-l-2 border-b-2 border-[#133524] h-[260px] flex justify-around items-end pb-1">
                            {pontosProjecao.map((p, i) => {
                                const alturaPercentual = (p.valor / maxEscala) * 100;
                                return (
                                    <div key={i} className="relative flex flex-col items-center w-full group">
                                        <div 
                                            className="absolute w-3 h-3 bg-[#4F6D17] rounded-full shadow-md transition-all duration-500"
                                            style={{ bottom: `${alturaPercentual}%` }}
                                        >
                                            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block bg-[#133524] text-white text-[9px] px-2 py-1 rounded">
                                                {p.valor.toFixed(2)}m³
                                            </div>
                                        </div>
                                        <span className="absolute -bottom-8 text-[10px] font-bold text-[#4A5043]">
                                            {p.hora === "+0h" ? "Agora" : p.hora}
                                        </span>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
                <div className="lg:col-span-1 flex flex-col gap-8 mt-16 lg:mt-0">
                    <div className="border-b border-[#133524]/30 pb-3">
                        <h3 className="text-[#133524] text-sm font-bold uppercase tracking-widest">Saúde do Sistema</h3>
                    </div>
                    <div className={`flex flex-col gap-6 text-sm font-bold ${sensorData ? 'text-[#133524]' : 'text-gray-400'}`}>
                        <div className="flex justify-between items-center">
                            <span className="text-[11px] text-[#4A5043] uppercase tracking-widest">Status Atual</span>
                            <div className="flex items-center gap-2">
                                <div className={`w-2.5 h-2.5 ${sensorData ? 'bg-[#4F6D17]' : 'bg-gray-300'}`}></div>
                                <span>{sensorData ? "Ativo" : "Inativo"}</span>
                            </div>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-[11px] text-[#4A5043] uppercase tracking-widest">Produção/Hora</span>
                            <span>{sensorData ? `${(taxaProducaoBase * fatorTemperatura).toFixed(3)} m³` : "--"}</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-[11px] text-[#4A5043] uppercase tracking-widest">Pressão</span>
                            <span>{sensorData ? `${sensorData.pressaoHpa.toFixed(1)} hPa` : "-- hPa"}</span>
                        </div>
                    </div>
                    <div className="mt-2 bg-[#FCE5D3] border-l-4 border-[#8B4513] p-5 shadow-sm">
                        <div className="flex items-start gap-3 mb-4">
                            <Calendar className="text-[#8B4513] shrink-0 mt-0.5" size={20} />
                            <div>
                                <h4 className="text-[10px] text-[#8B4513] font-bold uppercase tracking-widest mb-1.5">Próxima Manutenção</h4>
                                <p className="text-[#8B4513] text-sm font-black">Terça, 24 OUTUBRO</p>
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