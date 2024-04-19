const Asignatura = require('../models/asignatura')

const asignaturaRegister= async (asignatura) => {
    return await Asignatura.create(asignatura);
  };

  const fetchAll = async()=>{
    try {
      const asignaturas = await Asignatura.findAll();
      return asignaturas;
  } catch (error) {
      throw new Error('Error al obtener las asignaturas de la base de datos: ' + error.message);
  }
  }
  module.exports={asignaturaRegister,fetchAll};