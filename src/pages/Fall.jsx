import { fallHistory } from "../data/dummy"
import StatusBadge from "../components/StatusBadge"

const totalJatuh = fallHistory.filter(f => f.status === "danger").length
const totalWaspada = fallHistory.filter(f => f.status === "warning").length
const totalAman = fallHistory.filter(f => f.status === "ok").length

export default function Fall() {
  return (
    <div style={styles.wrap}>
      <div style={styles.pageTitle}>Deteksi Jatuh</div>
      <div style={styles.subTitle}>7 hari terakhir</div>

      <div style={styles.statRow}>
        <div style={{ ...styles.statCard, borderTop: `4px solid #c0392b` }}>
          <div style={{ ...styles.statNum, color: "#c0392b" }}>{totalJatuh}</div>
          <div style={styles.statLabel}>Jatuh</div>
        </div>
        <div style={{ ...styles.statCard, borderTop: `4px solid #d35400` }}>
          <div style={{ ...styles.statNum, color: "#d35400" }}>{totalWaspada}</div>
          <div style={styles.statLabel}>Waspada</div>
        </div>
        <div style={{ ...styles.statCard, borderTop: `4px solid #27ae60` }}>
          <div style={{ ...styles.statNum, color: "#27ae60" }}>{totalAman}</div>
          <div style={styles.statLabel}>Aman</div>
        </div>
      </div>

      <div style={styles.listWrap}>
        {fallHistory.map((f, i) => (
          <div key={i} style={styles.item}>
            <div style={styles.itemLeft}>
              <div style={styles.itemDay}>{f.day}</div>
              <div style={styles.itemNote}>{f.note}</div>
            </div>
            <StatusBadge status={f.status === "ok" ? "normal" : f.status} />
          </div>
        ))}
      </div>

      <div style={styles.infoCard}>
        <div style={styles.infoTitle}>ℹ️ Cara Kerja</div>
        <div style={styles.infoText}>
          Deteksi jatuh menggunakan sensor MPU-6050 pada gelang ElderSafe.
          Ketika terdeteksi gerakan jatuh, notifikasi dikirim otomatis ke caretaker.
        </div>
      </div>
    </div>
  )
}

const styles = {
  wrap: { padding: "24px 20px 100px" },
  pageTitle: {
    fontSize: "26px",
    fontWeight: "800",
    color: "var(--text)",
    marginBottom: "4px",
  },
  subTitle: {
    fontSize: "14px",
    color: "var(--text-muted)",
    marginBottom: "20px",
  },
  statRow: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "10px",
    marginBottom: "20px",
  },
  statCard: {
    background: "var(--surface)",
    borderRadius: "var(--radius)",
    padding: "18px 12px",
    textAlign: "center",
    boxShadow: "var(--shadow)",
  },
  statNum: {
    fontSize: "44px",
    fontWeight: "800",
    lineHeight: 1,
    marginBottom: "6px",
  },
  statLabel: {
    fontSize: "13px",
    fontWeight: "600",
    color: "var(--text-muted)",
  },
  listWrap: {
    background: "var(--surface)",
    borderRadius: "var(--radius)",
    overflow: "hidden",
    boxShadow: "var(--shadow)",
    marginBottom: "16px",
  },
  item: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "16px 20px",
    borderBottom: "1px solid var(--border)",
  },
  itemLeft: { flex: 1 },
  itemDay: {
    fontSize: "16px",
    fontWeight: "700",
    color: "var(--text)",
    marginBottom: "3px",
  },
  itemNote: {
    fontSize: "13px",
    color: "var(--text-muted)",
  },
  infoCard: {
    background: "#e8f4fd",
    borderRadius: "var(--radius)",
    padding: "18px 20px",
  },
  infoTitle: {
    fontSize: "15px",
    fontWeight: "700",
    color: "#1a5276",
    marginBottom: "8px",
  },
  infoText: {
    fontSize: "14px",
    color: "#1a5276",
    lineHeight: 1.6,
  },
}
