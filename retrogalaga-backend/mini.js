// mini.js
import express from 'express';

const app = express();
app.use(express.json());

app.post("/test", (req, res) => {
  console.log("🧪 Recibido:", req.body);
  res.json({ ok: true });
});

app.listen(3000, () => console.log("🚀 Mini API en http://localhost:3000"));
