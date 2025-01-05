const express = require('express');
const userController = require('../controllers/userController');
const router = express.Router();




router.post('/register', userController.register);
router.post('/login', userController.login);
//METODOS GET
router.get('/all', userController.getUsers);
router.get('/login/docente/:id', userController.getjorDocente);
router.get('/by-rol/:rol_id',userController.getUsersByRoles)
router.get('/:id', userController.getUser);

//METODO DELETE
router.delete('/delete/:id', userController.deleteUser)
router.patch('/patch', userController.changePassword);

module.exports = router;

