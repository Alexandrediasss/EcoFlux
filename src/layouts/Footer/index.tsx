import React from "react"
import { Link } from "react-router-dom"
import { Mail, Phone, MapPin } from "lucide-react"

const Footer: React.FC = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    return (
        <footer className="bg-[#02261A] text-white py-12 md:py-16 px-6 md:px-24">
            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">
                <div className="space-y-6">
                    <div>
                        <h2 className="text-3xl font-bold tracking-tighter">ECOFLUX</h2>
                        <div className="w-10 h-1 bg-[#00D99E] mt-1"></div>
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed">
                        O projeto EcoFlux visa criar um sistema para monitorar e simular a produção de energia elétrica a partir de resíduos orgânicos, usando um biodigestor caseiro como base para experimentos.
                    </p>
                    <div className="flex gap-4">
                        {[Mail, Mail, Mail, Mail].map((Icon, i) => (
                            <a
                                key={i}
                                href="#"
                                className="p-2 bg-[#063D2E] rounded-lg hover:bg-[#00D99E] transition-all hover:-translate-y-1 cursor-pointer"
                            >
                                <Icon size={20} />
                            </a>
                        ))}
                    </div>
                </div>
                <div className="space-y-6">
                    <h3 className="font-bold uppercase tracking-widest text-sm text-[#00D99E]">Menu</h3>
                    <ul className="flex flex-col gap-4 text-gray-400 text-sm">
                        <Link to="/" onClick={scrollToTop} className="hover:text-white transition-colors">Início</Link>
                        <Link to="/guia" onClick={scrollToTop} className="hover:text-white transition-colors">Guia</Link>
                        <Link to="/monitoramento" onClick={scrollToTop} className="hover:text-white transition-colors">Monitoramento</Link>
                        <Link to="/sobre" onClick={scrollToTop} className="hover:text-white transition-colors">Sobre</Link>
                    </ul>
                </div>
                <div className="space-y-6">
                    <h3 className="font-bold uppercase tracking-widest text-sm text-[#00D99E]">Legal</h3>
                    <ul className="flex flex-col gap-4 text-gray-400 text-sm">
                        <Link to="/privacidade" className="hover:text-white transition-colors">Privacidade</Link>
                        <Link to="/termos" className="hover:text-white transition-colors">Termos de Uso</Link>
                        <Link to="/acessibilidade" className="hover:text-white transition-colors">Acessibilidade</Link>
                    </ul>
                </div>
                <div className="space-y-6">
                    <h3 className="font-bold uppercase tracking-widest text-sm text-[#00D99E]">Contato</h3>
                    <ul className="space-y-4 text-sm">
                        <li className="flex items-center gap-3 group">
                            <div className="p-2 bg-[#063D2E] rounded-lg text-[#00D99E] group-hover:bg-[#00D99E] group-hover:text-white transition-colors">
                                <Mail size={18} />
                            </div>
                            <span className="text-gray-400">ecoflux@gmail.com</span>
                        </li>
                        <li className="flex items-center gap-3 group">
                            <div className="p-2 bg-[#063D2E] rounded-lg text-[#00D99E] group-hover:bg-[#00D99E] group-hover:text-white transition-colors">
                                <Phone size={18} />
                            </div>
                            <span className="text-gray-400">+55 (92) 99123-4567</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <div className="p-2 bg-[#063D2E] rounded-lg text-[#00D99E]">
                                <MapPin size={18} />
                            </div>
                            <div className="text-gray-400">
                                <p className="text-white font-medium">Centro Universitário Fametro</p>
                                <p className="text-xs">Manaus, AM</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="mt-16 pt-8 border-t border-white/5 text-center text-xs text-gray-500">
                ©2026 EcoFlux - Todos os direitos reservados.
            </div>
        </footer>
    )
}

export default Footer