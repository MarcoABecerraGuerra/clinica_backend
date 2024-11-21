const { DataTypes } = require('sequelize');
const sequelize = require('../utils/postgreSQL');

const Especialidad = sequelize.define('especialidad', {
    idespecialidad: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nombre: {
      type: DataTypes.STRING(100),
    }
  },{
    // Opciones adicionales del modelo
    schema: 'public',// Esquema
    tableName: 'especialidad', // Nombre de la tabla personalizada
    timestamps: false
});

module.exports.Especialidad = Especialidad;