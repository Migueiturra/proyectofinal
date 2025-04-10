
// src/components/RutaPrivada.jsx
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function RutaPrivada({ children }) {
  const { usuario } = useAuth();

  if (!usuario) {
    // No está logueado → redirige a login
    return <Navigate to="/login" replace />;
  }

  // Está logueado → muestra el contenido protegido
  return children;
}
