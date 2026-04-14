import React from "react"
import { Mail, Phone, MapPin } from "lucide-react"

const Footer = () => {
    return (
        <footer className="bg-[#02261A] text-white py-16 px-8 md:px-24">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">

                {/* Coluna 1: Logo e Social */}
                <div className="space-y-6">
                    <div>
                        <h2 className="text-3xl font-bold tracking-tighter">ECOFLUX</h2>
                        <div className="w-10 h-1 bg-[#00D99E] mt-1"></div>
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed">
                        O projeto Sinalize é uma plataforma web que busca mitigar as barreiras de comunicação enfrentadas pela comunidade surda, promovendo inclusão e acessibilidade. [cite: 9] Juntos por um futuro mais verde.
                    </p>
                    <div className="flex gap-4">
                        {[Mail, Mail, Mail, Mail].map((Icon, i) => (
                            <div key={i} className="p-2 bg-[#063D2E] rounded-lg hover:bg-[#00D99E] transition-colors cursor-pointer">
                                <Icon size={20} />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Coluna 2: Menu */}
                <div className="space-y-6">
                    <h3 className="font-bold uppercase tracking-widest text-sm">Menu</h3>
                    <ul className="space-y-4 text-gray-400 text-sm">
                        <li className="hover:text-white cursor-pointer">Início</li>
                        <li className="hover:text-white cursor-pointer">Guia</li>
                        <li className="hover:text-white cursor-pointer">Monitoramento</li>
                        <li className="hover:text-white cursor-pointer">Sobre</li>
                    </ul>
                </div>

                {/* Coluna 3: Legal */}
                <div className="space-y-6">
                    <h3 className="font-bold uppercase tracking-widest text-sm">Legal</h3>
                    <ul className="space-y-4 text-gray-400 text-sm">
                        <li className="hover:text-white cursor-pointer">Privacidade</li>
                        <li className="hover:text-white cursor-pointer">Termos de Uso</li>
                        <li className="hover:text-white cursor-pointer">Acessibilidade</li>
                    </ul>
                </div>

                {/* Coluna 4: Contato */}
                <div className="space-y-6">
                    <h3 className="font-bold uppercase tracking-widest text-sm">Contato</h3>
                    <ul className="space-y-4 text-sm">
                        <li className="flex items-center gap-3">
                            <div className="p-2 bg-[#063D2E] rounded-lg text-[#00D99E]"><Mail size={18} /></div>
                            <span className="text-gray-400">ecoflux@gmail.com</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <div className="p-2 bg-[#063D2E] rounded-lg text-[#00D99E]"><Phone size={18} /></div>
                            <span className="text-gray-400">+55 (92) 99123-4567</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <div className="p-2 bg-[#063D2E] rounded-lg text-[#00D99E]"><MapPin size={18} /></div>
                            <div className="text-gray-400">
                                <p className="text-white font-medium">Centro Universitário Fametro</p> [cite: 7]
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