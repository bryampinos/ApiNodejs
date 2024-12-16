
const nivelAcademicoRepo = require('../repository/nivelAcademicoRepository')
const nivelCreate = async(nivel) =>{
    try {
        return await nivelAcademicoRepo.createNivelAcademico(nivel)
    } catch (error) {
        console.error('Error al registrar el nivel academico:', error);
        throw error; 
    }



}
const getAllNiveles = async() =>{
    try {
       return await nivelAcademicoRepo.getAllNiveles();
      
    } catch (error) {
        throw new Error('Error al obtener los niveles: ' + error.message);
    }
}
const getJornadaById = async(req) =>{
    try {
       return await nivelAcademicoRepo.getnivelesById(req);
      
    } catch (error) {
        throw new Error('Error al obtener los niveles: ' + error.message);
    }
}
module.exports={nivelCreate,getAllNiveles,getJornadaById}