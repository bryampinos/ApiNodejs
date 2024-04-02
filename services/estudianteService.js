
const estudianteRepository=require('../repository/estudianteRepository')
const representanteRepository = require('../repository/representanteRepository')

const register = async(estudiante) =>{
    try {
        if (!estudiante.NombreEst || !estudiante.ApellidoEst|| !estudiante.cedula || !estudiante.representantes_idrepresentantes|| !estudiante.curso_idCurso  ) {
            throw new Error('Faltan datos obligatorios del estudiante');
        }
estudiante.idEstudiantes="EST"+estudiante.cedula
const verficiarRepresentante = await representanteRepository.verificarRepresentante(estudiante.representantes_idrepresentantes)
if (verficiarRepresentante) {
    
}
        return  await estudianteRepository.estudianteCreate(estudiante);
    } catch (error) {
        console.error('Error al registrar el curso:', error);
        throw error; 
    }


}
module.exports={register}