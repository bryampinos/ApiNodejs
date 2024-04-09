const jwt = require('jsonwebtoken');
const atrasoRepository = require('../repository/atrasoRepository')
const atrasoCreate = async (atraso) => {
    try {
        
const token = atraso.token
const secret = process.env.SECRET;
const decoded = jwt.decode(token, secret);
atraso.isnpector_idIsnpector=decoded.idRol;
const fechaActual = new Date();
const fechaFormateada = fechaActual.toLocaleString('es-EC', { timeZone: 'America/Guayaquil' });

atraso.registroFecha= fechaFormateada
        return await atrasoRepository.create(atraso)
    } catch (error) {
        console.error('Error al registrar el docente:', error);
        throw error; // Propagar el error para que se maneje adecuadamente fuera de la función
    }

}   

module.exports = {atrasoCreate};