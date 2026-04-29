import React, { useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { Menu, X } from "lucide-react" 
import Logo from "../../assets/Navegação/logo.jpeg"

const NavBar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false)
    const location = useLocation()

    const routes = [
        { name: "Início", path: "/" },
        { name: "Guia", path: "/guia" },
        { name: "Monitoramento", path: "/monitoramento" },
        { name: "Alertas", path: "/alerta" },
    ]

    const isActive = (path: string): boolean => location.pathname === path

    const isHome = location.pathname === "/"

    return (
        <nav className={`fixed top-4 md:top-[43px] left-1/2 -translate-x-1/2 w-[95%] max-w-[1280px] min-h-[70px] md:h-[106px] 
                        ${isHome ? "bg-[#1A2412]/85" : "bg-[#022411]/80"} backdrop-blur-md rounded-3xl md:rounded-[9999px] border border-white/12 
                        flex items-center justify-between px-6 md:px-8 z-50 transition-colors duration-500`}>

            <div className="flex items-center gap-3">
                <img
                    src={Logo}
                    alt="EcoFlux Logo"
                    className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover border border-white/20"
                />
                <span className="text-white font-bold tracking-widest text-sm md:text-base">EcoFlux</span>
            </div>
            
            <div className="hidden lg:flex items-center gap-2">
                {routes.map((route) => (
                    <Link
                        key={route.path}
                        to={route.path}
                        className={`px-5 py-2 rounded-full font-medium transition-all duration-300 whitespace-nowrap
                            ${isActive(route.path)
                                ? "bg-white text-[#1A2412]"
                                : "text-white/80 hover:text-white hover:bg-white/10"
                            }`}
                    >
                        {route.name}
                    </Link>
                ))}
            </div>
            
            <button
                className="lg:hidden text-white p-2"
                onClick={() => setIsOpen(!isOpen)}
            >
                {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
            
            {isOpen && (
                <div className={`absolute top-[80px] md:top-[110px] left-0 w-full 
                                ${isHome ? "bg-[#1A2412]" : "bg-[#022411]"} 
                                border border-white/10 rounded-2xl p-4 flex flex-col gap-2 lg:hidden shadow-2xl transition-colors duration-300`}>
                    {routes.map((route) => (
                        <Link
                            key={route.path}
                            to={route.path}
                            onClick={() => setIsOpen(false)}
                            className={`px-6 py-3 rounded-xl font-medium transition-all
                                ${isActive(route.path)
                                    ? "bg-white text-[#1A2412]"
                                    : "text-white/80"
                                }`}
                        >
                            {route.name}
                        </Link>
                    ))}
                </div>
            )}
        </nav>
    )
}

export default NavBar