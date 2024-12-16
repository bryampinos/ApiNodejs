
const jornadaRepository = require('../repository/jornadaRepository')
const jornadaCreate = async(jornada) =>{
    try {
        if ( !jornada.jor_nombre ) {
            throw new Error('Faltan datos obligatorios de la jornada');
        }
        return await jornadaRepository.createJornada(jornada)
    } catch (error) {
        console.error('Error al registrar el inspector:', error);
        throw error; 
    }


}
const getAllJornadas = async() =>{
    try {
       return await jornadaRepository.getAllJornadas();
      
    } catch (error) {
        throw new Error('Error al obtener los representantes: ' + error.message);
    }
}
const getJotnadaById = async(req) =>{
    try {
       return await jornadaRepository.getJornadaById(req);
      
    } catch (error) {
        throw new Error('Error al obtener los representantes: ' + error.message);
    }
}
module.exports = {jornadaCreate,getAllJornadas,getJotnadaById,getJotnadaById}