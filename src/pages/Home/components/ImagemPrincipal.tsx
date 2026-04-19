import React from "react"
import { Link } from "react-router-dom" 
import { Play } from "lucide-react"
import ImagemPrincipal from "../../../assets/Home/imagemPrincipal.jpg"

const ImagemPrincipalComponent: React.FC = () => {
    return (
        <section className="relative w-full h-screen min-h-[600px] flex items-center px-6 md:px-24 overflow-hidden">
            <div className="absolute inset-0 z-0">
                <img 
                    src={ImagemPrincipal} 
                    alt="Background Amazônia" 
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/45" />
            </div>
            <div className="relative z-10 max-w-2xl mt-20">
                <h1 className="text-white text-6xl md:text-8xl font-black uppercase leading-tight tracking-tighter">
                    ECOFLUX
                </h1>
                
                <p className="text-white/90 text-lg md:text-xl mt-4 max-w-md font-light">
                    Monitoramento inteligente para um futuro sustentável e acessível.
                </p>

                <div className="flex flex-wrap items-center gap-6 mt-10">
                    <Link 
                        to="/monitoramento"
                        className="bg-white text-[#1A2412] px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all shadow-xl inline-block"
                    >
                        Monitoramento
                    </Link>
                    <Link 
                        to="/guia"
                        className="group flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 pl-2 pr-8 py-2 rounded-full hover:bg-white/20 transition-all cursor-pointer"
                    >
                        <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center relative overflow-hidden transition-transform group-hover:scale-110">
                            <div className="absolute inset-0 bg-[#4A5568] opacity-40" />
                            <Play className="text-white fill-white relative z-10" size={16} />
                        </div>
                        <span className="text-white font-medium">Como Funciona</span>
                    </Link>
                </div>
            </div>
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
                <div className="w-[2px] h-12 bg-gradient-to-b from-white to-transparent rounded-full opacity-30" />
            </div>

        </section>
    )
}

export default ImagemPrincipalComponent