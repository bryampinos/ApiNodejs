const express = require('express');
const repreController = require('../controller/repreController');

const router = express.Router();

router.post('/register', repreController.register);
router.post('/login', repreController.login);

module.exports = router;