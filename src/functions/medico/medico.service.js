const  Medico  = require("../../model/medico");
//listar
const obtenerMedicoBD = async () => {
  try {
    const medicos = await Medico.findAll({
      where: { estado: true }, // Solo obtener médicos activos
      raw: true,
    });
    return medicos;
  } catch (error) {
    console.error("Error al ejecutar consulta", error);
    throw new Error("No se pudo obtener la lista de médicos");
  }
};

// Registrar
const registrarMedicoBD = async (data) => {
  try {
    const nuevoMedico = await Medico.create(data); // Crea un nuevo médico
    return nuevoMedico;
  } catch (error) {
    console.error("Error al registrar médico:", error);
    throw new Error("No se pudo registrar el médico");
  }
};

// Actualizar
const actualizarMedicoBD = async (idmedico, data) => {
  try {
    const [updated] = await Medico.update(data, {
      where: { idmedico }, // Busca el médico por ID
    });

    if (updated) {
      return await Medico.findByPk(idmedico); // Devuelve los datos actualizados
    } else {
      throw new Error("No se encontró el médico para actualizar");
    }
  } catch (error) {
    console.error("Error al actualizar médico:", error);
    throw new Error("No se pudo actualizar el médico");
  }
};
const eliminarMedicoBD = async (idmedico) => {
  try {
    const [updated] = await Medico.update(
      { estado: false }, // Cambia el estado a inactivo
      {
        where: { idmedico }, // Busca al médico por ID
      }
    );

    if (updated) {
      return await Medico.findByPk(idmedico); // Devuelve el médico marcado como inactivo
    } else {
      throw new Error("No se encontró el médico para eliminar");
    }
  } catch (error) {
    console.error("Error al eliminar médico:", error);
    throw new Error("No se pudo eliminar el médico");
  }
};

module.exports.obtenerMedicoBD = obtenerMedicoBD;
module.exports.registrarMedicoBD = registrarMedicoBD;
module.exports.actualizarMedicoBD = actualizarMedicoBD;
module.exports.eliminarMedicoBD = eliminarMedicoBD;
