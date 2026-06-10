import { location, patient } from "../data/dummy"

export default function Location() {
  return (
    <div style={styles.wrap}>
      <div style={styles.topbar}>
        <div style={styles.pageTitle}>Lokasi</div>
        <div style={{
          ...styles.statusPill,
          color:      location.safe ? "var(--success)" : "var(--danger)",
          background: location.safe ? "var(--success-light)" : "var(--danger-light)",
          border:     `1px solid ${location.safe ? "#6ee7a0" : "#f87171"}`,
        }}>
          <span style={{
            ...styles.statusDot,
            background: location.safe ? "var(--success)" : "var(--danger)",
          }} />
          {location.safe ? "Area Aman" : "Di luar area"}
        </div>
      </div>

      <div style={styles.mapWrap}>
        <div style={styles.mapGrid} />
        <div style={styles.mapDot} />
        <div style={styles.mapTag}>{patient.room}</div>
      </div>

      <div style={styles.infoCard}>
        {[
          { label: "Alamat",         val: location.address },
          { label: "Terakhir Gerak", val: `Pukul ${location.lastMoved}` },
          { label: "Area Aman",      val: location.zone },
        ].map((r, i) => (
          <div key={i} style={{
            ...styles.row,
            borderBottom: i < 2 ? "1px solid var(--border)" : "none",
          }}>
            <span style={styles.rowLabel}>{r.label}</span>
            <span style={styles.rowVal}>{r.val}</span>
          </div>
        ))}
      </div>

      <div style={styles.noteCard}>
        Posisi diperkirakan berdasarkan sinyal perangkat ElderSafe.
        Akurasi dalam ruangan sekitar 3–5 meter.
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
  statusPill: {
    display: "flex",
    alignItems: "center",
    gap: "6px",
    fontSize: "12px",
    fontWeight: "700",
    padding: "6px 12px",
  },
  statusDot: {
    width: "7px",
    height: "7px",
    borderRadius: "50%",
    animation: "livePulse 2s infinite",
  },
  mapWrap: {
    position: "relative",
    height: "190px",
    background: "#e2ddd2",
    borderBottom: "1px solid var(--border-dark)",
    borderTop: "1px solid var(--border)",
    marginTop: "12px",
    overflow: "hidden",
  },
  mapGrid: {
    position: "absolute",
    inset: 0,
    backgroundImage: "linear-gradient(rgba(0,0,0,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.05) 1px, transparent 1px)",
    backgroundSize: "28px 28px",
  },
  mapDot: {
    position: "absolute",
    top: "50%", left: "52%",
    width: "14px", height: "14px",
    background: "var(--accent)",
    border: "3px solid #faf8f4",
    transform: "translate(-50%,-50%)",
    boxShadow: "0 0 0 8px rgba(61,107,74,0.15)",
  },
  mapTag: {
    position: "absolute",
    bottom: "12px", left: "12px",
    background: "var(--surface)",
    border: "1px solid var(--border-dark)",
    fontSize: "11px",
    fontWeight: "700",
    padding: "4px 10px",
    color: "var(--text-muted)",
  },
  infoCard: {
    background: "var(--surface)",
    borderTop: "1px solid var(--border)",
    borderBottom: "1px solid var(--border)",
    marginTop: "12px",
  },
  row: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    gap: "16px",
    padding: "14px 20px",
    fontSize: "14px",
  },
  rowLabel: {
    fontSize: "12px",
    fontWeight: "600",
    color: "var(--text-faint)",
    flexShrink: 0,
    paddingTop: "1px",
    textTransform: "uppercase",
    letterSpacing: "0.5px",
  },
  rowVal: {
    fontWeight: "600",
    color: "var(--text)",
    textAlign: "right",
    fontSize: "14px",
  },
  noteCard: {
    margin: "12px 20px 0",
    padding: "14px 16px",
    background: "var(--surface-2)",
    border: "1px solid var(--border)",
    fontSize: "13px",
    color: "var(--text-muted)",
    lineHeight: 1.7,
  },
}
