import { steps } from "../data/dummy"

export default function Activity() {
  const pct = Math.round((steps.today / steps.target) * 100)
  const maxHourly = Math.max(...steps.hourly)

  return (
    <div style={styles.wrap}>
      <div style={styles.pageHeader}>
        <div style={styles.pageTitle}>Aktivitas</div>
      </div>

      <div style={styles.body}>
        <div style={styles.card}>
          <div style={styles.cardTitle}>LANGKAH HARI INI</div>
          <div style={styles.bigNum}>{steps.today.toLocaleString("id-ID")}</div>
          <div style={styles.bigUnit}>langkah</div>
          <div style={styles.targetRow}>
            <span style={styles.targetText}>
              Target {steps.target.toLocaleString("id-ID")} langkah
            </span>
            <span style={styles.pctText}>{pct}%</span>
          </div>
          <div style={styles.track}>
            <div style={{ ...styles.fill, width: `${pct}%` }} />
          </div>
        </div>

        <div style={styles.card}>
          <div style={styles.cardTitle}>DISTRIBUSI PER 3 JAM</div>
          <div style={styles.barChart}>
            {steps.hourly.map((v, i) => (
              <div key={i} style={styles.barCol}>
                <div style={styles.barValLabel}>{v > 0 ? v : ""}</div>
                <div style={styles.barTrack}>
                  <div style={{
                    ...styles.barFill,
                    height: maxHourly > 0
                      ? `${Math.round((v / maxHourly) * 100)}%`
                      : "0%",
                    background: v === maxHourly
                      ? "var(--accent)"
                      : "var(--border-dark)",
                  }} />
                </div>
                <div style={styles.barTimeLabel}>{i * 3}j</div>
              </div>
            ))}
          </div>
        </div>

        <div style={styles.statGrid}>
          {[
            { label: "Waktu Aktif",    val: "2j 14m" },
            { label: "Istirahat",      val: "5j 46m" },
            { label: "Tidur",          val: "7j 52m" },
          ].map((s) => (
            <div key={s.label} style={styles.statBox}>
              <div style={styles.statLabel}>{s.label}</div>
              <div style={styles.statVal}>{s.val}</div>
            </div>
          ))}
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
  },
  body: { padding: "16px 20px" },
  card: {
    background: "var(--surface)",
    border: "1px solid var(--border)",
    borderTop: "3px solid var(--border-dark)",
    padding: "20px",
    marginBottom: "12px",
  },
  cardTitle: {
    fontFamily: "'Courier New', monospace",
    fontSize: "10px",
    letterSpacing: "2px",
    color: "var(--text-faint)",
    fontWeight: "bold",
    marginBottom: "12px",
  },
  bigNum: {
    fontSize: "52px",
    fontWeight: "bold",
    color: "var(--text)",
    letterSpacing: "-2px",
    lineHeight: 1,
  },
  bigUnit: {
    fontSize: "16px",
    color: "var(--text-muted)",
    marginBottom: "16px",
    marginTop: "4px",
  },
  targetRow: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "8px",
  },
  targetText: {
    fontSize: "13px",
    color: "var(--text-muted)",
  },
  pctText: {
    fontFamily: "'Courier New', monospace",
    fontSize: "13px",
    fontWeight: "bold",
    color: "var(--accent)",
  },
  track: {
    height: "10px",
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
    height: "140px",
    alignItems: "flex-end",
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
  barValLabel: {
    fontFamily: "'Courier New', monospace",
    fontSize: "9px",
    color: "var(--text-faint)",
    minHeight: "12px",
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
  barTimeLabel: {
    fontFamily: "'Courier New', monospace",
    fontSize: "9px",
    color: "var(--text-faint)",
  },
  statGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    border: "1px solid var(--border)",
    borderTop: "3px solid var(--border-dark)",
    background: "var(--surface)",
  },
  statBox: {
    padding: "16px 12px",
    textAlign: "center",
    borderRight: "1px solid var(--border)",
  },
  statLabel: {
    fontFamily: "'Courier New', monospace",
    fontSize: "10px",
    letterSpacing: "1px",
    color: "var(--text-faint)",
    marginBottom: "8px",
  },
  statVal: {
    fontSize: "20px",
    fontWeight: "bold",
    color: "var(--text)",
  },
}
