import React from "react"
import { Link } from "react-router-dom"
import {
  ArrowRight, Lock, DollarSign, Ship, MapPin,
  Flame, Activity, Factory, Lightbulb, Zap, Leaf
} from "lucide-react"

const CIRCLE = 128
const OFFSET = 72
const ARROW  = 26
const GAP    = 6
const ARROW_MID_Y = (CIRCLE + OFFSET) / 2 - ARROW / 2
const ANGLE_DEG   = Math.round(Math.atan2(OFFSET, CIRCLE + 2 * GAP + ARROW) * 180 / Math.PI)

const PalafitaIcon: React.FC<{ className?: string }> = ({ className = "" }) => (
  <svg
    viewBox="0 0 120 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <polygon points="18,42 60,8 102,42" fill="#B8C9B8" />
    <polygon points="18,42 60,8 102,42" stroke="#A0B5A0" strokeWidth="1.5" fill="#B8C9B8" />

    <rect x="24" y="42" width="72" height="34" rx="2" fill="#C8D8C8" stroke="#A0B5A0" strokeWidth="1.2" />
    <rect x="32" y="50" width="18" height="16" rx="2" fill="#A0B5A0" opacity="0.6" />
    <rect x="70" y="50" width="18" height="16" rx="2" fill="#A0B5A0" opacity="0.6" />
    <rect x="48" y="56" width="24" height="20" rx="2" fill="#8FAF8F" opacity="0.7" />

    <line x1="36"  y1="76" x2="30"  y2="96" stroke="#90A890" strokeWidth="3" strokeLinecap="round" />
    <line x1="58"  y1="76" x2="55"  y2="96" stroke="#90A890" strokeWidth="3" strokeLinecap="round" />
    <line x1="80"  y1="76" x2="77"  y2="96" stroke="#90A890" strokeWidth="3" strokeLinecap="round" />
    <line x1="88"  y1="76" x2="92"  y2="96" stroke="#90A890" strokeWidth="3" strokeLinecap="round" />

    <path d="M8 90 Q20 86 32 90 Q44 94 56 90 Q68 86 80 90 Q92 94 104 90 Q112 87 118 90"
      stroke="#A0B5A0" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.7" />
    <path d="M4 96 Q18 92 34 96 Q50 100 66 96 Q82 92 98 96 Q108 93 116 96"
      stroke="#A0B5A0" strokeWidth="1.2" strokeLinecap="round" fill="none" opacity="0.5" />
  </svg>
)

interface NodeProps {
  label: string
  Icon: React.ElementType
  green?: boolean
}

const CircleNode: React.FC<NodeProps> = ({ label, Icon, green = false }) => (
  <div
    className={`rounded-full flex flex-col items-center justify-center text-center p-3 flex-shrink-0
      ${green ? "bg-[#3CB95A] text-white" : "bg-[#C5D2C5] text-[#253225]"}`}
    style={{ width: CIRCLE, height: CIRCLE }}
  >
    <Icon size={24} className="mb-1 opacity-85 flex-shrink-0" />
    <p className="text-[10px] font-bold uppercase leading-tight tracking-wide w-full">
      {label}
    </p>
  </div>
)
const FluxoComponent: React.FC = () => {
  const problems: NodeProps[] = [
    { label: "Acesso limitado",    Icon: Lock       },
    { label: "Alto custo",         Icon: DollarSign },
    { label: "Transporte difícil", Icon: Ship       },
    { label: "Isolamento",         Icon: MapPin     },
    { label: "Uso de lenha",       Icon: Flame      },
    { label: "Problemas de saúde", Icon: Activity   },
    { label: "Poluição",           Icon: Factory    },
  ]

  const solutions: NodeProps[] = [
    { label: "Alternativa",         Icon: Lightbulb, green: false },
    { label: "Biodigestor",         Icon: Leaf,      green: true  },
    { label: "Energia sustentável", Icon: Zap,       green: true  },
  ]

  return (
    <section className="w-full bg-white py-20 px-4 flex flex-col items-center overflow-x-auto">
      <div className="flex items-start" style={{ height: CIRCLE + OFFSET + 4 }}>
        {problems.map((item, i) => {
          const isTop  = i % 2 === 0
          const rotate = isTop ? ANGLE_DEG : -ANGLE_DEG
          return (
            <div key={i} className="flex items-start flex-shrink-0">
              <div style={{ marginTop: isTop ? 0 : OFFSET }}>
                <CircleNode {...item} />
              </div>
              {i < problems.length - 1 && (
                <div
                  className="text-gray-400 flex-shrink-0 flex items-center"
                  style={{
                    marginTop:       ARROW_MID_Y,
                    marginLeft:      GAP,
                    marginRight:     GAP,
                    transform:       `rotate(${rotate}deg)`,
                    transformOrigin: "center center",
                  }}
                >
                  <ArrowRight size={ARROW} />
                </div>
              )}
            </div>
          )
        })}
      </div>
      <div className="flex items-center gap-4 mt-8">
        {solutions.map((item, i) => (
          <React.Fragment key={i}>
            <CircleNode {...item} />
            {i < solutions.length - 1 && (
              <ArrowRight size={22} className="text-gray-400 flex-shrink-0" />
            )}
          </React.Fragment>
        ))}
      </div>
      <div className="mt-16">
        <Link
          to="/guia"
          className="bg-[#1A2412] text-white px-8 py-4 rounded-xl font-bold flex items-center gap-3 hover:bg-[#2A3622] transition-colors group"
        >
          VEJA O GUIA DE UTILIZAÇÃO
          <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
      <div className="w-full flex justify-between items-end mt-10 px-6 max-w-5xl">
        <PalafitaIcon className="w-28 md:w-36 opacity-60" />
        <PalafitaIcon className="w-28 md:w-36 opacity-50" />
        <PalafitaIcon className="w-28 md:w-36 opacity-60" />
      </div>

    </section>
  )
}

export default FluxoComponent