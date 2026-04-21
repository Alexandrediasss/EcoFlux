import React from "react"

const GuiaDeMonitoramentoComponent: React.FC = () => {
    const handleExportar = () => {
        console.log("Exportar dados...")
    }

    return (
        <section className="w-full px-6 md:px-24 pt-32 md:pt-[180px] pb-8 bg-[#F8F9F6]">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-6 border-b border-gray-300/80 pb-6">
                <div className="flex flex-col gap-2">
                    <h1 className="text-[#133524] text-3xl md:text-[42px] font-black uppercase tracking-tight">
                        Guia de Monitoramento
                    </h1>  
                    <div className="flex items-center gap-2 text-[10px] md:text-xs font-bold text-[#4A5043] uppercase tracking-wider">
                        <div className="w-2.5 h-2.5 bg-[#4F6D17] shrink-0"></div>
                        <span>Sistema do Biodigestor • Última atualização: 14:32:05</span>
                    </div>
                </div>
                <button 
                    onClick={handleExportar}
                    className="bg-[#133524] text-white px-8 py-3 text-xs md:text-sm font-bold uppercase tracking-wider hover:bg-[#1E4D36] transition-colors shrink-0"
                >
                    Exportar Dados
                </button>
                
            </div>
        </section>
    )
}

export default GuiaDeMonitoramentoComponent