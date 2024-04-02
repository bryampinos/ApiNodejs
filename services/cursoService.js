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
module.exports={createCurso}