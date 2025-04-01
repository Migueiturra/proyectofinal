// src/components/Navbar.jsx
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext"; // 👈 importa el contexto
import "./Navbar.css";

export default function Navbar() {
  const { usuario, logout } = useAuth(); // 👈 obtenemos el usuario y la función para cerrar sesión

  return (
    <nav className="navbar">
      <div className="navbar-superior">
        <div className="navbar-left">
          <Link to="/">Sobre nosotros</Link>
          <Link to="/">Contacto</Link>
        </div>
        <div className="navbar-right">
          {usuario ? (
            <>
              <span>Hola, {usuario.nombre}</span>
              <Link to="/perfil">Mi Perfil</Link>
              <button onClick={logout}>Cerrar sesión</button>
            </>
          ) : (
            <>
              <Link to="/registro">Registrarse</Link>
              <Link to="/login">Acceder</Link>
            </>
          )}
          <Link to="/carrito">Carrito</Link>
        </div>
      </div>

      <div className="navbar-categorias">
        <Link className="cat-btn" to="/galeria/Nintendo">Nintendo</Link>
        <Link className="cat-btn" to="/galeria/Sega">Sega</Link>
        <Link className="cat-btn" to="/galeria/Sony">Sony</Link>
        <Link className="cat-btn" to="/galeria/Microsoft">Microsoft</Link>
        <Link className="cat-btn" to="/galeria/Otros">Otros</Link>
        <Link className="vender-btn" to="/vender">Vender</Link>
      </div>
    </nav>
  );
}
