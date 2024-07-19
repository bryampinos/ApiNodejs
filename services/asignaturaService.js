const asignaturaRepository = require('../repository/asignaturaRepository')
const asignaturaCreate = async (asignatura) => {
    try {
        if (!asignatura.nombre || !asignatura.descripcion  ) {
            throw new Error('Faltan datos obligatorios de la asignatura');
        }
        asignatura.idasignatura = asignatura.nombre
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

module.exports = {asignaturaCreate,getAllAsignaturas,deleteAsignatura};
