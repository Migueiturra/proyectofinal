// models/carrito.model.js
export default (sequelize, DataTypes) => {
    const Carrito = sequelize.define('carrito', {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      usuario_id: DataTypes.INTEGER,
      publicacion_id: DataTypes.INTEGER,
      cantidad: DataTypes.INTEGER
    }, {
      timestamps: false,
    });
  
    return Carrito;
  };
  