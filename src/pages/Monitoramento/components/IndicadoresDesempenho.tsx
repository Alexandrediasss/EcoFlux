import React from "react"
import { TrendingUp, Home } from "lucide-react"

const IndicadoresDesempenhoComponent: React.FC = () => {
    return (
        <section className="w-full px-6 md:px-24 py-8 bg-[#F8F9F6]">
            <div className="max-w-7xl mx-auto">
                <div className="hidden md:grid grid-cols-4 gap-6 border-b border-gray-200 pb-4 mb-6">
                    <h3 className="text-[10px] font-bold text-[#4A5043] uppercase tracking-widest">Indicadores Chave de Desempenho</h3>
                    <h3 className="text-[10px] font-bold text-[#4A5043] uppercase tracking-widest">Valor Atual</h3>
                    <h3 className="text-[10px] font-bold text-[#4A5043] uppercase tracking-widest">Status</h3>
                    <h3 className="text-[10px] font-bold text-[#4A5043] uppercase tracking-widest">Impacto no Sistema</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6 items-center border-b border-gray-200 py-6">
                    <div className="md:col-span-1">
                        <span className="md:hidden text-[10px] font-bold text-[#4A5043] uppercase tracking-widest block mb-1">Indicador</span>
                        <h4 className="text-[#133524] text-lg font-bold">Temperatura</h4>
                    </div>
                    <div className="md:col-span-1">
                        <span className="md:hidden text-[10px] font-bold text-[#4A5043] uppercase tracking-widest block mb-1">Valor</span>
                        <div className="text-[#133524] text-4xl font-black">28°C</div>
                    </div>
                    <div className="md:col-span-1 w-full max-w-[200px]">
                        <span className="md:hidden text-[10px] font-bold text-[#4A5043] uppercase tracking-widest block mb-1">Status</span>
                        <div className="flex justify-between text-[10px] font-bold text-[#133524] mb-1">
                            <span>25°C MIN</span>
                            <span>40°C MAX</span>
                        </div>
                        <div className="w-full h-1.5 bg-gray-200 rounded-full overflow-hidden mb-1">
                            <div className="h-full bg-[#4F6D17] w-[20%]"></div> 
                        </div>
                        <div className="text-[10px] font-bold text-[#4F6D17] uppercase">Status: Estável</div>
                    </div>

                    <div className="md:col-span-1 text-xs text-gray-500 font-medium">
                        <span className="md:hidden text-[10px] font-bold text-[#4A5043] uppercase tracking-widest block mb-1">Impacto</span>
                        xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6 items-center border-b border-gray-200 py-6">
                    <div className="md:col-span-1">
                        <span className="md:hidden text-[10px] font-bold text-[#4A5043] uppercase tracking-widest block mb-1">Indicador</span>
                        <h4 className="text-[#133524] text-lg font-bold">Gás Produzido</h4>
                    </div>
                    <div className="md:col-span-1">
                        <span className="md:hidden text-[10px] font-bold text-[#4A5043] uppercase tracking-widest block mb-1">Valor</span>
                        <div className="text-[#133524] text-4xl font-black">
                            1.5 m<sup className="text-xl">3</sup>
                        </div>
                    </div>
                    <div className="md:col-span-1 flex items-center gap-2">
                        <span className="md:hidden text-[10px] font-bold text-[#4A5043] uppercase tracking-widest block">Status</span>
                        <span className="bg-[#D1F2D9] text-[#133524] px-2 py-1 rounded-md text-xs font-bold">
                            +12%
                        </span>
                        <span className="text-xs text-gray-500">ficção</span>
                    </div>
                    <div className="md:col-span-1 flex items-start gap-2 text-xs text-[#4F6D17] font-bold">
                        <span className="md:hidden text-[10px] font-bold text-[#4A5043] uppercase tracking-widest block">Impacto</span>
                        <TrendingUp size={16} className="shrink-0 mt-0.5" />
                        xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6 items-center border-b border-gray-200 py-6">
                    <div className="md:col-span-1">
                        <span className="md:hidden text-[10px] font-bold text-[#4A5043] uppercase tracking-widest block mb-1">Indicador</span>
                        <h4 className="text-[#133524] text-lg font-bold">Energia Gerada</h4>
                    </div>
                    <div className="md:col-span-1">
                        <span className="md:hidden text-[10px] font-bold text-[#4A5043] uppercase tracking-widest block mb-1">Valor</span>
                        <div className="text-[#133524] text-4xl font-black">9 kWh</div>
                    </div>
                    <div className="md:col-span-1">
                        <span className="md:hidden text-[10px] font-bold text-[#4A5043] uppercase tracking-widest block mb-1">Status</span>
                        <span className="bg-[#133524] text-white px-3 py-1.5 rounded-sm text-[10px] font-bold uppercase tracking-widest">
                            Máx Performance
                        </span>
                    </div>
                    <div className="md:col-span-1 flex items-start gap-2 text-xs text-gray-600 font-medium">
                        <span className="md:hidden text-[10px] font-bold text-[#4A5043] uppercase tracking-widest block">Impacto</span>
                        <Home size={16} className="shrink-0 text-[#4F6D17] mt-0.5" />
                        <span>
                            xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx<br/>xxxxx
                        </span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default IndicadoresDesempenhoComponent