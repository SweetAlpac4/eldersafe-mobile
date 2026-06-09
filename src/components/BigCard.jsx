export default function BigCard({ label, value, unit, color, note, children }) {
  return (
    <div style={styles.card}>
      <div style={styles.label}>{label}</div>
      {value !== undefined && (
        <div style={styles.valueRow}>
          <span style={{ ...styles.value, color: color || "var(--text)" }}>
            {value}
          </span>
          {unit && <span style={styles.unit}>{unit}</span>}
        </div>
      )}
      {children}
      {note && <div style={styles.note}>{note}</div>}
    </div>
  )
}

const styles = {
  card: {
    background: "var(--surface)",
    border: "1px solid var(--border)",
    borderTop: "3px solid var(--border-dark)",
    padding: "20px",
    marginBottom: "12px",
  },
  label: {
    fontSize: "11px",
    fontFamily: "'Courier New', monospace",
    letterSpacing: "2px",
    color: "var(--text-faint)",
    fontWeight: "bold",
    marginBottom: "12px",
    textTransform: "uppercase",
  },
  valueRow: {
    display: "flex",
    alignItems: "baseline",
    gap: "6px",
    marginBottom: "10px",
  },
  value: {
    fontSize: "48px",
    fontWeight: "bold",
    lineHeight: 1,
    letterSpacing: "-1px",
  },
  unit: {
    fontSize: "18px",
    color: "var(--text-muted)",
  },
  note: {
    fontSize: "13px",
    color: "var(--text-muted)",
    marginTop: "12px",
    paddingTop: "12px",
    borderTop: "1px solid var(--border)",
    fontFamily: "'Courier New', monospace",
  },
}
