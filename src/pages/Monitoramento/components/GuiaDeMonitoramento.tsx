import React, { useState } from "react"
import jsPDF from "jspdf"
import autoTable from "jspdf-autotable"
import logo from "../../../assets/Navegação/logo.jpeg"
import { useEcoFluxCalculations } from "../../../hooks/useEcoFluxCalculations"

const GuiaDeMonitoramentoComponent: React.FC = () => {
    const [gerandoPdf, setGerandoPdf] = useState(false);
    
    const { sensorData, metrics } = useEcoFluxCalculations();

    const criarLogoArredondada = async (imgSrc: string): Promise<string> => {
        return new Promise((resolve) => {
            const img = new Image();
            img.src = imgSrc;
            img.onload = () => {
                const canvas = document.createElement("canvas");
                const size = Math.min(img.width, img.height);
                canvas.width = size;
                canvas.height = size;
                const ctx = canvas.getContext("2d");
                
                if (ctx) {
                    ctx.beginPath();
                    ctx.arc(size / 2, size / 2, size / 2, 0, Math.PI * 2, true);
                    ctx.closePath();
                    ctx.clip();
                    ctx.drawImage(img, 0, 0, size, size);
                }
                resolve(canvas.toDataURL("image/png"));
            };
        });
    };

    const handleExportar = async () => {
        try {
            setGerandoPdf(true);

            const temperaturaAtual = sensorData ? `${sensorData.temperaturaC.toFixed(1)} °C` : "-- °C";
            const gasProduzido = metrics ? `${metrics.volumeGasM3.toFixed(2)} m³` : "-- m³";
            const energiaAtual = metrics ? `${metrics.energiaKwh.toFixed(2)} kWh` : "-- kWh";
            const statusText = sensorData ? "Em tempo real" : "Inativo";

            const pdf = new jsPDF("p", "mm", "a4");
            
            const logoArredondada = await criarLogoArredondada(logo);
            pdf.addImage(logoArredondada, "PNG", 15, 10, 12, 12);
            
            pdf.setFont("helvetica", "bold");
            pdf.setFontSize(16);
            pdf.setTextColor(19, 53, 36); 
            pdf.text("EcoFlux | Guia de Monitoramento", 30, 18);
            
            pdf.setDrawColor(200, 200, 200);
            pdf.line(15, 25, 195, 25);

            autoTable(pdf, {
                startY: 35, 
                head: [['Indicador', 'Valor Atual', 'Status', 'Impacto no Sistema']],
                body: [
                    ['Temperatura', temperaturaAtual, statusText, 'Mantém o reator em temperatura mesofílica ideal.'],
                    ['Gás Produzido', gasProduzido, statusText, 'Geração constante de pressão interna.'],
                    ['Energia Estimada', energiaAtual, statusText, 'Potencial comercial do material estocado.']
                ],
                headStyles: {
                    fillColor: [19, 53, 36], 
                    textColor: [255, 255, 255],
                    fontStyle: 'bold',
                    halign: 'center'
                },
                bodyStyles: {
                    textColor: [50, 50, 50],
                    halign: 'center',
                    valign: 'middle'
                },
                columnStyles: {
                    0: { fontStyle: 'bold' },
                    3: { halign: 'left' } 
                },
                alternateRowStyles: {
                    fillColor: [248, 249, 246] 
                },
                theme: 'grid'
            });

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
                    className="bg-[#133524] cursor-pointer text-white px-8 py-3 text-xs md:text-sm font-bold uppercase tracking-wider hover:bg-[#1E4D36] transition-colors shrink-0 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    {gerandoPdf ? "Gerando PDF..." : "Exportar Dados"}
                </button>
            </div>
        </section>
    )
}

export default GuiaDeMonitoramentoComponent