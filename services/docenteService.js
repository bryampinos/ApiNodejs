const docenteRepository = require('../repository/docenteRepository');
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
    return await docenteRepository.asignarAsignatura(asignacion)
} catch (error) {
    console.error('Error al asignar la asignatura :', error);
    throw error; 
}


}

module.exports={
    docenteCreate,
    asignacionDocente
}
