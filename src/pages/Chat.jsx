import { useState } from "react"
import { messages as initialMessages, patient } from "../data/dummy"

export default function Chat() {
  const [messages, setMessages] = useState(initialMessages)
  const [input, setInput]       = useState("")

  function send() {
    const text = input.trim()
    if (!text) return
    setMessages(prev => [...prev, {
      id:   prev.length + 1,
      from: "me",
      name: "Saya",
      text,
      time: new Date().toLocaleTimeString("id-ID", {
        hour: "2-digit", minute: "2-digit",
      }),
    }])
    setInput("")
  }

  function handleKey(e) {
    if (e.key === "Enter") send()
  }

  return (
    <div style={styles.wrap}>
      <div style={styles.header}>
        <div style={styles.avatar}>IS</div>
        <div style={styles.headerInfo}>
          <div style={styles.name}>Ibu Sari</div>
          <div style={styles.sub}>Caretaker · {patient.name}</div>
        </div>
        <div style={styles.onlineWrap}>
          <span style={styles.onlineDot} />
          <span style={styles.onlineText}>Online</span>
        </div>
      </div>

      <div style={styles.messages}>
        {messages.map((m) => {
          const isMe = m.from === "me"
          return (
            <div key={m.id} style={{
              ...styles.msgRow,
              justifyContent: isMe ? "flex-end" : "flex-start",
            }}>
              {!isMe && <div style={styles.msgAvatar}>IS</div>}
              <div style={{
                ...styles.bubble,
                background:  isMe ? "var(--accent-light)" : "var(--surface)",
                borderColor: isMe ? "var(--accent)" : "var(--border)",
                borderLeft:  isMe ? "1px solid var(--border)" : "3px solid var(--border-dark)",
                borderRight: isMe ? "3px solid var(--accent)" : "1px solid var(--border)",
              }}>
                <div style={styles.bubbleText}>{m.text}</div>
                <div style={styles.bubbleTime}>{m.time}</div>
              </div>
            </div>
          )
        })}
      </div>

      <div style={styles.inputWrap}>
        <input
          style={styles.input}
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={handleKey}
          placeholder="Ketik pesan..."
        />
        <button style={styles.sendBtn} onClick={send}>Kirim</button>
      </div>
    </div>
  )
}

const styles = {
  wrap: {
    display: "flex",
    flexDirection: "column",
    height: "100vh",
    paddingBottom: "148px",
  },
  header: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    padding: "16px 20px",
    background: "var(--surface)",
    borderBottom: "1px solid var(--border-dark)",
  },
  avatar: {
    width: "40px",
    height: "40px",
    background: "var(--accent)",
    color: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "13px",
    fontWeight: "700",
    flexShrink: 0,
  },
  headerInfo: { flex: 1 },
  name: {
    fontSize: "15px",
    fontWeight: "700",
    color: "var(--text)",
  },
  sub: {
    fontSize: "12px",
    color: "var(--text-faint)",
    marginTop: "1px",
  },
  onlineWrap: {
    display: "flex",
    alignItems: "center",
    gap: "5px",
  },
  onlineDot: {
    width: "7px",
    height: "7px",
    borderRadius: "50%",
    background: "var(--success)",
    animation: "livePulse 2s infinite",
  },
  onlineText: {
    fontSize: "12px",
    fontWeight: "600",
    color: "var(--success)",
  },
  messages: {
    flex: 1,
    overflowY: "auto",
    padding: "16px",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    background: "var(--bg)",
  },
  msgRow: {
    display: "flex",
    alignItems: "flex-end",
    gap: "8px",
  },
  msgAvatar: {
    width: "28px",
    height: "28px",
    background: "var(--accent)",
    color: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "10px",
    fontWeight: "700",
    flexShrink: 0,
  },
  bubble: {
    maxWidth: "75%",
    padding: "10px 14px",
    border: "1px solid",
    wordBreak: "break-word",
    overflowWrap: "break-word",
    whiteSpace: "pre-wrap",
  },
  bubbleText: {
    fontSize: "15px",
    color: "var(--text)",
    lineHeight: 1.5,
  },
  bubbleTime: {
    fontSize: "10px",
    color: "var(--text-faint)",
    marginTop: "5px",
    textAlign: "right",
    fontWeight: "500",
  },
  inputWrap: {
    display: "flex",
    background: "var(--surface)",
    borderTop: "1px solid var(--border-dark)",
    position: "fixed",
    bottom: "80px",
    left: "50%",
    transform: "translateX(-50%)",
    width: "100%",
    maxWidth: "430px",
  },
  input: {
    flex: 1,
    padding: "16px 20px",
    fontSize: "15px",
    color: "var(--text)",
    borderRight: "1px solid var(--border)",
  },
  sendBtn: {
    background: "var(--accent)",
    color: "#fff",
    fontSize: "13px",
    fontWeight: "700",
    padding: "16px 20px",
    flexShrink: 0,
    letterSpacing: "0.5px",
  },
}
