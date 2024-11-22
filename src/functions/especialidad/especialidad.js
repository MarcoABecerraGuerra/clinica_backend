const { ApiInternalErrorResponse, ApiSuccesResponse } = require("../../utils/api-response");
const { obtenerEspecialidadBD, obtenerListaEspecialidadBD, actualizarEspecialidadBD, registrarEspecialidadBD, deleteEspecialidadBD } = require("./especialidad.service");

const obtenerListaEspecialidad = async() => {

    let response = {};

    try {

        let especialidad = await obtenerListaEspecialidadBD();
        response.message = "lista de especialidades obtenido";
        response.data = especialidad;

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

const obtenerEspecialidad = async(idespecialidad) => {

    let response = {};

    try {

        let especialidad = await obtenerEspecialidadBD(idespecialidad);
        response.message = "Especialidad obtenido";
        response.data = especialidad;

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

const registrarEspecialidad = async(especialidad) => {

    let response = {};

    try {
        let especialidadRegistrado = await registrarEspecialidadBD(especialidad);
        response.message = "Especialidad Registrada";

        if (especialidadRegistrado != null) {
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

const actualizarEspecialidad = async(especialidad) => {

    let response = {};

    try {
        let especialidadActualizado = await actualizarEspecialidadBD(especialidad);
        response.message = "Especialidad Actualizado";
        console.info('Especialidad registrado', JSON.stringify(especialidadActualizado));

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

const eliminarEspecialidad = async(idespecialidad) => {

    let response = {};

    try {
        let especialidadEliminado = await deleteEspecialidadBD(idespecialidad);
        response.message = "Especialidad Eliminado";
        console.info('Especialidad registrado', JSON.stringify(especialidadEliminado));

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

module.exports.obtenerListaEspecialidad = obtenerListaEspecialidad;
module.exports.obtenerEspecialidad = obtenerEspecialidad;
module.exports.registrarEspecialidad = registrarEspecialidad;
module.exports.actualizarEspecialidad = actualizarEspecialidad;
module.exports.eliminarEspecialidad = eliminarEspecialidad;