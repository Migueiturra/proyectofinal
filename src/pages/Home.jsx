import Galeria from "../components/Galeria";

const publicaciones = [
  {
    id: 1,
    titulo: "Super Mario World",
    precio: 19990,
    imagen: "https://upload.wikimedia.org/wikipedia/en/3/32/Super_Mario_World_Coverart.png",
  },
  {
    id: 2,
    titulo: "Sonic the Hedgehog",
    precio: 17990,
    imagen: "https://upload.wikimedia.org/wikipedia/en/5/5f/Sonic_the_Hedgehog_1_Genesis_box_art.jpg",
  },
  {
    id: 3,
    titulo: "Street Fighter II",
    precio: 29990,
    imagen: "https://upload.wikimedia.org/wikipedia/en/7/7d/Street_Fighter_II_cover.jpg",
  },
  {
    id: 4,
    titulo: "The Legend of Zelda",
    precio: 24990,
    imagen: "https://upload.wikimedia.org/wikipedia/en/e/e7/The_Legend_of_Zelda_Box_Art.png",
  },
];

export default function Home() {
  return (
    <main>
      <div className="home-titulos">
    <h1>Bienvenido a RetroGalaga 🎮</h1>
    <h2>Juegos destacados</h2>
  </div>
      <Galeria publicaciones={publicaciones} />
    </main>
  );
}
