const map = {
  normal:  { label: "Normal",  color: "#14532d", bg: "#dcfce7", border: "#6ee7a0" },
  warning: { label: "Waspada", color: "#92400e", bg: "#fef3c7", border: "#fbbf24" },
  danger:  { label: "Bahaya",  color: "#9b1c1c", bg: "#fce8e8", border: "#f87171" },
}

export default function StatusBadge({ status }) {
  const s = map[status] || map.normal
  return (
    <span style={{
      display: "inline-block",
      fontSize: "11px",
      fontWeight: "700",
      letterSpacing: "1px",
      padding: "4px 10px",
      color: s.color,
      background: s.bg,
      border: `1px solid ${s.border}`,
      textTransform: "uppercase",
    }}>
      {s.label}
    </span>
  )
}
