
const express = require('express');
const atrasoController = require('../controllers/atrasoController')
const router = express.Router();


router.post('/register',atrasoController.crearAtraso );

module.exports = router;