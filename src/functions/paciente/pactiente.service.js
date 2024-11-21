const { Paciente } = require("../../models/paciente")

const obtenerListaPaciente = async() => {
    //Realizar query consulta a postgresql
    let pacientes = null;
    try {
        pacientes = await Paciente.findAll({raw: true});
    } catch (error) {
        console.info('Error al ejecutar consulta', error);
    }
    return pacientes;
}

const registrarNuevoPaciente = async(paciente) => {
    //Realizar query consulta a postgresql
    console.log('paciente', paciente)
    let pacientes = null;
    try {
        pacientes = await Paciente.create(paciente);
    } catch (error) {
        console.info('Error al ejecutar registro', error);
    }
    return pacientes;
}

const actualizar = async(evento) => {
    //Realizar query consulta a postgresql
    let pacientes = null;
    try {
        pacientes = await Paciente.update(evento, { where: { idpaciente: evento.idpaciente} });
    } catch (error) {
        console.info('Error al ejecutar registro', error);
    }
    return pacientes;
}

const deletePaciente = async(param_idpaciente) => {
    //Realizar query consulta a postgresql
    let pacientes = null;
    try {
        pacientes = await Paciente.destroy({where: { idpaciente: param_idpaciente} });
    } catch (error) {
        console.info('Error al ejecutar registro', error);
    }
    return pacientes;
}

module.exports.obtenerListaPaciente = obtenerListaPaciente;
module.exports.registrarNuevoPaciente = registrarNuevoPaciente;
module.exports.actualizar = actualizar;
module.exports.deletePaciente = deletePaciente;