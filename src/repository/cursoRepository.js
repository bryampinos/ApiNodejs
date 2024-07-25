const Curso=require('../models/curso')

const cursoRegister = async (curso) => {
  try {
    return await Curso.create(curso);
  } catch (error) {
    throw new Error('Error al crear el curso en la base de datos  ' + error.message);
  }
    
  };

  const fetchAll = async ()=>{
    try {
      const cursos = await Curso.findAll();
      return cursos;
  } catch (error) {
      throw new Error('Error al obtener los cursos de la base de datos: ' + error.message);
  }
  }


const findCursoById = async(idCurso)=>{
  try {
    return await Curso.findByPk(idCurso);
  } catch (error) {
    throw new Error('Error al obtener los cursos de la base de datos: ' + error.message);
  }
  
}

  const EditarCurso =async(idCurso, updateData)=>{
    try {
      console.log("entro al repo")
      const [updated] = await Curso.update(updateData, {
        where: { idCurso },
      });
      return updated;
    } catch (error) {
      throw new Error('Error al obtener los cursos de la base de datos: ' + error.message);
    }
   
  }

  const deleteCurso=async(idCurso)=> {
    try {
      const deleted = await Curso.destroy({
        where: { idCurso },
      });
      if (deleted === 0) {
        throw new Error('Curso no encontrado');
      }
      return deleted;
    } catch (error) {
      throw new Error('Error al eliminar el curso de la base de datos: ' + error.message);
    }
  }
   module.exports={cursoRegister,fetchAll, findCursoById, EditarCurso,deleteCurso}

 