import React from "react"

import ImagemPrincipalComponent from "./components/ImagemPrincipal"
import ProblematicaComponent from "./components/Problematica"
import CardsComponent from "./components/Cards"
import SolucaoComponent from "./components/Solucao"

const HomePage = () => {
    return (
        <>
            <ImagemPrincipalComponent />
            <ProblematicaComponent />
            <CardsComponent />
            <SolucaoComponent />
        </>
    )
}

export default HomePage