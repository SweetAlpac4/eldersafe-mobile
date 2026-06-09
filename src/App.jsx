import { useState } from "react"
import { useVitals } from "./hooks/useVitals"
import BottomNav from "./components/BottomNav"
import EmergencyAlert from "./components/EmergencyAlert"
import Home from "./pages/Home"
import Vitals from "./pages/Vitals"
import Activity from "./pages/Activity"
import Location from "./pages/Location"
import Chat from "./pages/Chat"

export default function App() {
  const [active, setActive]             = useState("home")
  const { vitals, emergency, dismissEmergency, triggerEmergency } = useVitals()

  const pages = {
    home:     <Home vitals={vitals} />,
    vitals:   <Vitals vitals={vitals} />,
    activity: <Activity />,
    location: <Location />,
    chat:     <Chat />,
  }

function triggerTest(type) {
    triggerEmergency(type)
  }

  return (
    <div style={styles.app}>
      <EmergencyAlert emergency={emergency} onDismiss={dismissEmergency} />

      {/* TOMBOL TEST — hapus sebelum production */}
      <div style={styles.testBar} className="test-bar">
        <button
          style={styles.testBtn}
          onClick={() => triggerTest("fall")}
        >
          Jatuh
        </button>
        <button
          style={styles.testBtn}
          onClick={() => triggerTest("hr")}
        >
          HR Kritis
        </button>
        <button
          style={styles.testBtn}
          onClick={() => triggerTest("spo2")}
        >
          O2 Rendah
        </button>
      </div>
      <div style={styles.content}>
        {pages[active]}
      </div>
      <BottomNav active={active} onChange={setActive} />
    </div>
  )
}

const styles = {
  app: {
    minHeight: "100vh",
    background: "var(--bg)",
    position: "relative",
  },
  content: {
    minHeight: "100vh",
  },
  testBar: {
    position: "fixed",
    top: "0",
    right: "0",
    display: "flex",
    flexDirection: "column",
    gap: "4px",
    padding: "8px",
    zIndex: 998,
    opacity: "0.15",
    transition: "opacity 0.2s",
  },
  testBtn: {
    background: "#1a1712",
    color: "#f7f4ee",
    fontFamily: "'Courier New', monospace",
    fontSize: "10px",
    padding: "6px 10px",
    letterSpacing: "1px",
    cursor: "pointer",
  },
}
