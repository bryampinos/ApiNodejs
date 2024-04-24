const Estudiante = require('../models/estudiante')
const estudianteCreate = async (estudiante) => {
    try {
        return await Estudiante.create(estudiante);
    } catch (error) {
        console.error('Error al registrar el docente:', error);
        throw error; // Propagar el error para que se maneje adecuadamente fuera de la función
    }

}

const fetchAll =async ()=>{
    try {
        const estudiantes = await Estudiante.findAll();
        return estudiantes;
    } catch (error) {
        throw new Error('Error al obtener los usuarios de la base de datos: ' + error.message);
    }
}

const findById = async(id)=>{
    try {
        const estudiante = await Estudiante.findAll({ 
            where: { curso_idCurso: id } 
        });
        return estudiante;
    } catch (error) {
        throw new Error('Error al obtener el usuario de la base de datos: ' + error.message);
    }
}
const findByIdRepresentante = async(id)=>{
    try {
        const estudiante = await Estudiante.findAll({ 
            where: { representantes_idrepresentantes: id } 
        });
        return estudiante;
    } catch (error) {
        throw new Error('Error al obtener el usuario de la base de datos: ' + error.message);
    }
}
module.exports={estudianteCreate,fetchAll,findById,findByIdRepresentante}
