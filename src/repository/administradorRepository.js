const Administrador = require('../models/administrador')

const createAdministeador = async (administrador) =>{
    return await Administrador.create(administrador);
}
const finAdnministradorById = async (user_iduser) => {
  const administrador = await Administrador.findOne({ where: { user_iduser } });
  return administrador.idAdministrador
};

module.exports={createAdministeador,finAdnministradorById}
