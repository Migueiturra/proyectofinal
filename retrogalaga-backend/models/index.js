// models/index.js
import { Sequelize, DataTypes } from "sequelize";
import dotenv from "dotenv";
dotenv.config();

// Usamos variables de entorno (mejor que credenciales fijas en el código)
const sequelize = new Sequelize(
  process.env.DB_NAME,        // retrogalaga
  process.env.DB_USER,        // postgres
  process.env.DB_PASSWORD,    // tu contraseña
  {
    host: process.env.DB_HOST, // localhost
    dialect: "postgres",
    logging: false,
  }
);

// Importamos los modelos
import Usuario from "./usuario.model.js";
import Publicacion from "./publicacion.model.js";
import Carrito from "./carrito.model.js";
import Comentario from "./comentario.model.js";
import Favorito from "./favorito.model.js";

// Inicializamos los modelos
const db = {};
db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.Usuario = Usuario(sequelize, DataTypes);
db.Publicacion = Publicacion(sequelize, DataTypes);
db.Carrito = Carrito(sequelize, DataTypes);
db.Comentario = Comentario(sequelize, DataTypes);
db.Favorito = Favorito(sequelize, DataTypes);

// Función para probar la conexión
export const conectarDB = async () => {
  try {
    await sequelize.authenticate();
    console.log("✅ Conexión establecida con la base de datos.");
  } catch (error) {
    console.error("❌ Error al conectar con la base de datos:", error);
  }
};

export default db;
