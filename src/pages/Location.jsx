import { location, patient } from "../data/dummy"

export default function Location() {
  return (
    <div style={styles.wrap}>
      <div style={styles.pageHeader}>
        <div style={styles.pageTitle}>Lokasi</div>
        <div style={{
          ...styles.statusRow,
          color: location.safe ? "var(--success)" : "var(--danger)",
        }}>
          <span style={{
            ...styles.statusDot,
            background: location.safe ? "var(--success)" : "var(--danger)",
          }} />
          {location.safe ? "Berada di area aman" : "Di luar area aman"}
        </div>
      </div>

      <div style={styles.mapWrap}>
        <div style={styles.mapGrid} />
        <div style={styles.mapDot} />
        <div style={styles.mapRoomTag}>{patient.room}</div>
      </div>

      <div style={styles.body}>
        <div style={styles.card}>
          <div style={styles.row}>
            <span style={styles.rowLabel}>Alamat</span>
            <span style={styles.rowVal}>{location.address}</span>
          </div>
          <div style={styles.row}>
            <span style={styles.rowLabel}>Terakhir Bergerak</span>
            <span style={styles.rowVal}>Pukul {location.lastMoved}</span>
          </div>
          <div style={styles.row}>
            <span style={styles.rowLabel}>Area Aman</span>
            <span style={styles.rowVal}>{location.zone}</span>
          </div>
        </div>

        <div style={styles.noteCard}>
          Posisi diperkirakan berdasarkan sinyal perangkat ElderSafe.
          Akurasi dalam ruangan sekitar 3–5 meter.
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
    marginBottom: "8px",
  },
  statusRow: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    fontSize: "14px",
    fontWeight: "bold",
  },
  statusDot: {
    width: "8px",
    height: "8px",
    borderRadius: "50%",
    flexShrink: 0,
    animation: "livePulse 2s infinite",
  },
  mapWrap: {
    position: "relative",
    height: "200px",
    background: "#e4dfd4",
    borderBottom: "2px solid var(--border-dark)",
    overflow: "hidden",
  },
  mapGrid: {
    position: "absolute",
    inset: 0,
    backgroundImage: "linear-gradient(rgba(0,0,0,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.06) 1px, transparent 1px)",
    backgroundSize: "28px 28px",
  },
  mapDot: {
    position: "absolute",
    top: "50%", left: "52%",
    width: "14px", height: "14px",
    background: "var(--accent)",
    border: "3px solid #f7f4ee",
    transform: "translate(-50%,-50%)",
    boxShadow: "0 0 0 6px rgba(58,90,64,0.2)",
  },
  mapRoomTag: {
    position: "absolute",
    bottom: "12px", left: "12px",
    background: "var(--surface)",
    border: "1px solid var(--border-dark)",
    fontFamily: "'Courier New', monospace",
    fontSize: "11px",
    fontWeight: "bold",
    padding: "4px 10px",
    color: "var(--text-muted)",
  },
  body: { padding: "16px 20px" },
  card: {
    background: "var(--surface)",
    border: "1px solid var(--border)",
    borderTop: "3px solid var(--border-dark)",
    marginBottom: "12px",
  },
  row: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    gap: "16px",
    padding: "14px 16px",
    borderBottom: "1px solid var(--border)",
    fontSize: "14px",
  },
  rowLabel: {
    color: "var(--text-faint)",
    fontFamily: "'Courier New', monospace",
    fontSize: "12px",
    flexShrink: 0,
    paddingTop: "2px",
  },
  rowVal: {
    fontWeight: "bold",
    color: "var(--text)",
    textAlign: "right",
  },
  noteCard: {
    background: "var(--surface-2)",
    border: "1px solid var(--border)",
    padding: "14px 16px",
    fontSize: "13px",
    color: "var(--text-muted)",
    lineHeight: 1.7,
    fontStyle: "italic",
  },
}
