import { useAuth } from "../context/AuthContext";

export default function Login() {
  const { login } = useAuth();

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Login</h1>
      <button onClick={() => login("Miguel")}>Iniciar sesión como Miguel</button>
    </div>
  );
}
