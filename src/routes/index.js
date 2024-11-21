const {Router} = require('express');
const { validateLogin } = require('../functions/auth/login');
const { obtenerMenubyUser } = require('../functions/auth/menu');
const { obtenerListaHorario, obtenerHorario, registrarHorario, actualizarHorario, eliminarHorario } = require('../functions/horario/horario');
const { obtenerListaEspecialidad, obtenerEspecialidad, registrarEspecialidad, actualizarEspecialidad, eliminarEspecialidad } = require('../functions/especialidad/especialidad');
const { getListPaciente, registrarPaciente, actualizarPaciente, eliminarPaciente } = require('../functions/paciente/paciente');
const router = Router();

//Routes

// **********************
// LOGIN SERVICES
// **********************
router.post('/usuario/login', async (req, res) =>{
    const { username, pass } = req.body
    let data = await validateLogin(username, pass);
    res.status(data.statusCode).json(JSON.parse(data.body));
})

router.get('/usuario/menu', async (req, res) =>{
    const { userid } = req.query
    let data = await obtenerMenubyUser();
    res.status(data.statusCode).json(JSON.parse(data.body));
})

// **********************
// CRUD HORARIO
// **********************

router.get('/horario', async (req, res) =>{
    let data = await obtenerListaHorario();
    res.status(data.statusCode).json(JSON.parse(data.body));
})

router.get('/horario/obtener', async (req, res) =>{
    const { idhorario } = req.query;
    let data = await obtenerHorario(idhorario);
    res.status(data.statusCode).json(JSON.parse(data.body));
})

router.post('/horario/crear', async (req, res) =>{
    let data = await registrarHorario(req.body);
    res.status(data.statusCode).json(JSON.parse(data.body));
})

router.put('/horario/editar', async (req, res) =>{
    let data = await actualizarHorario(req.body);
    res.status(data.statusCode).json(JSON.parse(data.body));
})

router.delete('/horario/eliminar', async (req, res) =>{
    const { idhorario } = req.query
    let data = await eliminarHorario(idhorario);
    res.status(data.statusCode).json(JSON.parse(data.body));
})

// **********************
// CRUD ESPECIALIDAD
// **********************

router.get('/especialidad', async (req, res) =>{
    let data = await obtenerListaEspecialidad();
    res.status(data.statusCode).json(JSON.parse(data.body));
})

router.get('/especialidad/obtener', async (req, res) =>{
    const { idespecialidad } = req.query;
    let data = await obtenerEspecialidad(idespecialidad);
    res.status(data.statusCode).json(JSON.parse(data.body));
})

router.post('/especialidad/crear', async (req, res) =>{
    let data = await registrarEspecialidad(req.body);
    res.status(data.statusCode).json(JSON.parse(data.body));
})

router.put('/especialidad/editar', async (req, res) =>{
    let data = await actualizarEspecialidad(req.body);
    res.status(data.statusCode).json(JSON.parse(data.body));
})

// **********************
// CRUD PACIENTE
// **********************

router.delete('/especialidad/eliminar', async (req, res) =>{
    const { idespecialidad } = req.query
    let data = await eliminarEspecialidad(idespecialidad);
    res.status(data.statusCode).json(JSON.parse(data.body));
})

router.get('/paciente', async (req, res) =>{
    let data = await getListPaciente();
    res.status(data.statusCode).json(JSON.parse(data.body));
})

router.post('/paciente/crear', async (req, res) =>{
    let data = await registrarPaciente(req.body);
    res.status(data.statusCode).json(JSON.parse(data.body));
})

router.put('/paciente/editar', async (req, res) =>{
    let data = await actualizarPaciente(req.body);
    res.status(data.statusCode).json(JSON.parse(data.body));
})

router.delete('/paciente/eliminar', async (req, res) =>{
    const { idpaciente } = req.query
    let data = await eliminarPaciente(idpaciente);
    res.status(data.statusCode).json(JSON.parse(data.body));
})

// **********************
// CRUD MEDICO
// **********************

router.get("/medico/listar", async (req, res) => {
    let data = await obtenerMedicos();
    res.status(data.statusCode).json(JSON.parse(data.body));
  });
  
  router.post("/medico/crear", async (req, res) => {
    let data = await registrarMedicos(req.body);
    res.status(data.statusCode).json(JSON.parse(data.body));
  });
  
  router.put("/medico/editar/:id", async (req, res) => {
    const { id } = req.params;
    const body = { ...req.body, idmedico: id };
    let data = await actualizarMedicos(body);
    res.status(data.statusCode).json(JSON.parse(data.body));
  });
  
  router.delete("/medico/eliminar/:id", async (req, res) => {
    const { idmedico } = req.query;
    let data = await eliminarMedicos(idmedico);
    res.status(data.statusCode).json(JSON.parse(data.body));
  });

module.exports = router;