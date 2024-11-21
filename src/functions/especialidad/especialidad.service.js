const { Especialidad } = require("../../model/especialidad");

const obtenerListaEspecialidadBD = async() => {
    //Realizar query consulta a postgresql
    let especialidad = null;
    try {
        especialidad = await Especialidad.findAll({raw: true});

    } catch (error) {
        console.info('Error al ejecutar consulta', error);
    }
    return especialidad;
}

const obtenerEspecialidadBD = async(idespecialidad) => {
    //Realizar query consulta a postgresql
    let especialidad = null;
    try {
        especialidad = await Especialidad.findOne({where:{idespecialidad: idespecialidad}},{raw: true});

    } catch (error) {
        console.info('Error al ejecutar consulta', error);
    }
    return especialidad;
}

const registrarEspecialidadBD = async(especialidadObj) => {
    //Realizar query consulta a postgresql
    let especialidad = null;
    try {
        especialidad = await Especialidad.create(especialidadObj);
    } catch (error) {
        console.info('Error al ejecutar registro', error);
    }
    return especialidad;
}

const actualizarEspecialidadBD = async(especialidadObj) => {
    //Realizar query consulta a postgresql
    let especialidad = null;
    try {
        especialidad = await Especialidad.update(especialidadObj, { where: { idespecialidad: especialidadObj.idespecialidad} });
    } catch (error) {
        console.info('Error al ejecutar registro', error);
    }
    return especialidad;
}

const deleteEspecialidadBD = async(idespecialidad) => {
    //Realizar query consulta a postgresql
    let especialidad = null;
    try {
        especialidad = await Especialidad.destroy({where: { idespecialidad: idespecialidad} });
    } catch (error) {
        console.info('Error al ejecutar registro', error);
    }
    return especialidad;   
}

module.exports.obtenerListaEspecialidadBD = obtenerListaEspecialidadBD;
module.exports.obtenerEspecialidadBD = obtenerEspecialidadBD;
module.exports.registrarEspecialidadBD = registrarEspecialidadBD;
module.exports.actualizarEspecialidadBD = actualizarEspecialidadBD;
module.exports.deleteEspecialidadBD = deleteEspecialidadBD;