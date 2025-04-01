import "./CardPublicacion.css";

export default function CardPublicacion({ juego }) {
  return (
    <div className="card">
      <img src={juego.imagen} alt={juego.titulo} />
      <div className="info">
        <h3>{juego.titulo}</h3>
        <p className="precio">${juego.precio.toLocaleString()}</p>
      </div>
    </div>
  );
}
