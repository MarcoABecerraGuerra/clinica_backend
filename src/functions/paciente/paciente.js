const { ApiSuccesResponse, ApiInternalErrorResponse } = require("../../utils/api-response");
const { obtenerListaPaciente, registrarNuevoPaciente, actualizar, deletePaciente } = require("./paciente.service");

const getListPaciente = async() => {

    let response = {};

    try {
        let pacienteLista = await obtenerListaPaciente();
        response.message = "Lista de pacientes obtenida";
        response.data = pacienteLista;
        
        return new ApiSuccesResponse({
            message: `${response.message}`,
            result: 'success',
            data: response.data
        });

    } catch (error) {
        console.info('error al obtener listado', error);
        return new ApiInternalErrorResponse({
            message: `Error no controlado: ${error}`,
            result: 'error',
            data: []
        });
    }
}

const registrarPaciente = async(paciente) => {

    let response = {};

    try {
        let pacienteLista = await registrarNuevoPaciente(paciente);
        response.message = "paciente Registrado";
        console.info('Evento registrado', JSON.stringify(pacienteLista));

        if (pacienteLista != null) {
            return new ApiSuccesResponse({
                message: `${response.message}`,
                result: 'success'
            });
            
        }else{
            return new ApiInternalErrorResponse({
                message: `Error no controlado: Comunicarse con administracion`,
                result: 'error'
            });
        }

    } catch (error) {
        console.info('error al obtener listado', error);
        return new ApiInternalErrorResponse({
            message: `Error no controlado: ${error}`,
            result: 'error'
        });
    }
}

const actualizarPaciente = async(paciente) => {

    let response = {};

    try {
        console.info('paciente', JSON.stringify(paciente));
        let pacienteLista = await actualizar(paciente);
        response.message = "paciente actualizado";
        console.info('Evento registrado', JSON.stringify(pacienteLista));

        return new ApiSuccesResponse({
            message: `${response.message}`,
            result: 'success'
        });

    } catch (error) {
        console.info('error al obtener listado', error);
        return new ApiInternalErrorResponse({
            message: `Error no controlado: ${error}`,
            result: 'error'
        });
    }
}

const eliminarPaciente = async(idpaciente) => {

    let response = {};

    try {
        console.info('paciente registrado', idpaciente);
        let pacienteLista = await deletePaciente(idpaciente);
        response.message = "paciente Eliminado";
        console.info('Evento registrado', JSON.stringify(pacienteLista));

        return new ApiSuccesResponse({
            message: `${response.message}`,
            result: 'success'
        });

    } catch (error) {
        console.info('error al obtener listado', error);
        return new ApiInternalErrorResponse({
            message: `Error no controlado: ${error}`,
            result: 'error'
        });
    }
}

module.exports.getListPaciente = getListPaciente;
module.exports.registrarPaciente = registrarPaciente;
module.exports.actualizarPaciente = actualizarPaciente;
module.exports.eliminarPaciente = eliminarPaciente;