// models/favorito.model.js
export default (sequelize, DataTypes) => {
    const Favorito = sequelize.define('favoritos', {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      usuario_id: DataTypes.INTEGER,
      publicacion_id: DataTypes.INTEGER
    }, {
      timestamps: false,
    });
  
    return Favorito;
  };
  