import React, { useState } from "react"
import { toPng } from "html-to-image"
import jsPDF from "jspdf"
import logo from "../../../assets/Navegação/logo.jpeg"

const GuiaDeMonitoramentoComponent: React.FC = () => {
    const [gerandoPdf, setGerandoPdf] = useState(false);

    const handleExportar = async () => {
        const elemento = document.getElementById("tabela-ecoflux");
        
        if (!elemento) {
            console.error("Tabela não encontrada!");
            return;
        }

        try {
            setGerandoPdf(true);

            const imgData = await toPng(elemento, {
                backgroundColor: "#F8F9F6", 
                pixelRatio: 2 
            });

            const pdf = new jsPDF("p", "mm", "a4");
            
            const imgProps = pdf.getImageProperties(imgData);
            const pdfWidth = pdf.internal.pageSize.getWidth();
            const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

            pdf.addImage(imgData, "PNG", 0, 10, pdfWidth, pdfHeight);
            pdf.save("Relatorio_Biodigestor.pdf");

        } catch (error) {
            console.error("Erro ao gerar PDF: ", error);
        } finally {
            setGerandoPdf(false);
        }
    }

    return (
        <section className="w-full px-6 md:px-24 pt-32 md:pt-[180px] pb-8 bg-[#F8F9F6]">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-6 border-b border-gray-300/80 pb-6">
                <div className="flex flex-col gap-2">
                    <h1 className="text-[#133524] text-3xl md:text-[42px] font-black uppercase tracking-tight">
                        Guia de Monitoramento
                    </h1> 
                </div>
                <button 
                    onClick={handleExportar}
                    disabled={gerandoPdf}
                    className="bg-[#133524] text-white px-8 py-3 text-xs md:text-sm font-bold uppercase tracking-wider hover:bg-[#1E4D36] transition-colors shrink-0 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    {gerandoPdf ? "Gerando PDF..." : "Exportar Dados"}
                </button>
            </div>
        </section>
    )
}

export default GuiaDeMonitoramentoComponent