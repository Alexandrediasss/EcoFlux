import React from "react"
import { Link } from "react-router-dom"

const NavBar = () => {
    return (
        <nav className="fixed top-[43px] left-1/2 -translate-x-1/2 w-full max-w-[1280px] h-[106px] 
                        bg-[#1A2412]/75 backdrop-blur-md rounded-[9999px] border border-white/12 
                        flex items-center justify-between px-8 z-50">
            <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-white rounded-full"></div>
                <span className="text-white font-bold tracking-widest">LOGOTIPO</span>
            </div>
            <div className="flex items-center gap-8">
                <Link to="/" className="bg-white text-[#1A2412] px-6 py-2 rounded-full font-medium">
                    Início
                </Link>
                <Link to="/guia" className="text-white/80 hover:text-white transition-colors">
                    Guia
                </Link>
                <Link to="/monitoramento" className="text-white/80 hover:text-white transition-colors">
                    Monitoramento
                </Link>
                <Link to="/alerta" className="text-white/80 hover:text-white transition-colors">
                    Alertas
                </Link>
                <Link to="/" className="text-white/80 hover:text-white transition-colors">
                    Sobre
                </Link>
            </div>
            <button className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                <div className="space-y-1">
                    <div className="w-6 h-0.5 bg-[#1A2412]"></div>
                    <div className="w-6 h-0.5 bg-[#1A2412]"></div>
                    <div className="w-6 h-0.5 bg-[#1A2412]"></div>
                </div>
            </button>
        </nav>
    )
}

export default NavBar