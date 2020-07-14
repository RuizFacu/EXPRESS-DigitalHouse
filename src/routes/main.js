// requiero express
const express = require('express');

// utilizo su modulo router
const router = express.Router();

// requiero mi modulo de controlador
const controller = require('../controllers/heroController')

// creo las rutas y llamo a las funciones que creo en el controlador

router.get('/', controller.listar);

router.get('/detalle/:id', controller.detail);

router.get('/bio/:id', controller.biografia);

// exporto el modulo del router
module.exports = router;