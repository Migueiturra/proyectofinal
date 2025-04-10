import { Router } from "express";
import db from "../models/index.js";
import bcrypt from "bcrypt";
import { validarToken } from "../middlewares/validarToken.js"; // 👈 importar


console.log("📦 Archivo usuarios.routes.js cargado correctamente");

const router = Router();
const { Usuario } = db;

router.get("/perfil", validarToken, async (req, res) => {
  try {
    const usuario = await Usuario.findByPk(req.usuario.id, {
      attributes: ["id", "nombre", "email", "apellidos", "pais"]
    });

    if (!usuario) {
      return res.status(404).json({ error: "Usuario no encontrado" });
    }

    res.json({ mensaje: "Perfil accedido correctamente", usuario });
  } catch (error) {
    console.error("❌ Error al obtener perfil:", error);
    res.status(500).json({ error: "Error interno al acceder al perfil" });
  }
});

router.get("/", async (req, res) => {
  try {
    const usuarios = await Usuario.findAll();
    res.json(usuarios);
  } catch (error) {
    console.error("Error al obtener usuarios:", error);
    res.status(500).json({ error: "Error al obtener los usuarios" });
  }
});

router.post("/", async (req, res) => {
  console.log("✅ POST recibido en /api/usuarios");
  console.log("📦 Body completo:", req.body);

  const {
    nombre,
    apellidos,
    email,
    password,
    fecha_nacimiento,
    telefono,
    direccion,
    pais,
  } = req.body;

  try {
    if (!nombre || !email || !password) {
      return res.status(400).json({ error: "Faltan campos requeridos" });
    }

    const existente = await Usuario.findOne({ where: { email } });
    if (existente) {
      return res.status(409).json({ error: "El correo ya está registrado" });
    }

    const passwordHasheado = await bcrypt.hash(password, 10);

    const nuevoUsuario = await Usuario.create({
      nombre,
      apellidos,
      email,
      password: passwordHasheado,
      fecha_nacimiento,
      telefono,
      direccion,
      pais,
      creado_en: new Date(),
    });

    res.status(201).json({ mensaje: "Usuario creado", usuario: nuevoUsuario });
  } catch (error) {
    console.error("❌ Error al crear usuario:", error);
    res.status(500).json({ error: "No se pudo crear el usuario" });
  }
});

export default router;
