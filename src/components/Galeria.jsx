import './Galeria.css';
import CardPublicacion from './CardPublicacion';

export default function Galeria({ publicaciones }) {
  return (
    <div className="galeria">
      {publicaciones.map((publi) => (
        <CardPublicacion key={publi.id} juego={publi} />
      ))}
    </div>
  );
}
