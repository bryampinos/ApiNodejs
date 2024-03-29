const docenteRepository = require('../repository/docenteRepository');

const docenteCreate = async (docente) => {
    try {
        return await docenteRepository.createDocente(docente)
    } catch (error) {
        console.error('Error al registrar el docente:', error);
        throw error; // Propagar el error para que se maneje adecuadamente fuera de la función
    }

}   

module.exports={
    docenteCreate
}
