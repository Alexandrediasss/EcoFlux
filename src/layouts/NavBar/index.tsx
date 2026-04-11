import React from "react"
import { Link } from "react-router-dom"

const NavBar = () => {
    return (
        <>
            <h1>NavBar</h1>
            <Link to="/">Inicio</Link>
            <Link to="/guia">Guia</Link>
            <Link to="/monitoramento">Monitoramento</Link>
            <Link to="/alerta">Alertas</Link>
            <Link to="/">Sobre</Link>
        </>
    )
}

export default NavBar