const obtenerMedicoBD = async() => {
    //Realizar query consulta a postgresql
    let menu = null;
    try {
        menu = await Medico.findAll({raw: true});

    } catch (error) {
        console.info('Error al ejecutar consulta', error);
    }
    return menu;
}