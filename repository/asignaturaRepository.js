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
  const findAsignaturaById = async(idAsignatura)=>{
    try {
      return await Asignatura.findByPk(idAsignatura);
    } catch (error) {
      throw new Error('Error al obtener los cursos de la base de datos: ' + error.message);
    }
    
  }
  const deleteAsignatura=async(idAsignatura)=> {
    try {
      const deleted = await Asignatura.destroy({
        where: { idAsignatura },
      });
      if (deleted === 0) {
        throw new Error('Asignatura no encontrado');
      }
      return deleted;
    } catch (error) {
      throw new Error('Error al eliminar la asignatura de la base de datos: ' + error.message);
    }
  }
  module.exports={asignaturaRegister,fetchAll,findAsignaturaById,deleteAsignatura};