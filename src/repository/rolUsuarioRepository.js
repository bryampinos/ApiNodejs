const RolUsuario = require('../models/rol_usuario');
const { Op } = require('sequelize');
const getRoles = async (rol_id) => {
    try {
        if(rol_id==3)
        { 
         const users = await RolUsuario.findAll({ where: {
            rol_id: { [Op.notIn]: [1, 2] }
          }})
            
        return users;}
        else
        {const users = await RolUsuario.findAll()
            return users;}
     
    } catch (error) {
        throw new Error('Error al obtener los usuarios de la base de datos: ' + error.message);
    }
  };

  module.exports = {
    getRoles
  };