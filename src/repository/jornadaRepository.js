const Jornada=require('../models/jornada')

const createJornada = async (jornada) => {
    try {
    return await Jornada.create(jornada);
        
    } catch (error) {
 throw new Error('Error al obtener las asignaturas de la base de datos: ' + error.message);
    }
  };
  const editarJornada = async (jornada) => {
    try {

      jornada.jor_nombre=jornada.jor_nombre.toUpperCase()
    return await Jornada.update(jornada,{
      where: { jor_id: jornada.jor_id }, // Filtra por el ID del usuario
    });
        
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
  const getJornadaById = async(req)=>{
    try {

     return await Jornada.findAll({
        where: {
          jor_id: req.params.jor_id,  
        },
      });

      
  } catch (error) {
      throw new Error('Error al obtener las jornadas de la base de datos: ' + error.message);
  }
  }
  module.exports = {createJornada,getAllJornadas,getJornadaById,editarJornada}