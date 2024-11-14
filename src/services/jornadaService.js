
const jornadaRepository = require('../repository/jornadaRepository')
const jornadaCreate = async(inspector) =>{
    try {
        return await jornadaRepository.createJornada(inspector)
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

module.exports = {jornadaCreate,getAllJornadas}