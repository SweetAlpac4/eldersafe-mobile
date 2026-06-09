const map = {
  normal:  { label: "Normal",  color: "#1a4a28", bg: "#e0ece4", border: "#6aaa80" },
  warning: { label: "Waspada", color: "#7a4a00", bg: "#faf0d8", border: "#c89040" },
  danger:  { label: "Bahaya",  color: "#8b1a1a", bg: "#f5e8e8", border: "#c06060" },
}

export default function StatusBadge({ status }) {
  const s = map[status] || map.normal
  return (
    <span style={{
      display: "inline-block",
      fontSize: "11px",
      fontFamily: "'Courier New', monospace",
      fontWeight: "bold",
      letterSpacing: "1.5px",
      padding: "3px 10px",
      color: s.color,
      background: s.bg,
      border: `1px solid ${s.border}`,
    }}>
      {s.label.toUpperCase()}
    </span>
  )
}
