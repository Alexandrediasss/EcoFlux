import React from "react"

import GuiaDeMonitoramentoComponent from "./components/GuiaDeMonitoramento"
import IndicadoresDesempenhoComponent from "./components/IndicadoresDesempenho"
import VelocidadeGasComponent from "./components/VelocidadeGas"

const MonitoramentoPage = () => {
    return (
        <>
            <GuiaDeMonitoramentoComponent />
            <IndicadoresDesempenhoComponent />
            <VelocidadeGasComponent />
        </>
    )
}

export default MonitoramentoPage