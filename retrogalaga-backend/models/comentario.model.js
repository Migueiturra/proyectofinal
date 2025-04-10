// models/comentario.model.js
export default (sequelize, DataTypes) => {
    const Comentario = sequelize.define('comentarios', {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      usuario_id: DataTypes.INTEGER,
      publicacion_id: DataTypes.INTEGER,
      contenido: DataTypes.TEXT,
      creado_en: DataTypes.DATE
    }, {
      timestamps: false,
    });
  
    return Comentario;
  };
  