const docenteRepository = require('../repository/docenteRepository')
const asignacionDocenteRepository = require ('../repository/asignacionDocenteMateriaRepository')
const jwt = require('jsonwebtoken');
const docenteCreate = async (docente) => {
    try {
        
        return await docenteRepository.createDocente(docente)
    } catch (error) {
        console.error('Error al registrar el docente:', error);
        throw error; // Propagar el error para que se maneje adecuadamente fuera de la función
    }

}   

const asignacionDocente = async (asignacion)=>{
try {
    
    const token = asignacion.token
    const secret = process.env.SECRET;
    const decoded = jwt.decode(token, secret);
    const docente =  await docenteRepository.findByuser(decoded.user.iduser)
  

    asignacion.docente_iddocente = docente.iddocente
   
    // asignacion.IdAsignacion = decoded.idRol + "_"+asignacion.asignatura_idasignatura+"_"+asignacion.curso_idCurso;
    console.log(asignacion)
    return await docenteRepository.asignarAsignatura(asignacion)
} catch (error) {
 
    throw error; 
}


}
const registrarDocente = async (docente)=>{
  try {
      
      const token = docente.token
      const secret = process.env.SECRET;
      const decoded = jwt.decode(token, secret);
      if(decoded.idRol!='DOCENTE'){
        throw new Error('ESTO SOLO LO PUEDE REALIZAR LOS DOCENTES');
        
      }
      docente.user_iduser= decoded.user.iduser
     
      return await docenteRepository.crearDocente(docente)
  } catch (error) {
      console.error('Error al asignar la asignatura :', error);
      throw error; 
  }
  
  
  }
const getDocenteById= async (id)=>{
    return docenteRepository.findRepresenmtanteById(id);
}
const getAllDocentes = async() =>{
    try {
        const docentes = await docenteRepository.fetchAll();
        return docentes;
    } catch (error) {
        throw new Error('Error al obtener las asignaturas: ' + error.message);
    }
}
const updateDocente = async(iduser, updateData)=>{
    try {
      const docente = await docenteRepository.docenteById(iduser);
      if (!docente) {
        throw new Error('Docente no encontrado');
      }
      await docenteRepository.editardocente(iduser, updateData);
      return await docenteRepository.docenteById(iduser);
    } catch (error) {
      throw new Error('Erro en el service');
    }
   
  }
  const deleteDocente=async(iduser)=> {
    try {
      const docente = await docenteRepository.docenteById(iduser);
      if (!docente) {
        throw new Error('Docente no encontrado');
      }
      return await docenteRepository.deleteDocente(iduser);
    } catch (error) {
      throw new Error('Error en el servicio: ' + error.message);
    }
  }

const allDocentes = async()=>{
  try {
    return await docenteRepository.docentesAll()
  } catch (error) {
    throw new Error('Error en el servicio: ' + error.message);
  }
}
module.exports={
    docenteCreate,
    asignacionDocente,
    getDocenteById,
    getAllDocentes,
    updateDocente,
    deleteDocente,
    allDocentes,
    registrarDocente
}
