const especilidadRepository = require("../repository/especilidadRepository");

const getEspecilidades = async () => {
    try {
        return await especilidadRepository.getAllEspecialidades()
    } catch (error) {
        console.error('Error al registrar el docente:', error);
        throw error; // Propagar el error para que se maneje adecuadamente fuera de la función
    }

}   
const createEspecialidad = async(especialidad) =>{
    try {
       
        return await especilidadRepository.createEspecialidad(especialidad)
    } catch (error) {
        console.error('Error al registrar el inspector:', error);
        throw error; 
    }


}
const getEspecialidadById = async(especialidad_id) =>{
    try {
       
        return await especilidadRepository.findEspecialidadById(especialidad_id)
    } catch (error) {
        console.error('Error al registrar el inspector:', error);
        throw error; 
    }


}
module.exports={
    getEspecilidades,
    createEspecialidad,
    getEspecialidadById
}