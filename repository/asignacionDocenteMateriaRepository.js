const Asignacion = require('../models/asignaciónDocenteMateria')
const finfByDocente = async(id)=>{
        try {
            const asignacion = await Asignacion.findAll({ 
                where: { docente_iddocente: id } 
            });
            return asignacion;
        } catch (error) {
            throw new Error('Error al obtener el usuario de la base de datos: ' + error.message);
        }
    
}

module.exports={finfByDocente}