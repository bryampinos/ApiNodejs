const Asignatura = require('../models/asignatura')

const asignaturaRegister= async (asignatura) => {
    return await Asignatura.create(asignatura);
  };
  module.exports={asignaturaRegister};