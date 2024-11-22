const { ApiInternalErrorResponse, ApiSuccesResponse } = require("../../utils/api-response");
const { obtenerHorarioBD, obtenerListaHorarioBD, registrarHorarioBD, actualizarHorarioBD, deleteHorarioBD } = require("./horario.service");

const obtenerListaHorario = async() => {

    let response = {};

    try {

        let horario = await obtenerListaHorarioBD();
        response.message = "lista de horarios obtenido";
        response.data = horario;

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
            data: {}
        });
    }

}

const obtenerHorario = async(idhorario) => {

    let response = {};

    try {

        let horario = await obtenerHorarioBD(idhorario);
        response.message = "Horario obtenido";
        response.data = horario;

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
            data: {}
        });
    }

}

const registrarHorario = async(horario) => {

    let response = {};

    try {
        let horarioRegistrado = await registrarHorarioBD(horario);
        response.message = "Horario Registrado";
        console.info('Evento registrado', JSON.stringify(horarioRegistrado));

        if (horarioRegistrado != null) {
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

const actualizarHorario = async(horario) => {

    let response = {};

    try {
        console.info('horario', JSON.stringify(horario));
        let distritoActualizado = await actualizarHorarioBD(horario);
        response.message = "Horario Actualizado";
        console.info('Evento registrado', JSON.stringify(distritoActualizado));

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

const eliminarHorario = async(idhorario) => {

    let response = {};

    try {
        console.info('Horario', idhorario);
        let horarioEliminado = await deleteHorarioBD(idhorario);
        response.message = "Horario Eliminado";
        console.info('Evento registrado', JSON.stringify(horarioEliminado));

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

module.exports.obtenerListaHorario = obtenerListaHorario;
module.exports.obtenerHorario = obtenerHorario;
module.exports.registrarHorario = registrarHorario;
module.exports.actualizarHorario = actualizarHorario;
module.exports.eliminarHorario = eliminarHorario;