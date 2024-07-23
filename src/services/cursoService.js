const cursoRepository=require('../repository/cursoRepository')

const createCurso = async(curso) =>{
    
    try {
        

        if ( !curso.curso|| !curso.paralelo || !curso.especialidad  ) {
           
            throw new Error('Faltan datos obligatorios del curso');
        }
  
        curso.idCurso =curso.curso+curso.paralelo;
        
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

  const updateCurso = async(idCurso, updateData)=>{
    try {
      const curso = await cursoRepository.findCursoById(idCurso);
      if (!curso) {
        throw new Error('Curso not found');
      }
      await cursoRepository.EditarCurso(idCurso, updateData);
      return await cursoRepository.findCursoById(idCurso);
    } catch (error) {
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

module.exports={createCurso, getAllCursos, updateCurso, deleteCurso}