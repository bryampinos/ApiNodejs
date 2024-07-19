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
const findEstudianteById = async(idEstudiantes)=>{
    try {
        const estudiante = await Estudiante.findOne({ where: { idEstudiantes } });
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
const findByCedula = async(id)=>{
    try {
        const estudiante = await Estudiante.findOne({ where: {cedula: id } });
        return estudiante;
    } catch (error) {
        throw new Error('la cedula no existe: ' + error.message);
    }
}
const estudianteById = async(idEstudiante)=>{
    try {
      return await Estudiante.findByPk(idEstudiante);
    } catch (error) {
      throw new Error('Error al obtener los cursos de la base de datos: ' + error.message);
    }
    
  }
  const editarEstudiante =async(idEstudiante, updateData)=>{
    try {
  
      const [updated] = await Estudiante.update(updateData, {
        where: { idEstudiante },
      });
      return updated;
    } catch (error) {
      throw new Error('Error al obtener los estudiantes de la base de datos: ' + error.message);
    }
   
    
  }

  const deleteEstudiante=async(idEstudiante)=> {
    try {
      const deleted = await Estudiante.destroy({
        where: { idEstudiante },
      });
      if (deleted === 0) {
        throw new Error('Estudiante no encontrado');
      }
      return deleted;
    } catch (error) {
      throw new Error('Error al eliminar el docente de la base de datos: ' + error.message);
    }
  }
module.exports={estudianteCreate,fetchAll,findById,findByIdRepresentante,findEstudianteById,findByCedula,
    estudianteById,editarEstudiante, deleteEstudiante
}
