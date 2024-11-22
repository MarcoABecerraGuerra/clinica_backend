const { DataTypes } = require('sequelize');
const sequelize = require('../utils/postgreSQL');

const Horario = sequelize.define('horario', {
    idhorario: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    idturno: {
      type: DataTypes.INTEGER,
    },
    horaingreso: {
      type: DataTypes.STRING(20),
    },
    horasalida: {
      type: DataTypes.STRING(20),
    },
    dias: {
      type: DataTypes.STRING(20),
    }
  },{
    // Opciones adicionales del modelo
    schema: 'public',// Esquema
    tableName: 'horario', // Nombre de la tabla personalizada
    timestamps: false
});

module.exports.Horario = Horario;