
const estudianteRepository=require('../repository/estudianteRepository')
const representanteRepository = require('../repository/representanteRepository')
const jwt = require('jsonwebtoken');
const QRCode = require('qrcode');

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
  const generarCodigoQR = async (codigo) => {
    try {
        const qrCodeDataURL = await QRCode.toDataURL(codigo);
        return qrCodeDataURL;
    } catch (error) {
        throw new Error('Error al generar el código QR');
    }
};
const getEstudianteByCedula = async (id) => {
    return estudianteRepository.findByCedula(id);
  };

  const updateEstudiante = async(idEstudiante, updateData)=>{
    try {
      const estudiante = await estudianteRepository.estudianteById(idEstudiante);
      if (!estudiante) {
        throw new Error('Docente no encontrado');
      }
      await estudianteRepository.editarEstudiante(idEstudiante, updateData);
      return await estudianteRepository.estudianteById(idEstudiante);
    } catch (error) {
      throw new Error('Erro en el service');
    }
   
  }
  const deleteEstudiante=async(idEstudiante)=> {
    try {
      const estudiante = await estudianteRepository.estudianteById(idEstudiante);
      if (!estudiante) {
        throw new Error('Estudiante no encontrado');
      }
      return await estudianteRepository.deleteEstudiante(idEstudiante);
    } catch (error) {
      throw new Error('Error en el servicio: ' + error.message);
    }
  }
module.exports={register,getAllEstudiantes,getEstudianteById,getEstudianteByIdRepresentante,
    getEstudianteByIdEstudiante,generarCodigoQR, getEstudianteByCedula, updateEstudiante,deleteEstudiante}