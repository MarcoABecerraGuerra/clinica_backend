const { DataTypes } = require('sequelize');
const sequelize = require('../utils/postgreSQL');

const Paciente = sequelize.define('paciente', {
  idpaciente: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  dni: {
    type: DataTypes.STRING(20),
  },
  nombre: {
    type: DataTypes.STRING(100),
  },
  appaterno: {
    type: DataTypes.STRING(100),
  },
  apmaterno: {
    type: DataTypes.STRING(100),
  },
  fechanacimiento: {
    type: DataTypes.DATE,
  },
  sexo: {
    type: DataTypes.STRING(10),
  },
  telefono: {
    type: DataTypes.STRING(20),
  },
  direccion: {
    type: DataTypes.STRING(200),
  },
}, {
  // Opciones adicionales del modelo
  schema: 'public', // Esquema
  tableName: 'paciente', // Nombre de la tabla personalizada
  timestamps: false, // Desactiva createdAt y updatedAt
});

module.exports.Paciente = Paciente;