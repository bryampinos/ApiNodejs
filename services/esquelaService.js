const esquelaRepository = require('../repository/esquelaRepository')
const jwt = require('jsonwebtoken');

const esquelaCreate = async(esquela)=>{
try {
    if(!esquela.Motivo){
        throw new Error('FALTA EL MOTIVO');
    }else if(!esquela.estudiantes_idEstudiantes){
        throw new Error(' NO SE A SELECCIONADO AL ESTUDIANTE');
    }
    //AQUI SACAMOS EL ID DEL TOKEN 
    const token = esquela.token
    const secret = process.env.SECRET;
    const decoded = jwt.decode(token, secret);
    esquela.docente_docente = decoded.idRol;
    //AQUI ESTOY REWGISTRANDO Y DANDO FOTMATO A LA FECHA DE ACUEDO A CUANDO ENTRRA 
    const fechaActual = new Date();
    const fechaFormateada = fechaActual.toLocaleString('es-EC', { timeZone: 'America/Guayaquil' });
    esquela.Fecha=fechaFormateada
    return await esquelaRepository.create(esquela);
} catch (error) {
    console.error('Error al registrar la esquela:', error);
        throw error; 
}



}
const getEsquelaByEstudiante = async (id) => {
    try {
        return esquelaRepository.findById(id);
    } catch (error) {
        console.error('error al buscar la esquela ', error);
        throw error
    }
   
  };


module.exports={esquelaCreate,getEsquelaByEstudiante}