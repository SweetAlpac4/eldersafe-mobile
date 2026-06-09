import { useState, useEffect, useCallback } from "react"
import { vitals as initialVitals } from "../data/dummy"

export function useVitals() {
  const [vitals, setVitals]       = useState(initialVitals)
  const [emergency, setEmergency] = useState(null)

  const dismissEmergency = useCallback(() => setEmergency(null), [])

  const triggerEmergency = useCallback((type) => {
    const map = {
      fall: {
        type: "fall",
        title: "JATUH TERDETEKSI!",
        desc: "Sensor mendeteksi jatuh pada " +
          new Date().toLocaleTimeString("id-ID", { hour: "2-digit", minute: "2-digit" }) +
          ". Segera periksa kondisi Bapak Wirawan.",
      },
      hr: {
        type: "hr",
        title: "DETAK JANTUNG KRITIS!",
        desc: "Detak jantung di luar batas normal. Segera hubungi caretaker.",
      },
      spo2: {
        type: "spo2",
        title: "KADAR OKSIGEN DARAH RENDAH!",
        desc: "Kadar oksigen darah di bawah batas aman. Segera hubungi caretaker.",
      },
    }
    setEmergency(map[type])
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setVitals(prev => {
        const hr   = Math.max(45, Math.min(130, prev.hr + Math.round((Math.random() - 0.5) * 5)))
        const spo2 = Math.max(88, Math.min(100, prev.spo2 + Math.round((Math.random() - 0.5) * 2)))

        // Simulasi darurat acak (1% chance tiap tick)
        if (Math.random() < 0.01) {
          const emergencies = [
            { type: "fall",    title: "JATUH TERDETEKSI!", desc: "Sensor mendeteksi jatuh pada 09:42. Segera periksa kondisi Bapak Wirawan." },
            { type: "hr",      title: "DETAK JANTUNG KRITIS!", desc: `HR: ${hr} bpm — Di luar batas normal. Segera hubungi caretaker.` },
            { type: "spo2",    title: "SATURASI OKSIGEN RENDAH!", desc: `SpO2: ${spo2}% — Di bawah batas aman. Segera hubungi caretaker.` },
          ]
          setEmergency(emergencies[Math.floor(Math.random() * emergencies.length)])
        }

        const postures = ["Duduk", "Berdiri", "Berjalan", "Berbaring"]
        return {
          ...prev,
          hr,
          spo2,
          accel:   parseFloat((Math.random() * 0.4).toFixed(2)),
          gyro:    parseFloat((Math.random() * 6).toFixed(1)),
          posture: Math.random() < 0.1 ? postures[Math.floor(Math.random() * postures.length)] : prev.posture,
        }
      })
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  return { vitals, emergency, dismissEmergency, triggerEmergency }
}
