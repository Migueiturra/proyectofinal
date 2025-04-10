// models/usuario.model.js
export default (sequelize, DataTypes) => {
    const Usuario = sequelize.define('usuarios', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      nombre: DataTypes.TEXT,
      email: DataTypes.TEXT,
      password: DataTypes.TEXT,
      creado_en: DataTypes.DATE,
      apellidos: DataTypes.STRING,
      fecha_nacimiento: DataTypes.DATE,
      telefono: DataTypes.STRING,
      direccion: DataTypes.STRING,
      pais: DataTypes.STRING
    }, {
      timestamps: false,
    });
  
    return Usuario;
  };
  