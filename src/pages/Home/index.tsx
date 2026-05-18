import React from "react"
import ImagemPrincipalComponent from "./components/ImagemPrincipal"
import InfoComponent from "./components/Info"
import CardsComponent from "./components/Cards"
import FluxoComponent from "./components/Fluxo"

const HomePage: React.FC = () => {
    const problematica = {
        titulo: "PROBLEMÁTICA",
        card: "Entenda o problema!",
        p1: "Grandes áreas e comunidades isoladas na Amazônia sofrem com a falta de acesso a uma rede estável de energia elétrica. A dependência de fontes poluentes e caras limita o desenvolvimento local , enquanto toneladas de resíduos orgânicos são descartadas sem um destino útil.",
        p2: "Os biodigestores surgem como uma saída para transformar esses resíduos em biogás e gerar eletricidade. Porém, a falta de controle sobre o sistema impede o seu uso seguro e eficiente. O EcoFlux resolve esse gap ao monitorar dados biossinais em tempo real , transformando tecnologia de baixo custo em autonomia e energia limpa para quem mais precisa."
    }

    const solucao = {
        titulo: "SOLUÇÃO",
        card: "Aplicando a solução na prática",
        p1: "Na prática, o EcoFlux une a sustentabilidade de um biodigestor de baixo custo ao poder da tecnologia IoT. Sensores conectados a um Arduino coletam dados contínuos de temperatura, pressão e volume do biogás gerado. Essas informações são transmitidas instantaneamente para uma plataforma web em React via WebSocket, permitindo um monitoramento inteligente e em tempo real.",
        p2: "Além de automatizar o acompanhamento físico, o sistema conta com um módulo simulador que calcula a equivalência de toda essa produção diretamente em watts-hora. O que antes era apenas descarte orgânico vira uma fonte de energia limpa totalmente previsível, segura, didática e pronta para impactar contextos reais."
    }

    return (
        <>
            <ImagemPrincipalComponent />
            <InfoComponent conteudo={problematica} />
            <CardsComponent />
            <InfoComponent conteudo={solucao} />
            <FluxoComponent />
        </>
    )
}

export default HomePage