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

const valColor = {
  normal:  "var(--text)",
  warning: "var(--warning)",
  danger:  "var(--danger)",
}

export default function Vitals({ vitals }) {
  return (
    <div style={styles.wrap}>
      <div style={styles.topbar}>
        <div style={styles.pageTitle}>Tanda Vital</div>
        <div style={styles.liveRow}>
          <span style={styles.liveDot} />
          <span style={styles.liveText}>Langsung</span>
        </div>
      </div>

      {/* HR */}
      <div style={styles.bigCard}>
        <div style={styles.cardTop}>
          <span style={styles.cardLabel}>DETAK JANTUNG</span>
          <StatusBadge status={getHrStatus(vitals.hr)} />
        </div>
        <div style={{ ...styles.bigNum, color: valColor[getHrStatus(vitals.hr)] }}>
          {vitals.hr}
          <span style={styles.bigUnit}> bpm</span>
        </div>
        <div style={styles.cardNote}>Normal: 60 – 100 bpm</div>
      </div>

      {/* SpO2 */}
      <div style={styles.bigCard}>
        <div style={styles.cardTop}>
          <span style={styles.cardLabel}>KADAR OKSIGEN DARAH</span>
          <StatusBadge status={getSpo2Status(vitals.spo2)} />
        </div>
        <div style={{ ...styles.bigNum, color: valColor[getSpo2Status(vitals.spo2)] }}>
          {vitals.spo2}
          <span style={styles.bigUnit}> %</span>
        </div>
        <div style={styles.cardNote}>
          Kadar oksigen normal di atas 94%. Makin tinggi makin baik.
        </div>
      </div>

      {/* Postur + sensor */}
      <div style={styles.rowGrid}>
        <div style={styles.halfCard}>
          <div style={styles.cardLabel}>POSTUR</div>
          <div style={styles.halfVal}>{vitals.posture}</div>
        </div>
        <div style={{ ...styles.halfCard, borderLeft: "1px solid var(--border)" }}>
          <div style={styles.cardLabel}>AKSELERASI</div>
          <div style={styles.halfVal}>{vitals.accel} <span style={styles.halfUnit}>g</span></div>
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
    padding: "20px",
    background: "var(--surface)",
    borderBottom: "1px solid var(--border-dark)",
  },
  pageTitle: {
    fontSize: "18px",
    fontWeight: "800",
    color: "var(--text)",
  },
  liveRow: {
    display: "flex",
    alignItems: "center",
    gap: "6px",
  },
  liveDot: {
    display: "inline-block",
    width: "7px",
    height: "7px",
    borderRadius: "50%",
    background: "var(--accent)",
    animation: "livePulse 1.5s infinite",
  },
  liveText: {
    fontSize: "12px",
    fontWeight: "600",
    color: "var(--accent)",
  },
  bigCard: {
    background: "var(--surface)",
    borderBottom: "1px solid var(--border)",
    padding: "20px",
    marginTop: "12px",
    borderTop: "1px solid var(--border)",
  },
  cardTop: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: "12px",
  },
  cardLabel: {
    fontSize: "11px",
    fontWeight: "700",
    letterSpacing: "1px",
    color: "var(--text-faint)",
  },
  bigNum: {
    fontSize: "56px",
    fontWeight: "800",
    lineHeight: 1,
    letterSpacing: "-2px",
    marginBottom: "10px",
  },
  bigUnit: {
    fontSize: "22px",
    fontWeight: "600",
    letterSpacing: "0",
  },
  cardNote: {
    fontSize: "13px",
    color: "var(--text-muted)",
    paddingTop: "12px",
    borderTop: "1px solid var(--border)",
  },
  rowGrid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    background: "var(--surface)",
    borderTop: "1px solid var(--border)",
    borderBottom: "1px solid var(--border)",
    marginTop: "12px",
  },
  halfCard: {
    padding: "20px",
  },
  halfVal: {
    fontSize: "28px",
    fontWeight: "800",
    color: "var(--text)",
    marginTop: "10px",
  },
  halfUnit: {
    fontSize: "16px",
    fontWeight: "500",
    color: "var(--text-muted)",
  },
}
