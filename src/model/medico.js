const { DataTypes } = require("sequelize");
const sequelize = require("../utils/postgreSQL");

const Medico = sequelize.define("medico",{
    idmedico: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    dni: {
      type: DataTypes.STRING(8),
    },
    nombre: {
      type: DataTypes.STRING(250),
    },
    appaterno: {
      type: DataTypes.STRING(250),
    },
    apmaterno: {
      type: DataTypes.STRING(250),
    },
    fechanacimiento: {
      type: DataTypes.DATE,
    },
    sexo: {
      type: DataTypes.STRING(1), // Por ejemplo, 'M' o 'F'
    },
    telefono: {
      type: DataTypes.STRING(15),
      allowNull: true,
    },
    direccion: {
      type: DataTypes.STRING(500),
      allowNull: true,
    },
    idespecialidad: {
      type: DataTypes.INTEGER,
    },
    idhorario: {
      type: DataTypes.INTEGER,
    },
    estado: {
      type: DataTypes.BOOLEAN,
      defaultValue: true, // Por defecto, los registros están activos
    },
  },

  {
    // Opciones adicionales del modelo
    schema: "public", // Esquema
    tableName: "medico", // Nombre de la tabla personalizada
    timestamps: false,
  }
);

module.exports.Medico = Medico;
