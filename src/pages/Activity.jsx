import { steps } from "../data/dummy"

export default function Activity() {
  const pct = Math.round((steps.today / steps.target) * 100)
  const maxHourly = Math.max(...steps.hourly)

  return (
    <div style={styles.wrap}>
      <div style={styles.topbar}>
        <div style={styles.pageTitle}>Aktivitas</div>
      </div>

      <div style={styles.card}>
        <div style={styles.cardLabel}>LANGKAH HARI INI</div>
        <div style={styles.bigNum}>{steps.today.toLocaleString("id-ID")}</div>
        <div style={styles.bigUnit}>langkah</div>
        <div style={styles.targetRow}>
          <span style={styles.targetText}>Target {steps.target.toLocaleString("id-ID")}</span>
          <span style={styles.pct}>{pct}%</span>
        </div>
        <div style={styles.track}>
          <div style={{ ...styles.fill, width: `${pct}%` }} />
        </div>
      </div>

      <div style={styles.card}>
        <div style={styles.cardLabel}>PER 3 JAM</div>
        <div style={styles.barChart}>
          {steps.hourly.map((v, i) => (
            <div key={i} style={styles.barCol}>
              <div style={styles.barTrack}>
                <div style={{
                  ...styles.barFill,
                  height: maxHourly > 0 ? `${Math.round((v / maxHourly) * 100)}%` : "0%",
                  background: v === maxHourly ? "var(--accent)" : "var(--border-dark)",
                }} />
              </div>
              <div style={styles.barLabel}>{i * 3}j</div>
            </div>
          ))}
        </div>
      </div>

      <div style={styles.statGrid}>
        {[
          { label: "Aktif",      val: "2j 14m" },
          { label: "Istirahat",  val: "5j 46m" },
          { label: "Tidur",      val: "7j 52m" },
        ].map((s, i) => (
          <div key={s.label} style={{
            ...styles.statBox,
            borderLeft: i > 0 ? "1px solid var(--border)" : "none",
          }}>
            <div style={styles.statLabel}>{s.label}</div>
            <div style={styles.statVal}>{s.val}</div>
          </div>
        ))}
      </div>

    </div>
  )
}

const styles = {
  wrap: { paddingBottom: "80px" },
  topbar: {
    padding: "20px",
    background: "var(--surface)",
    borderBottom: "1px solid var(--border-dark)",
  },
  pageTitle: {
    fontSize: "18px",
    fontWeight: "800",
    color: "var(--text)",
  },
  card: {
    background: "var(--surface)",
    borderTop: "1px solid var(--border)",
    borderBottom: "1px solid var(--border)",
    padding: "20px",
    marginTop: "12px",
  },
  cardLabel: {
    fontSize: "11px",
    fontWeight: "700",
    letterSpacing: "1px",
    color: "var(--text-faint)",
    marginBottom: "12px",
  },
  bigNum: {
    fontSize: "52px",
    fontWeight: "800",
    letterSpacing: "-2px",
    lineHeight: 1,
    color: "var(--text)",
  },
  bigUnit: {
    fontSize: "15px",
    color: "var(--text-muted)",
    marginBottom: "16px",
    marginTop: "4px",
  },
  targetRow: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "8px",
    fontSize: "13px",
  },
  targetText: { color: "var(--text-muted)" },
  pct: { fontWeight: "700", color: "var(--accent)" },
  track: {
    height: "8px",
    background: "var(--surface-2)",
    border: "1px solid var(--border)",
  },
  fill: {
    height: "100%",
    background: "var(--accent)",
    transition: "width 0.5s",
  },
  barChart: {
    display: "flex",
    gap: "6px",
    alignItems: "flex-end",
    height: "100px",
  },
  barCol: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    height: "100%",
    justifyContent: "flex-end",
    gap: "4px",
  },
  barTrack: {
    width: "100%",
    height: "80px",
    background: "var(--surface-2)",
    border: "1px solid var(--border)",
    display: "flex",
    alignItems: "flex-end",
  },
  barFill: {
    width: "100%",
    transition: "height 0.3s",
  },
  barLabel: {
    fontSize: "10px",
    color: "var(--text-faint)",
    fontWeight: "500",
  },
  statGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    background: "var(--surface)",
    borderTop: "1px solid var(--border)",
    borderBottom: "1px solid var(--border)",
    marginTop: "12px",
  },
  statBox: {
    padding: "18px 16px",
    textAlign: "center",
  },
  statLabel: {
    fontSize: "11px",
    fontWeight: "600",
    color: "var(--text-faint)",
    marginBottom: "8px",
    textTransform: "uppercase",
    letterSpacing: "0.5px",
  },
  statVal: {
    fontSize: "20px",
    fontWeight: "800",
    color: "var(--text)",
  },
}
