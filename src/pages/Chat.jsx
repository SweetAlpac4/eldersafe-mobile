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
      time: new Date().toLocaleTimeString("id-ID", { hour: "2-digit", minute: "2-digit" }),
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
        <div>
          <div style={styles.name}>Ibu Sari (Caretaker)</div>
          <div style={styles.sub}>Caretaker {patient.name}</div>
        </div>
        <div style={styles.onlineDot} />
      </div>

      <div style={styles.messages}>
        {messages.map((m) => {
          const isMe = m.from === "me"
          return (
            <div key={m.id} style={{
              ...styles.msgRow,
              justifyContent: isMe ? "flex-end" : "flex-start",
            }}>
              <div style={{
                ...styles.bubble,
                background: isMe ? "var(--chat-me)" : "var(--chat-other)",
                borderBottomRightRadius: isMe ? "4px" : "var(--radius-sm)",
                borderBottomLeftRadius:  isMe ? "var(--radius-sm)" : "4px",
                boxShadow: "var(--shadow-sm)",
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
        <button style={styles.sendBtn} onClick={send}>
          Kirim
        </button>
      </div>
    </div>
  )
}

const styles = {
  wrap: {
    display: "flex",
    flexDirection: "column",
    height: "100vh",
    paddingBottom: "80px",
  },
  header: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    padding: "16px 20px",
    background: "var(--surface)",
    borderBottom: "1px solid var(--border)",
    boxShadow: "var(--shadow-sm)",
    position: "sticky",
    top: 0,
    zIndex: 10,
  },
  avatar: {
    width: "42px",
    height: "42px",
    borderRadius: "50%",
    background: "var(--accent)",
    color: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "15px",
    fontWeight: "700",
    flexShrink: 0,
  },
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
  onlineDot: {
    width: "10px",
    height: "10px",
    borderRadius: "50%",
    background: "var(--success)",
    marginLeft: "auto",
    flexShrink: 0,
    animation: "livePulse 2s infinite",
  },
  messages: {
    flex: 1,
    overflowY: "auto",
    padding: "16px 16px 8px",
    display: "flex",
    flexDirection: "column",
    gap: "8px",
  },
  msgRow: {
    display: "flex",
  },
  bubble: {
    maxWidth: "78%",
    padding: "10px 14px",
    border: "1px solid var(--border)",
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
    fontSize: "11px",
    color: "var(--text-faint)",
    marginTop: "4px",
    textAlign: "right",
  },
  inputWrap: {
    display: "flex",
    gap: "8px",
    padding: "12px 16px",
    background: "var(--surface)",
    borderTop: "1px solid var(--border)",
    position: "fixed",
    bottom: "80px",
    left: "50%",
    transform: "translateX(-50%)",
    width: "100%",
    maxWidth: "430px",
  },
  input: {
    flex: 1,
    background: "var(--surface-2)",
    borderRadius: "100px",
    padding: "12px 18px",
    fontSize: "15px",
    color: "var(--text)",
    border: "1px solid var(--border)",
  },
  sendBtn: {
    background: "var(--accent)",
    color: "#fff",
    fontSize: "14px",
    fontWeight: "700",
    padding: "12px 18px",
    borderRadius: "100px",
    flexShrink: 0,
  },
}

