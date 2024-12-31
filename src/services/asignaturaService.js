const asignaturaRepository = require('../repository/asignaturaRepository')
const asignaturaCreate = async (asignatura) => {
    try {
        if (!asignatura.asig_nombre   ) {
            throw new Error('Faltan datos obligatorios de la asignatura');
        }
        // asignatura.idasignatura = asignatura.nombre
        return  await asignaturaRepository.asignaturaRegister(asignatura);
    } catch (error) {
        console.error('Error al registrar la asignatura:', error);
        throw error; 
    }
}

const getAllAsignaturas = async() =>{
    try {
        const asignaturas = await asignaturaRepository.fetchAll();
        return asignaturas;
    } catch (error) {
        throw new Error('Error al obtener las asignaturas: ' + error.message);
    }
}
const getAllAsignaturasByJornada = async(jor_id) =>{
  try {
      const asignaturas = await asignaturaRepository.fetchAllByJornada(jor_id);
      return asignaturas;
  } catch (error) {
      throw new Error('Error al obtener las asignaturas: ' + error.message);
  }
}
const getAllAsignaturasBySeccion = async(jor_id,nivel_id) =>{
  try {
      const asignaturas = await asignaturaRepository.fetchAllBySeccion(jor_id,nivel_id);
      return asignaturas;
  } catch (error) {
      throw new Error('Error al obtener las asignaturas: ' + error.message);
  }
}
const getAllAsignaturasByNivel = async(jor_id) =>{
  try {
      const asignaturas = await asignaturaRepository.fetchAllByNivel(jor_id);
      return asignaturas;
  } catch (error) {
      throw new Error('Error al obtener las asignaturas: ' + error.message);
  }
}
const deleteAsignatura=async(idAsignatura)=> {
    try {
      const asignatura = await asignaturaRepository.findAsignaturaById(idAsignatura);
      if (!asignatura) {
        throw new Error('Asignatura no encontrada');
      }
      return await asignaturaRepository.deleteAsignatura(idAsignatura);
    } catch (error) {
      throw new Error('Error en el servicio: ' + error.message);
    }
  }

module.exports = {asignaturaCreate,getAllAsignaturas,deleteAsignatura,
  getAllAsignaturasByJornada,getAllAsignaturasByNivel,getAllAsignaturasBySeccion};
