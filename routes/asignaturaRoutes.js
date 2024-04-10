
const express = require('express');
const asignaturaController = require('../controllers/asignaturaController');
const router = express.Router();


router.post('/register',asignaturaController.crearAsignatura );

module.exports = router;