
const estudianteRepository=require('../repository/estudianteRepository')
const representanteRepository = require('../repository/representanteRepository')
const jwt = require('jsonwebtoken');

const register = async(estudiante) =>{
    try {
        if (!estudiante.NombreEst || !estudiante.ApellidoEst|| !estudiante.cedula || !estudiante.curso_idCurso  ) {
            throw new Error('Faltan datos obligatorios del estudiante');
        }
estudiante.idEstudiantes="EST"+estudiante.cedula

const token = estudiante.token
const secret = process.env.SECRET;
const decoded = jwt.decode(token, secret);
estudiante.representantes_idrepresentantes=decoded.idRol;
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