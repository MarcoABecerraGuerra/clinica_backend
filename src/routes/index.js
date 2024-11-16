const {Router} = require('express');
const { validateLogin } = require('../functions/auth/login');
const { obtenerMenubyUser } = require('../functions/auth/menu');
const { registrarDistrito, getListDistrito, actualizarDistrito, eliminarDistrito } = require('../functions/configuracion/distrito');
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
// CRUD MEDICOS
// **********************

router.get('/medico/listar', async (req, res) =>{
    let data = await obtenerMedicos();
    res.status(data.statusCode).json(JSON.parse(data.body));
})

router.post('/medico/crear', async (req, res) =>{
    let data = await registrarDistrito(req.body);
    res.status(data.statusCode).json(JSON.parse(data.body));
})

router.put('/medico/editar', async (req, res) =>{
    let data = await actualizarDistrito(req.body);
    res.status(data.statusCode).json(JSON.parse(data.body));
})

router.delete('/medico/eliminar', async (req, res) =>{
    const { iddistrito } = req.query
    let data = await eliminarDistrito(iddistrito);
    res.status(data.statusCode).json(JSON.parse(data.body));
})


module.exports = router;