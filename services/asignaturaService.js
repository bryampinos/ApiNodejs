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
module.exports = {asignaturaCreate,getAllAsignaturas};
