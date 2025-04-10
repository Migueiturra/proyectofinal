import { Router } from "express";
import db from "../models/index.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const router = Router();
const { Usuario } = db;

router.post("/", async (req, res) => {
  const { email, password } = req.body;

  console.log("📨 Body recibido:", req.body);
  console.log("📩 Email recibido:", email);
  console.log("🔒 Password recibido:", password);

  // Verificamos que ambos campos existan
  if (!email || !password) {
    console.log("⚠️ Email o password faltan");
    return res.status(400).json({ error: "Faltan campos requeridos" });
  }

  try {
    const usuario = await Usuario.findOne({ where: { email } });

    if (!usuario) {
      console.log("🚫 Usuario no encontrado");
      return res.status(401).json({ error: "Usuario no encontrado" });
    }

    console.log("🔐 Password en DB:", usuario.password);

    // Verifica que el password de la DB exista
    if (!usuario.password) {
      console.log("⚠️ El usuario no tiene contraseña en la base de datos");
      return res.status(500).json({ error: "Contraseña inválida en base de datos" });
    }

    const esValida = await bcrypt.compare(password, usuario.password);
    console.log("✅ Contraseña válida:", esValida);

    if (!esValida) {
      return res.status(401).json({ error: "Contraseña incorrecta" });
    }

    const token = jwt.sign(
      { id: usuario.id, email: usuario.email },
      "secreto-supersecreto", // Reemplaza esto con process.env.JWT_SECRET si usas dotenv
      { expiresIn: "1h" }
    );

    return res.json({
      mensaje: "Login exitoso",
      token,
      usuario: {
        id: usuario.id,
        nombre: usuario.nombre,
        email: usuario.email,
      },
    });
  } catch (error) {
    console.error("❌ Error en login:", error);
    return res.status(500).json({ error: "Error al intentar iniciar sesión" });
  }
});

export default router;
