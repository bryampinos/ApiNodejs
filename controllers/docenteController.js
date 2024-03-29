const docenteService = require('../services/docenteService');

const register = async (req, res) => {
    const docente = await docenteService.register(req.body);
    res.json("usuario registrado exitosament");
  };

  module.exports = {
    register
  }
  