const Asignacion = require('../models/asignaciónDocenteMateria');
const asignatura = require('../models/asignatura');
const curso = require('../models/curso');
const finfByDocente = async(id)=>{
        try {
            const asignacion = await Asignacion.findAll({ 
                where: { docente_iddocente: id } , include: [
                    {
                      model: asignatura,
                      
                    },
                    {
                      model: curso,  // Incluye el modelo Asignacion
                    },
                  ],
            });
            return asignacion;
        } catch (error) {
            throw new Error('Error al obtener el usuario de la base de datos: ' + error.message);
        }
    
}
const findById = async(id)=>{
    try {
        const asignacion = await Asignacion.findOne({ 
            where: { idAsignacion: id } 
        });
        return asignacion;
    } catch (error) {
        throw new Error('Error al obtener el usuario de la base de datos: ' + error.message);
    }

}
const updateAsignacion = async(asig)=>{
    try {
        const asignacion = await Asignacion.update(asig,{ 
            where: { idAsignacion: asig.idAsignacion } 
        });
        return asignacion;
    } catch (error) {
        throw new Error('Error al obtener el usuario de la base de datos: ' + error.message);
    }

}
const eliminarAsignacion = async (asig) => {
    try {
        const asignacion = await Asignacion.destroy({
            where: { idAsignacion: asig }
        });

        // Verifica si la asignación fue eliminada
        if (!asignacion) {
            // Si no se encontró la asignación para eliminar, retorna un mensaje específico
            return { success: false, message: 'Asignación no encontrada o ya eliminada' };
        }

        return { success: true, message: 'Asignación eliminada exitosamente', data: asignacion };
    } catch (error) {
        // Devuelve un objeto con detalles del error sin lanzar una excepción
        return { success: false, message: 'Error al eliminar el usuario de la base de datos', error: error.message };
    }
}

module.exports={finfByDocente,findById,updateAsignacion,eliminarAsignacion}