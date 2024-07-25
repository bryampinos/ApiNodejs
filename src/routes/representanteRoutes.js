const express = require('express');
const router = express.Router();
const representanteController= require('../controllers/representanteController')

router.get('/user/all', representanteController.getRepresentantes)
//EDITAR LOS DOCENTES
router.put('/update/:id', representanteController.updateRepresentante)
router.delete('/delete/:id', representanteController.deleteDocente);
module.exports = router;
