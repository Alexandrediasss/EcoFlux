import { useState, useEffect } from 'react'
import { io } from 'socket.io-client'

export interface SensorData {
  metanoRaw: number     
  temperaturaC: number  
  pressaoHpa: number   
  distanciaCm: number  
}

export interface EcoFluxMetrics {
  mols: number
  massaTotalKg: number
  energiaTermicaJoules: number
  energiaKwh: number
}

export function useEcoFluxCalculations() {
  const [sensorData, setSensorData] = useState<SensorData | null>(null)
  const [metrics, setMetrics] = useState<EcoFluxMetrics | null>(null)

  const AREA_BASE_REATOR_M2 = 2.0
  const Z = 0.99
  const R = 8.314
  const M_MISTURA = 0.028
  const PCI_CH4 = 50000000

  useEffect(() => {
    const socket = io('http://localhost:3000')

    socket.on('dados-arduino', (data: SensorData) => {
      setSensorData(data)
    })

    return () => {
      socket.disconnect()
    }
  }, [])

  useEffect(() => {
    if (!sensorData) return

    const tempKelvin = sensorData.temperaturaC + 273.15
    const pressaoPascal = sensorData.pressaoHpa * 100
    const alturaGasMetros = sensorData.distanciaCm / 100
    const volumeGas = AREA_BASE_REATOR_M2 * alturaGasMetros
    
    const fracaoMetano = Math.min(Math.max(sensorData.metanoRaw / 1023, 0), 1)

    // Cálculos
    const n = (pressaoPascal * volumeGas) / (Z * R * tempKelvin)
    const massaTotal = n * M_MISTURA
    const pciMistura = fracaoMetano * PCI_CH4
    const qTotal = massaTotal * pciMistura
    const energiaKwh = qTotal / 3600000

    setMetrics({
      mols: n,
      massaTotalKg: massaTotal,
      energiaTermicaJoules: qTotal,
      energiaKwh: energiaKwh
    })
  }, [sensorData])

  return { sensorData, metrics }
}