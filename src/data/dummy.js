export const patient = {
  id: "p001",
  name: "Bapak Wirawan",
  age: 72,
  room: "Kamar 1",
  caretaker: "Dewi",
  status: "normal",
}

export const vitals = {
  hr: 78,
  spo2: 97,
  accel: 0.12,
  gyro: 2.4,
  posture: "Duduk",
}

export const steps = {
  today: 1842,
  target: 3000,
  hourly: [0, 0, 12, 487, 623, 401, 284, 35],
}

export const fallHistory = [
  { day: "Hari ini",    status: "ok",      note: "Tidak ada insiden" },
  { day: "Kemarin",     status: "ok",      note: "Tidak ada insiden" },
  { day: "3 hari lalu", status: "warning", note: "Gerakan tiba-tiba terdeteksi" },
  { day: "5 hari lalu", status: "danger",  note: "Jatuh terdeteksi — 07:23" },
  { day: "6 hari lalu", status: "ok",      note: "Tidak ada insiden" },
  { day: "7 hari lalu", status: "ok",      note: "Tidak ada insiden" },
]

export const device = {
  battery: 72,
  wifi: -58,
  firebase: true,
  lastSync: "08:45",
}

export const location = {
  address: "Jl. Melati No. 14, Kabanjahe",
  area: "Di dalam area aman",
  safe: true,
  lastMoved: "08:34",
  zone: "Rumah & sekitarnya (radius 200m)",
  lat: 3.0985,
  lng: 98.4966,
}

export const messages = [
  { id: 1, from: "caretaker", name: "Ibu Sari",  text: "Selamat pagi, kondisi Bapak hari ini baik.", time: "07:10" },
  { id: 2, from: "me",        name: "Saya",       text: "Alhamdulillah, terima kasih Bu Sari.", time: "07:15" },
  { id: 3, from: "caretaker", name: "Ibu Sari",  text: "Tadi pagi sudah makan dan minum obat.", time: "08:00" },
  { id: 4, from: "me",        name: "Saya",       text: "Baik, tolong pantau terus ya Bu.", time: "08:05" },
  { id: 5, from: "caretaker", name: "Ibu Sari",  text: "Siap, akan saya pantau terus.", time: "08:06" },
]
