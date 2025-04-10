// src/context/AuthContext.jsx
import { createContext, useContext, useState } from "react";

// 👉 Crear el contexto
const AuthContext = createContext();

// 👉 Proveedor del contexto
export function AuthProvider({ children }) {
  const [usuario, setUsuario] = useState(null);

  // ✅ Esta función solo guarda el usuario y el token (ya autenticado)
  const login = (usuarioData, token) => {
    setUsuario(usuarioData);
    localStorage.setItem("token", token);
  };

  const logout = () => {
    setUsuario(null);
    localStorage.removeItem("token");
  };

  return (
    <AuthContext.Provider value={{ usuario, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

// 👉 Este es el hook personalizado
export function useAuth() {
  return useContext(AuthContext);
}
