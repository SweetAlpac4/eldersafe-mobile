import BigCard from "../components/BigCard"
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

const valueColor = {
  normal:  "var(--text)",
  warning: "#7a4a00",
  danger:  "var(--danger)",
}

export default function Vitals({ vitals }) {
  return (
    <div style={styles.wrap}>
      <div style={styles.pageHeader}>
        <div style={styles.pageTitle}>Tanda Vital</div>
        <div style={styles.liveRow}>
          <span style={styles.liveDot} />
          <span style={styles.liveText}>Langsung — diperbarui tiap 2 detik</span>
        </div>
      </div>

      <div style={styles.body}>
        <BigCard
          label="Detak Jantung"
          value={vitals.hr}
          unit="bpm"
          color={valueColor[getHrStatus(vitals.hr)]}
          note="Normal: 60 – 100 bpm"
        >
          <StatusBadge status={getHrStatus(vitals.hr)} />
        </BigCard>

        <BigCard
          label="Kadar Oksigen Darah"
          value={vitals.spo2}
          unit="%"
          color={valueColor[getSpo2Status(vitals.spo2)]}
          note="Normal: di atas 94%"
        >
          <StatusBadge status={getSpo2Status(vitals.spo2)} />
        </BigCard>

        <BigCard label="Postur Saat Ini">
          <div style={styles.posturVal}>{vitals.posture}</div>
          <div style={styles.posturNote}>Sensor MPU-6050</div>
        </BigCard>

        <div style={styles.sensorCard}>
          <div style={styles.sensorTitle}>DATA SENSOR RAW</div>
          <div style={styles.sensorRow}>
            <span style={styles.sensorLabel}>Akselerasi</span>
            <span style={styles.sensorVal}>{vitals.accel} g</span>
          </div>
          <div style={styles.sensorRow}>
            <span style={styles.sensorLabel}>Giroskop</span>
            <span style={styles.sensorVal}>{vitals.gyro} °/s</span>
          </div>
        </div>
      </div>
    </div>
  )
}

const styles = {
  wrap: { paddingBottom: "100px" },
  pageHeader: {
    background: "var(--surface)",
    borderBottom: "2px solid var(--border-dark)",
    padding: "20px",
  },
  pageTitle: {
    fontSize: "22px",
    fontWeight: "bold",
    color: "var(--text)",
    marginBottom: "6px",
  },
  liveRow: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
  },
  liveDot: {
    display: "inline-block",
    width: "8px",
    height: "8px",
    borderRadius: "50%",
    background: "var(--accent)",
    animation: "livePulse 1.5s infinite",
  },
  liveText: {
    fontFamily: "'Courier New', monospace",
    fontSize: "12px",
    color: "var(--text-faint)",
  },
  body: { padding: "16px 20px" },
  posturVal: {
    fontSize: "36px",
    fontWeight: "bold",
    color: "var(--text)",
    marginBottom: "4px",
  },
  posturNote: {
    fontFamily: "'Courier New', monospace",
    fontSize: "12px",
    color: "var(--text-faint)",
  },
  sensorCard: {
    background: "var(--surface)",
    border: "1px solid var(--border)",
    borderTop: "3px solid var(--border-dark)",
    padding: "20px",
  },
  sensorTitle: {
    fontFamily: "'Courier New', monospace",
    fontSize: "10px",
    letterSpacing: "2px",
    color: "var(--text-faint)",
    fontWeight: "bold",
    marginBottom: "12px",
  },
  sensorRow: {
    display: "flex",
    justifyContent: "space-between",
    padding: "12px 0",
    borderBottom: "1px solid var(--border)",
    fontSize: "15px",
  },
  sensorLabel: { color: "var(--text-muted)" },
  sensorVal: {
    fontFamily: "'Courier New', monospace",
    fontWeight: "bold",
    color: "var(--text)",
  },
}
