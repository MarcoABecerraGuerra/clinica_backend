const { DataTypes } = require('sequelize');
const sequelize = require('../utils/postgreSQL');

const Cita = sequelize.define('cita', {
    idcita: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    estado: {
      type: DataTypes.BOOLEAN,
    }
  },{
    // Opciones adicionales del modelo
    schema: 'public',// Esquema
    tableName: 'cita', // Nombre de la tabla personalizada
    timestamps: false
});

module.exports.Cita = Cita;