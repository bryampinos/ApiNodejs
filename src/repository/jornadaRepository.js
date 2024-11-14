const Jornada=require('../models/jornada')

const createJornada = async (user) => {
    try {
    return await Jornada.create(user);
        
    } catch (error) {
 throw new Error('Error al obtener las asignaturas de la base de datos: ' + error.message);
    }
  };
  const getAllJornadas = async()=>{
    try {
    return await Jornada.findAll();
      
  } catch (error) {
      throw new Error('Error al obtener las asignaturas de la base de datos: ' + error.message);
  }
  }
  module.exports = {createJornada,getAllJornadas}