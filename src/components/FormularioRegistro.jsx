import { useState } from "react";
import "./FormularioRegistro.css";

export default function FormularioRegistro() {
  const [usuario, setUsuario] = useState({
    nombre: "",
    apellidos: "",
    email: "",
    password: "",
    fecha_nacimiento: "",
    telefono: "",
    direccion: "",
    pais: "",
  });

  const handleChange = (e) => {
    setUsuario({
      ...usuario,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const respuesta = await fetch("http://localhost:3000/api/usuarios", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(usuario),
      });

      const datos = await respuesta.json();
      console.log("Usuario creado:", datos);
      alert("✅ Usuario registrado con éxito");

      // Limpiar formulario
      setUsuario({
        nombre: "",
        apellidos: "",
        email: "",
        contraseña: "",
        fecha_nacimiento: "",
        telefono: "",
        direccion: "",
        pais: "",
      });
    } catch (error) {
      console.error("Error al registrar:", error);
      alert("❌ Ocurrió un error al registrar el usuario");
    }
  };

  return (
    <form className="form-registro" onSubmit={handleSubmit}>
      <h2>Registro de Usuario</h2>

      <input
        type="text"
        name="nombre"
        value={usuario.nombre}
        onChange={handleChange}
        placeholder="Nombre"
        required
      />
      <input
        type="text"
        name="apellidos"
        value={usuario.apellidos}
        onChange={handleChange}
        placeholder="Apellidos"
        required
      />
      <input
        type="email"
        name="email"
        value={usuario.email}
        onChange={handleChange}
        placeholder="Correo electrónico"
        required
      />
      <input
        type="password"
        name="password"
        value={usuario.contraseña}
        onChange={handleChange}
        placeholder="Contraseña"
        required
      />
      <input
        type="date"
        name="fecha_nacimiento"
        value={usuario.fecha_nacimiento}
        onChange={handleChange}
        required
      />
      <input
        type="tel"
        name="telefono"
        value={usuario.telefono}
        onChange={handleChange}
        placeholder="Teléfono"
        required
      />
      <input
        type="text"
        name="direccion"
        value={usuario.direccion}
        onChange={handleChange}
        placeholder="Dirección"
        required
      />
      <input
        type="text"
        name="pais"
        value={usuario.pais}
        onChange={handleChange}
        placeholder="País"
        required
      />
      <button type="submit">Registrarse</button>
    </form>
  );
}
