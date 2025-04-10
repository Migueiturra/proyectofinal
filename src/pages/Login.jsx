import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "./Login.css";

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [credenciales, setCredenciales] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [enviando, setEnviando] = useState(false); // 👈 nuevo

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log("✏️ Cambiando campo:", name, "=>", value);
    setCredenciales((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    e.stopPropagation(); // 👈 Detenemos propagación por si hay algún evento duplicado
    setError("");
  
    console.log("🧪 Submitting form...");

    if (enviando) {
      console.warn("⚠️ Envío en curso, evitando reenvío.");
      return;
    }

    if (!credenciales.email || !credenciales.password) {
      console.warn("⚠️ Email o contraseña vacíos al enviar");
      return;
    }

    console.log("📤 Enviando credenciales:", credenciales);
    setEnviando(true); // 👈 bloquear mientras se envía

    try {
      const res = await fetch("http://localhost:3000/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(credenciales),
      });

      const data = await res.json();
      console.log("📥 Respuesta del servidor:", data);

      if (!res.ok) {
        throw new Error(data.error || "Error al iniciar sesión");
      }

      login(data.usuario, data.token);
      alert("✅ Bienvenido/a " + data.usuario.nombre);

      // Limpiar campos
      setCredenciales({ email: "", password: "" });

      // Redirigir y detener ejecución
      navigate("/perfil");
      return;
    } catch (err) {
      console.error("❌ Error en login:", err.message);
      setError(err.message);
    } finally {
      setEnviando(false); // ✅ desbloquear
    }
  };

  return (
    <form className="form-login" onSubmit={handleSubmit} noValidate>
      <h2>Iniciar Sesión</h2>
      {error && <p className="error">{error}</p>}
      <input
        type="email"
        name="email"
        placeholder="Correo electrónico"
        value={credenciales.email}
        onChange={handleChange}
        required
        autoComplete="email"
      />
      <input
        type="password"
        name="password"
        placeholder="Contraseña"
        value={credenciales.password}
        onChange={handleChange}
        required
        autoComplete="current-password"
      />
      <button type="submit" disabled={enviando}>
        {enviando ? "Entrando..." : "Entrar"}
      </button>
    </form>
  );
}
