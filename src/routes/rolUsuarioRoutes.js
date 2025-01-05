const express = require('express');
const rolUsuariocontroller = require('../controllers/rolUsuarioController');
const router = express.Router();
router.get('/all', rolUsuariocontroller.getRoles);
module.exports = router;
