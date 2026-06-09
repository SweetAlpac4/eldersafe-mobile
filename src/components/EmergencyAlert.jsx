export default function EmergencyAlert({ emergency, onDismiss }) {
  if (!emergency) return null

  return (
    <div style={styles.overlay}>
      <div style={styles.box}>
        <div style={styles.stripe} />
        <div style={styles.body}>
          <div style={styles.tag}>PERINGATAN DARURAT</div>
          <div style={styles.title}>{emergency.title}</div>
          <div style={styles.desc}>{emergency.desc}</div>
          <button style={styles.callBtn}>
            HUBUNGI CARETAKER SEKARANG
          </button>
          <button style={styles.dismissBtn} onClick={onDismiss}>
            Sudah Ditangani
          </button>
        </div>
      </div>
    </div>
  )
}

const styles = {
  overlay: {
    position: "fixed",
    inset: 0,
    background: "rgba(90,15,15,0.80)",
    zIndex: 999,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "24px",
    animation: "fadeIn 0.15s ease",
  },
  box: {
    background: "#f7f4ee",
    width: "100%",
    maxWidth: "360px",
    border: "2px solid #8b1a1a",
    animation: "shake 0.4s ease",
  },
  stripe: {
    height: "8px",
    background: "#8b1a1a",
  },
  body: {
    padding: "28px 24px",
  },
  tag: {
    fontSize: "11px",
    fontFamily: "'Courier New', monospace",
    letterSpacing: "2px",
    color: "#8b1a1a",
    fontWeight: "bold",
    marginBottom: "12px",
  },
  title: {
    fontSize: "20px",
    fontWeight: "bold",
    color: "#8b1a1a",
    marginBottom: "12px",
    lineHeight: 1.3,
  },
  desc: {
    fontSize: "14px",
    color: "#4a4438",
    marginBottom: "24px",
    lineHeight: 1.7,
    borderLeft: "3px solid #8b1a1a",
    paddingLeft: "12px",
  },
  callBtn: {
    display: "block",
    width: "100%",
    padding: "16px",
    background: "#8b1a1a",
    color: "#f7f4ee",
    fontSize: "13px",
    fontFamily: "'Courier New', monospace",
    fontWeight: "bold",
    letterSpacing: "1.5px",
    marginBottom: "8px",
    animation: "dangerPulse 1.5s infinite",
  },
  dismissBtn: {
    display: "block",
    width: "100%",
    padding: "12px",
    background: "transparent",
    color: "#8a8070",
    fontSize: "13px",
    borderTop: "1px solid #c8c2b4",
    marginTop: "4px",
  },
}
