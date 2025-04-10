// models/publicacion.model.js
export default (sequelize, DataTypes) => {
    const Publicacion = sequelize.define('publicaciones', {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      titulo: DataTypes.TEXT,
      precio: DataTypes.INTEGER,
      imagen: DataTypes.TEXT,
      descripcion: DataTypes.TEXT,
      categoria: DataTypes.TEXT,
      usuario_id: DataTypes.INTEGER,
      creado_en: DataTypes.DATE
    }, {
      timestamps: false,
    });
  
    return Publicacion;
  };
  