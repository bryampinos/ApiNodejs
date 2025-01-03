const asignacionDocenteMateriaRepository= require('../repository/asignacionDocenteMateriaRepository')

const getAsignacionPorDocente = async(id)=>{
    try {
        return asignacionDocenteMateriaRepository.finfByDocente(id);
    } catch (error) {
        throw new Error('Erro en la asignacion del docente  ' + error.message);
    }
   
   
}
const getAsignacionById = async(id)=>{
    try {
        return asignacionDocenteMateriaRepository.findById(id);
    } catch (error) {
        throw new Error('Erro en la asignacion del docente  ' + error.message);
    }
   
}
const editarAsignacion = async(asignacion)=>{
    try {
        return asignacionDocenteMateriaRepository.updateAsignacion(asignacion);
    } catch (error) {
        throw new Error('Erro en la asignacion del docente  ' + error.message);
    }
   
}
const eliminarAsignacion = async(asignacion)=>{
    try {
        return asignacionDocenteMateriaRepository.eliminarAsignacion(asignacion);
    } catch (error) {
        throw new Error('Erro en la asignacion del docente  ' + error.message);
    }
   
}
module.exports={getAsignacionPorDocente,getAsignacionById,editarAsignacion,eliminarAsignacion}