import React from "react";
import { Link, useLocation } from "react-router-dom";

const NavBar: React.FC = () => {
    const location = useLocation();

    // Itens de navegação para facilitar a manutenção
    const navItems = [
        { label: 'Início', href: '/' },
        { label: 'Guia', href: '/guia' },
        { label: 'Monitoramento', href: '/monitoramento' },
        { label: 'Alertas', href: '/alerta' },
        { label: 'Sobre', href: '#' },
    ];

    return (
        <nav className="fixed top-[43px] left-1/2 -translate-x-1/2 w-[95%] max-w-[1280px] h-[106px] 
                        bg-[#344e41] shadow-[0_15px_35px_rgba(0,0,0,0.35)] rounded-[9999px] border border-white/10 
                        flex items-center justify-between px-10 z-50">
            
            {/* Logo */}
            <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-white rounded-full shadow-sm"></div>
                <span className="text-white font-bold tracking-[0.2em] text-lg">LOGOTIPO</span>
            </div>

            {/* Links Dinâmicos */}
            <div className="hidden md:flex items-center gap-4 lg:gap-8">
                {navItems.map((item) => {
                    // Verifica se a rota atual é igual ao link
                    const isActive = location.pathname === item.href;
                    
                    return (
                        <Link 
                            key={item.label}
                            to={item.href} 
                            className={`transition-all duration-300 text-sm font-bold ${
                                isActive 
                                ? "bg-white text-[#344e41] px-6 py-2.5 rounded-full shadow-md" 
                                : "text-white/70 hover:text-white"
                            }`}
                        >
                            {item.label}
                        </Link>
                    );
                })}
            </div>

            {/* Botão Hambúrguer (Ícone de Menu) */}
            <button className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md active:scale-95 transition-transform">
                <div className="space-y-1.5">
                    <div className="w-6 h-[2.5px] bg-[#344e41] rounded-full"></div>
                    <div className="w-6 h-[2.5px] bg-[#344e41] rounded-full"></div>
                    <div className="w-6 h-[2.5px] bg-[#344e41] rounded-full"></div>
                </div>
            </button>
        </nav>
    );
}

export default NavBar;