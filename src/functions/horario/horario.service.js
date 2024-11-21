const { Horario } = require("../../model/horario");

const obtenerListaHorarioBD = async() => {
    //Realizar query consulta a postgresql
    let horario = null;
    try {
        horario = await Horario.findAll({raw: true});

    } catch (error) {
        console.info('Error al ejecutar consulta', error);
    }
    return horario;
}

const obtenerHorarioBD = async(idhorario) => {
    //Realizar query consulta a postgresql
    let horario = null;
    try {
        horario = await Horario.findOne({where:{idhorario: idhorario}},{raw: true});

    } catch (error) {
        console.info('Error al ejecutar consulta', error);
    }
    return horario;
}

const registrarHorarioBD = async(horario) => {
    //Realizar query consulta a postgresql
    console.log('distrito', horario)
    let horarios = null;
    try {
        horarios = await Horario.create(horario);
    } catch (error) {
        console.info('Error al ejecutar registro', error);
    }
    return horarios;
}

const actualizarHorarioBD = async(evento) => {
    //Realizar query consulta a postgresql
    let horarios = null;
    try {
        horarios = await Horario.update(evento, { where: { iddistrito: evento.iddistrito} });
    } catch (error) {
        console.info('Error al ejecutar registro', error);
    }
    return horarios;
}

const deleteHorarioBD = async(idhorario) => {
    //Realizar query consulta a postgresql
    let horarios = null;
    try {
        horarios = await Horario.destroy({where: { iddistrito: idhorario} });
    } catch (error) {
        console.info('Error al ejecutar registro', error);
    }
    return horarios;   
}

module.exports.obtenerListaHorarioBD = obtenerListaHorarioBD;
module.exports.obtenerHorarioBD = obtenerHorarioBD;
module.exports.registrarHorarioBD = registrarHorarioBD;
module.exports.actualizarHorarioBD = actualizarHorarioBD;
module.exports.deleteHorarioBD = deleteHorarioBD;