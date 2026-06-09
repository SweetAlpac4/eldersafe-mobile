const TABS = [
  { id: "home",     label: "Beranda"   },
  { id: "vitals",   label: "Vital"     },
  { id: "activity", label: "Aktivitas" },
  { id: "location", label: "Lokasi"    },
  { id: "chat",     label: "Chat"      },
]

export default function BottomNav({ active, onChange }) {
  return (
    <nav style={styles.nav}>
      {TABS.map((tab) => {
        const isActive = tab.id === active
        return (
          <button
            key={tab.id}
            onClick={() => onChange(tab.id)}
            style={{
              ...styles.btn,
              color:      isActive ? "var(--accent)" : "var(--text-faint)",
              borderTop:  isActive ? "2px solid var(--accent)" : "2px solid transparent",
              background: isActive ? "var(--accent-light)" : "transparent",
            }}
          >
            <span style={{
              ...styles.label,
              fontWeight: isActive ? "700" : "400",
            }}>
              {tab.label}
            </span>
          </button>
        )
      })}
    </nav>
  )
}

const styles = {
  nav: {
    position: "fixed",
    bottom: 0,
    left: "50%",
    transform: "translateX(-50%)",
    width: "100%",
    maxWidth: "430px",
    background: "var(--surface)",
    borderTop: "2px solid var(--border-dark)",
    display: "flex",
    zIndex: 100,
  },
  btn: {
    flex: 1,
    padding: "12px 4px 20px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    transition: "all 0.1s",
  },
  label: {
    fontSize: "11px",
    letterSpacing: "0.5px",
  },
}
