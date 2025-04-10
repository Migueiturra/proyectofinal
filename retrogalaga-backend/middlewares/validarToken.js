// middlewares/validarToken.js
import jwt from "jsonwebtoken";

export function validarToken(req, res, next) {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) {
    return res.status(401).json({ error: "Token no proporcionado" });
  }

  try {
    const decoded = jwt.verify(token, "secreto-supersecreto"); // Usa process.env.JWT_SECRET si lo tienes
    req.usuario = decoded; // Agrega el usuario decodificado a la solicitud
    next(); // Continúa hacia la siguiente función
  } catch (error) {
    return res.status(401).json({ error: "Token inválido o expirado" });
  }
}
