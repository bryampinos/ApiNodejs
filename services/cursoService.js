const cursoRepository=require('../repository/cursoRepository')

const createCurso = async(curso) =>{
    
    try {
        if (!curso.idCurso || !curso.curso|| !curso.paralelo  ) {
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
module.exports={createCurso, getAllCursos}