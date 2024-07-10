const jwt = require('jsonwebtoken');
const atrasoRepository = require('../repository/atrasoRepository')
const atrasoCreate = async (atraso) => {
    try {
        
const token = atraso.token
const secret = process.env.SECRET;
const decoded = jwt.decode(token, secret);
atraso.isnpector_idIsnpector=decoded.idRol;
const fechaActual = new Date();
const anio = fechaActual.getFullYear();
const mes = fechaActual.getMonth() + 1;
const dia = fechaActual.getDate();
const horas = fechaActual.getHours();
const minutos = fechaActual.getMinutes();
const segundos = fechaActual.getSeconds();
const fechaFormateada = `${anio}-${mes.toString().padStart(2, '0')}-${dia.toString().padStart(2, '0')} ${horas.toString().padStart(2, '0')}:${minutos.toString().padStart(2, '0')}:${segundos.toString().padStart(2, '0')}`;
const [fecha, hora] = fechaFormateada.split(' ');
atraso.registroFecha= fecha
atraso.registroHora= hora

console.log(atraso)
return await atrasoRepository.create(atraso)
    } catch (error) {
        console.error('Error al registrar el docente:', error);
        throw error; // Propagar el error para que se maneje adecuadamente fuera de la función
    }

}   

const findByInspector = async (id) => {
    try {
        const atraso = atrasoRepository.findbyInspector(id);
        
        return (atraso)
    } catch (error) {
        console.error('error al buscar los atrasos ', error);
        throw error
    }
   
  };

  const reportes = async(id)=>{
    try {
        const reporte = atrasoRepository.generateDoc(id);
        return reporte ; 
    } catch (error) {
       throw new Error('Error en la generacion de reportes '+error.message)
    }
  }
  const reportesByEstudiante = async(id)=>{
    try {
        const reporte = atrasoRepository.generateDocByEstudiante(id);
        return reporte ; 
    } catch (error) {
       throw new Error('Error en la generacion de reportes '+error.message)
    }
  }
  const reportesByFecha = async(id)=>{
    try {
        const reporte = atrasoRepository.generateDocByfecha(id);
        return reporte ; 
    } catch (error) {
       throw new Error('Error en la generacion de reportes '+error.message)
    }
  }

  const getAllUsers = async (id) => {
  return await atrasoRepository.generateDoc(id);
};
module.exports = {atrasoCreate, findByInspector, reportes,reportesByEstudiante,reportesByFecha, getAllUsers};