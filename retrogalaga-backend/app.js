import express from "express";
import cors from "cors";
import morgan from "morgan";

import usuariosRoutes from "./routes/usuarios.routes.js";
import loginRoutes from "./routes/login.routes.js";

const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

console.log("✅ Cargando rutas...");
app.use("/api/usuarios", usuariosRoutes);
app.use("/api/login", loginRoutes);

app.get("/", (req, res) => {
  res.send("API RetroGalaga funcionando");
});

export default app;
