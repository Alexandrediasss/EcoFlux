import React from "react";
import GuiaBiodigestor from "./components/inicio"; 
import Funcionamento from "./components/funcionamento";
import Colocar from "./components/colocar";
import Final from "./components/final";

const GuiaPage: React.FC = () => {
    return (
        <>
            <GuiaBiodigestor />
            <Funcionamento />
            <Colocar />
            <Final />
        </>
    );
}

export default GuiaPage;