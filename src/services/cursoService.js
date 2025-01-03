const cursoRepository=require('../repository/cursoRepository')

const createCurso = async(curso) =>{
    
    try {
        

        if ( !curso.nivel_curso|| !curso.paralelo_curso || !curso.especialidad_id || !curso.jor_id || !curso.nivel_id  ) {
           
            throw new Error('Faltan datos obligatorios del curso');
        }
  
        
        
        return  await cursoRepository.cursoRegister(curso);
    } catch (error) {
        console.error('Error al registrar el curso:', error);
        throw error; 
    }


}
const getAllCursos = async()=>{
try {
    const cursos = await cursoRepository.fetchAll();
      return cursos;
} catch (error) {
    throw new Error('Error al obtener los cursos: ' + error.message);
}
}
const getCursoById = async(curso_id)=>{
  try {
      const cursos = await cursoRepository.findCursoById(curso_id);
        return cursos;
  } catch (error) {
      throw new Error('Error al obtener los cursos: ' + error.message);
  }
  }

  const updateCurso = async(idCurso, updateData)=>{
    try {
      
      const curso = await cursoRepository.findCursoById(idCurso);
      
      if (!curso) {
        throw new Error('Curso not found');
      }
      if (updateData.paralelo_curso) {
        updateData.paralelo_curso=updateData.paralelo_curso.toUpperCase()
      }
      await cursoRepository.EditarCurso(idCurso, updateData);
      return await cursoRepository.findCursoById(idCurso);
    } catch (error) {
      console.log(error)
      throw new Error('Erro en el service');
    }
   
  }
  const deleteCurso=async(idCurso)=> {
    try {
      const curso = await cursoRepository.findCursoById(idCurso);
      if (!curso) {
        throw new Error('Curso no encontrado');
      }
      return await cursoRepository.deleteCurso(idCurso);
    } catch (error) {
      throw new Error('Error en el servicio: ' + error.message);
    }
  }

module.exports={createCurso, getAllCursos, updateCurso, deleteCurso,getCursoById}