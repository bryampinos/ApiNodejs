const docenteRepository = require('../repository/docenteRepository');
const asignacionDocenteRepository = require ('../repository/asignacionDocenteMateriaRepository')
const jwt = require('jsonwebtoken');
const docenteCreate = async (docente) => {
    try {
        
        return await docenteRepository.createDocente(docente)
    } catch (error) {
        console.error('Error al registrar el docente:', error);
        throw error; // Propagar el error para que se maneje adecuadamente fuera de la función
    }

}   

const asignacionDocente = async (asignacion)=>{
try {
    
    const token = asignacion.token
    const secret = process.env.SECRET;
    const decoded = jwt.decode(token, secret);
    asignacion.docente_iddocente= decoded.idRol
    asignacion.IdAsignacion = decoded.idRol + "_"+asignacion.asignatura_idasignatura+"_"+asignacion.curso_idCurso;
    
    return await docenteRepository.asignarAsignatura(asignacion)
} catch (error) {
    console.error('Error al asignar la asignatura :', error);
    throw error; 
}


}

const getDocenteById= async (id)=>{
    return docenteRepository.findRepresenmtanteById(id);
}
module.exports={
    docenteCreate,
    asignacionDocente,
    getDocenteById
}
