import { patient } from "../data/dummy"
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

const valColor = {
  normal:  "var(--text)",
  warning: "var(--warning)",
  danger:  "var(--danger)",
}

const statusBorderColor = {
  normal:  "var(--accent)",
  warning: "var(--warning)",
  danger:  "var(--danger)",
}

export default function Home({ vitals }) {
  const status = overallStatus(vitals.hr, vitals.spo2)

  const today = new Date().toLocaleDateString("id-ID", {
    weekday: "long", day: "numeric", month: "long", year: "numeric",
  })

  return (
    <div style={styles.wrap}>

      {/* Topbar */}
      <div style={styles.topbar}>
        <div>
          <div style={styles.appName}>ELDERSAFE</div>
          <div style={styles.date}>{today}</div>
        </div>
        <div style={styles.livePill}>
          <span style={styles.liveDot} />
          Live
        </div>
      </div>

      {/* Patient card */}
      <div style={{
        ...styles.patientCard,
        borderLeft: `4px solid ${statusBorderColor[status]}`,
      }}>
        <div style={styles.patientLeft}>
          <div style={styles.avatar}>
            {patient.name.split(" ").map(w => w[0]).join("").slice(0, 2)}
          </div>
          <div>
            <div style={styles.patientName}>{patient.name}</div>
            <div style={styles.patientSub}>{patient.age} Tahun · {patient.room}</div>
          </div>
        </div>
        <StatusBadge status={status} />
      </div>

      {/* Vital grid */}
      <div style={styles.sectionHeader}>
        <span style={styles.sectionTitle}>Tanda Vital</span>
        <span style={styles.sectionSub}>Diperbarui otomatis</span>
      </div>

      <div style={styles.vitalGrid}>
        <div style={styles.vitalCell}>
          <div style={styles.vitalLabel}>Detak Jantung</div>
          <div style={{
            ...styles.vitalNum,
            color: valColor[getHrStatus(vitals.hr)],
          }}>
            {vitals.hr}
          </div>
          <div style={styles.vitalUnit}>bpm</div>
        </div>
        <div style={{ ...styles.vitalCell, borderLeft: "1px solid var(--border)" }}>
          <div style={styles.vitalLabel}>Kadar O2 Darah</div>
          <div style={{
            ...styles.vitalNum,
            color: valColor[getSpo2Status(vitals.spo2)],
          }}>
            {vitals.spo2}
          </div>
          <div style={styles.vitalUnit}>%</div>
        </div>
        <div style={{
          ...styles.vitalCell,
          borderTop: "1px solid var(--border)",
          gridColumn: "span 2",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "16px 20px",
        }}>
          <div style={styles.vitalLabel}>Postur Saat Ini</div>
          <div style={{ fontSize: "18px", fontWeight: "700" }}>{vitals.posture}</div>
        </div>
      </div>

    </div>
  )
}

const styles = {
  wrap: { paddingBottom: "80px" },
  topbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "20px 20px 16px",
    background: "var(--surface)",
    borderBottom: "1px solid var(--border-dark)",
  },
  appName: {
    fontSize: "17px",
    fontWeight: "800",
    letterSpacing: "3px",
    color: "var(--text)",
    marginBottom: "3px",
  },
  date: {
    fontSize: "12px",
    color: "var(--text-faint)",
    fontWeight: "400",
  },
  livePill: {
    display: "flex",
    alignItems: "center",
    gap: "6px",
    fontSize: "12px",
    fontWeight: "600",
    color: "var(--accent)",
    background: "var(--accent-light)",
    padding: "6px 12px",
    border: "1px solid var(--accent)",
  },
  liveDot: {
    width: "7px",
    height: "7px",
    borderRadius: "50%",
    background: "var(--accent)",
    display: "inline-block",
    animation: "livePulse 1.5s infinite",
  },
  patientCard: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "16px 20px",
    background: "var(--surface)",
    borderBottom: "1px solid var(--border)",
    borderTop: "1px solid var(--border)",
    marginTop: "12px",
  },
  patientLeft: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
  },
  avatar: {
    width: "42px",
    height: "42px",
    background: "var(--accent)",
    color: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "14px",
    fontWeight: "700",
    flexShrink: 0,
  },
  patientName: {
    fontSize: "16px",
    fontWeight: "700",
    color: "var(--text)",
    marginBottom: "2px",
  },
  patientSub: {
    fontSize: "13px",
    color: "var(--text-muted)",
  },
  sectionHeader: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "16px 20px 10px",
  },
  sectionTitle: {
    fontSize: "14px",
    fontWeight: "700",
    color: "var(--text)",
  },
  sectionSub: {
    fontSize: "12px",
    color: "var(--text-faint)",
  },
  vitalGrid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    background: "var(--surface)",
    border: "1px solid var(--border-dark)",
    borderLeft: "none",
    borderRight: "none",
  },
  vitalCell: {
    padding: "20px",
  },
  vitalLabel: {
    fontSize: "12px",
    fontWeight: "500",
    color: "var(--text-faint)",
    marginBottom: "10px",
    textTransform: "uppercase",
    letterSpacing: "0.5px",
  },
  vitalNum: {
    fontSize: "44px",
    fontWeight: "800",
    lineHeight: 1,
    marginBottom: "4px",
    letterSpacing: "-1px",
  },
  vitalUnit: {
    fontSize: "13px",
    color: "var(--text-muted)",
    fontWeight: "500",
  },
}
