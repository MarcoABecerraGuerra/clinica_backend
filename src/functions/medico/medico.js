const { Medico } = require("../../model/medico");
const {  ApiSuccesResponse,  ApiInternalErrorResponse,} = require("../../utils/api-response");
const {  obtenerMedicoBD,  registrarMedicoBD,  actualizarMedicoBD,  eliminarMedicoBD,} = require("./medico.service");

const obtenerMedicos = async () => {
  try {
    let medicos = await obtenerMedicoBD({
      where: { estado: true }, // Filtra solo los médicos activos
    });
    return new ApiSuccesResponse({
      message: "Lista de médicos obtenida exitosamente",
      result: "success",
      data: medicos,
    });
  } catch (error) {
    console.error("Error al obtener listado de médicos:", error);
    return new ApiInternalErrorResponse({
      message: `Error al obtener médicos: ${error.message}`,
      result: "error",
      data: {},
    });
  }
};

const registrarMedicos = async (body) => {
  try {
    const nuevoMedico = await registrarMedicoBD(body);
    return new ApiSuccesResponse({
      message: "Médico registrado exitosamente",
      result: "success",
      data: nuevoMedico,
    });
  } catch (error) {
    console.error("Error al registrar médico:", error);
    return new ApiInternalErrorResponse({
      message: `Error al registrar médico: ${error.message}`,
      result: "error",
      data: {},
    });
  }
};

const actualizarMedicos = async (body) => {
  try {
    const { idmedico, ...updateFields } = body;

    const medico = await Medico.findByPk(idmedico);

    if (!medico) {
      return new ApiInternalErrorResponse({
        message: "No se encontró el médico para actualizar",
        result: "error",
        data: {},
      });
    }

    const [updated] = await Medico.actualizarMedicoBD(updateFields, {
      where: { idmedico },
    });

    if (updated) {
      const medicoActualizado = await Medico.findByPk(idmedico);

      return new ApiSuccesResponse({
        message: "Médico actualizado exitosamente",
        result: "success",
        data: medicoActualizado,
      });
    }

    // If no records were updated, return an error response
    return new ApiInternalErrorResponse({
      message: "No se realizó ninguna actualización en el médico",
      result: "error",
      data: {},
    });
  } catch (error) {
    // Handle unexpected errors
    console.error("Error al actualizar médico:", error);
    return new ApiInternalErrorResponse({
      message: `Error al actualizar médico: ${error.message}`,
      result: "error",
      data: {},
    });
  }
};

const eliminarMedicos = async (idmedico) => {
  try {
    const [updated] = await Medico.update(
      { estado: false }, // Cambia el estado a inactivo
      { where: { idmedico } }
    );

    if (updated) {
      const medicoEliminado = await eliminarMedicoBD(idmedico);
      return new ApiSuccesResponse({
        message: "El médico ha sido eliminado (estado: false)",
        result: "success",
        data: medicoEliminado,
      });
    }

    return new ApiInternalErrorResponse({
      message: "No se encontró el registro",
      result: "error",
      data: {},
    });
  } catch (error) {
    console.error("Error al eliminar médico :", error);
    return new ApiInternalErrorResponse({
      message: `Error al eliminar médico: ${error.message}`,
      result: "error",
      data: {},
    });
  }
};

module.exports.obtenerMedicos = obtenerMedicos;
module.exports.registrarMedicos = registrarMedicos;
module.exports.actualizarMedicos = actualizarMedicos;
module.exports.eliminarMedicos = eliminarMedicos;
