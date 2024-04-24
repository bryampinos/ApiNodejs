const express = require('express');
const userController = require('../controllers/userController');
const router = express.Router();
const cors = require('cors');
router.use(cors());

router.post('/register', userController.register);
router.post('/login', userController.login);
//METODOS GET
router.get('/all', userController.getUsers);
router.get('/:id', userController.getUser);


module.exports = router;

