import {patient} from "../data/dummy"
import StatusBadge from "../components/StatusBadge"

function getHrStatus(hr) {
  if (hr < 60 || hr > 100) return "danger"
  if (hr > 90) return "warning"
  return "normal"
}

function getSpo2Status(spo2) {
  if (spo2 < 94) return "danger"
  if (spo2 < 96) return "warning"
  return "normal"
}

function overallStatus(hr, spo2) {
  if (getHrStatus(hr) === "danger" || getSpo2Status(spo2) === "danger") return "danger"
  if (getHrStatus(hr) === "warning" || getSpo2Status(spo2) === "warning") return "warning"
  return "normal"
}

export default function Home({ vitals }) {
  const status = overallStatus(vitals.hr, vitals.spo2)

  const now = new Date().toLocaleDateString("id-ID", {
    weekday: "long", day: "numeric", month: "long", year: "numeric",
  })

  const borderColor = {
    normal:  "var(--accent)",
    warning: "#c89040",
    danger:  "var(--danger)",
  }

  return (
    <div style={styles.wrap}>

      <div style={styles.header}>
        <div style={styles.headerTop}>
          <div>
            <div style={styles.appName}>ELDERSAFE</div>
            <div style={styles.date}>{now}</div>
          </div>
          <div style={styles.battBox}>
            <span style={styles.battLabel}>BATERAI</span>
            <span style={styles.battVal}>72%</span>
          </div>
        </div>
      </div>

      <div style={{
        ...styles.patientCard,
        borderTop: `4px solid ${borderColor[status]}`,
      }}>
        <div style={styles.patientRow}>
          <div style={styles.avatar}>
            {patient.name.split(" ").map(w => w[0]).join("").slice(0, 2)}
          </div>
          <div style={styles.patientInfo}>
            <div style={styles.patientName}>{patient.name}</div>
            <div style={styles.patientSub}>{patient.age} Tahun — {patient.room}</div>
          </div>
          <StatusBadge status={status} />
        </div>
      </div>

      <div style={styles.sectionLabel}>TANDA VITAL SEKARANG</div>
      <div style={styles.vitalGrid}>
        <div style={styles.vitalBox}>
          <div style={styles.vitalLabel}>Detak Jantung</div>
          <div style={{
            ...styles.vitalVal,
            color: { normal: "var(--text)", warning: "#7a4a00", danger: "var(--danger)" }[getHrStatus(vitals.hr)],
          }}>
            {vitals.hr}
          </div>
          <div style={styles.vitalUnit}>bpm</div>
        </div>
        <div style={styles.vitalBox}>
          <div style={styles.vitalLabel}>Saturasi O2</div>
          <div style={{
            ...styles.vitalVal,
            color: { normal: "var(--text)", warning: "#7a4a00", danger: "var(--danger)" }[getSpo2Status(vitals.spo2)],
          }}>
            {vitals.spo2}
          </div>
          <div style={styles.vitalUnit}>%</div>
        </div>
        <div style={styles.vitalBox}>
          <div style={styles.vitalLabel}>Postur</div>
          <div style={{ ...styles.vitalVal, fontSize: "22px" }}>{vitals.posture}</div>
          <div style={styles.vitalUnit}>saat ini</div>
        </div>
      </div>

    </div>
  )
}

const styles = {
  wrap: { padding: "0 0 100px" },
  header: {
    background: "var(--surface)",
    borderBottom: "2px solid var(--border-dark)",
    padding: "20px",
    marginBottom: "0",
  },
  headerTop: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  appName: {
    fontFamily: "'Courier New', monospace",
    fontSize: "18px",
    fontWeight: "bold",
    letterSpacing: "4px",
    color: "var(--text)",
    marginBottom: "4px",
  },
  date: {
    fontSize: "13px",
    color: "var(--text-faint)",
  },
  battBox: {
    border: "1px solid var(--border-dark)",
    padding: "6px 12px",
    textAlign: "center",
  },
  battLabel: {
    display: "block",
    fontFamily: "'Courier New', monospace",
    fontSize: "9px",
    letterSpacing: "1.5px",
    color: "var(--text-faint)",
    marginBottom: "2px",
  },
  battVal: {
    display: "block",
    fontSize: "16px",
    fontWeight: "bold",
    color: "var(--text)",
  },
  patientCard: {
    background: "var(--surface)",
    borderLeft: "none",
    borderRight: "none",
    borderBottom: "1px solid var(--border)",
    padding: "16px 20px",
    marginBottom: "0",
  },
  patientRow: {
    display: "flex",
    alignItems: "center",
    gap: "14px",
  },
  avatar: {
    width: "44px",
    height: "44px",
    background: "var(--accent)",
    color: "#f7f4ee",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "15px",
    fontWeight: "bold",
    flexShrink: 0,
    fontFamily: "'Courier New', monospace",
  },
  patientInfo: { flex: 1 },
  patientName: {
    fontSize: "17px",
    fontWeight: "bold",
    color: "var(--text)",
  },
  patientSub: {
    fontSize: "13px",
    color: "var(--text-muted)",
    marginTop: "2px",
  },
  sectionLabel: {
    fontFamily: "'Courier New', monospace",
    fontSize: "10px",
    letterSpacing: "2px",
    color: "var(--text-faint)",
    fontWeight: "bold",
    padding: "16px 20px 8px",
    borderBottom: "1px solid var(--border)",
  },
  vitalGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    borderBottom: "1px solid var(--border)",
  },
  vitalBox: {
    padding: "16px 12px",
    textAlign: "center",
    borderRight: "1px solid var(--border)",
    background: "var(--surface)",
  },
  vitalLabel: {
    fontFamily: "'Courier New', monospace",
    fontSize: "10px",
    letterSpacing: "1px",
    color: "var(--text-faint)",
    marginBottom: "8px",
  },
  vitalVal: {
    fontSize: "32px",
    fontWeight: "bold",
    lineHeight: 1,
    marginBottom: "4px",
  },
  vitalUnit: {
    fontSize: "12px",
    color: "var(--text-muted)",
  },
}
