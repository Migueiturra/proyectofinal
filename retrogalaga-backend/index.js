// index.js
import app from "./app.js";
import { conectarDB } from "./models/index.js";

const PORT = process.env.PORT || 3000;

// 👇 Agrega este console.log para saber si se ejecuta
console.log("🚀 App cargada");

conectarDB();

app.listen(PORT, () => {
  console.log(`✅ API RetroGalaga funcionando en http://localhost:${PORT}`);
});
