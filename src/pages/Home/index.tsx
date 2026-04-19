import React from "react"
import ImagemPrincipalComponent from "./components/ImagemPrincipal"
import InfoComponent from "./components/Info"
import CardsComponent from "./components/Cards"
import FluxoComponent from "./components/Fluxo"

const HomePage: React.FC = () => {
    const problematica = {
        titulo: "PROBLEMÁTICA",
        card: "Entenda o problema!",
        p1: "O acesso ao gás ainda é limitado em muitas áreas do Amazonas. O alto custo, a dificuldade de transporte e a dependência de fornecimento externo tornam o uso do gás de cozinha restrito e, em alguns casos, inviável.",
        p2: "Em comunidades do interior, essa realidade é ainda mais evidente, devido ao isolamento geográfico e à logística mais difícil de abastecimento. Como alternativa, muitas pessoas recorrem à lenha ou a outras fontes menos eficientes, o que acaba gerando danos ambientais e problemas de saúde."
    }

    const solucao = {
        titulo: "SOLUÇÃO",
        card: "Aplicando a solução na prática",
        p1: "Na prática, o biodigestor aproveita resíduos orgânicos como restos de alimentos e esterco, transformando tudo dentro de um sistema fechado onde ocorre a decomposição natural. Com isso, são gerados dois resultados principais: o biogás e o biofertilizante.",
        p2: "Assim, o que antes era lixo passa a ter utilidade. O uso do biodigestor no dia a dia acaba sendo simples, já que os resíduos podem ser adicionados conforme vão sendo gerados, sem precisar acumular lixo. O sistema vai fazendo o trabalho sozinho."
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