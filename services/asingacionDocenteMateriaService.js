const asignacionDocenteMateriaRepository= require('../repository/asignacionDocenteMateriaRepository')

const getAsignacionPorDocente = async(id)=>{
    return asignacionDocenteMateriaRepository.finfByDocente(id);
}

module.exports={getAsignacionPorDocente}