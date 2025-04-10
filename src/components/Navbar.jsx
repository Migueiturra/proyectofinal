import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "./Navbar.css";

export default function Navbar() {
  const { usuario, logout } = useAuth();

  // 👇 Agrega este log para verificar el estado del usuario
  console.log("🔎 Usuario en Navbar:", usuario);

  return (
    <nav className="navbar">
      <div className="navbar-superior">
        <div className="navbar-left">
          <Link to="/" className="logo-retrogalaga">🎮 RetroGalaga</Link>
          <Link to="/">Sobre nosotros</Link>
          <Link to="/">Contacto</Link>
        </div>

        <div className="navbar-right">
          {usuario ? (
            <>
              <span>Hola, {usuario.nombre}</span>
              <Link to="/perfil">Mi Perfil</Link>
              <button onClick={logout} className="btn-logout">Cerrar sesión</button>
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
