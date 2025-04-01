import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Registro from "./pages/Registro";
import Carrito from "./pages/Carrito";
import Perfil from "./pages/Perfil";
import Detalle from "./pages/Detalle";
import Galeria from "./pages/Galeria";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/carrito" element={<Carrito />} />
        <Route path="/perfil" element={<Perfil />} />
        <Route path="/detalle/:id" element={<Detalle />} />
        <Route path="/galeria/:categoria" element={<Galeria />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
