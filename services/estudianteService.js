
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
        console.error('Error al registrar el estudiante:', error);
        throw error; 
    }


}

const getAllEstudiantes = async ()=>{
    try {
        const estudiantes = await estudianteRepository.fetchAll();
        return estudiantes;
    } catch (error) {
        throw new Error('Error al obtener los usuarios: ' + error.message);
    }

}

const getEstudianteById = async (id) => {
    return estudianteRepository.findById(id);
  };
  const getEstudianteByIdEstudiante= async (id) => {
    return estudianteRepository.findEstudianteById(id);
  };
  const getEstudianteByIdRepresentante = async (id) => {
    return estudianteRepository.findByIdRepresentante(id);
  };
module.exports={register,getAllEstudiantes,getEstudianteById,getEstudianteByIdRepresentante,getEstudianteByIdEstudiante}