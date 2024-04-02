const Estudiante = require('../models/estudiante')
const estudianteCreate = async (estudiante) => {
    try {
        return await Estudiante.create(estudiante);
    } catch (error) {
        console.error('Error al registrar el docente:', error);
        throw error; // Propagar el error para que se maneje adecuadamente fuera de la función
    }

}

module.exports={estudianteCreate}
