const rolUsuarioRepository = require('../repository/rolUsuarioRepository')
const getAllRoles = async (rol_id) => {
  try {
      const roles = await rolUsuarioRepository.getRoles(rol_id);
      return roles;
  } catch (error) {
      throw new Error('Error al obtener los usuarios: ' + error.message);
  }
};

module.exports = {
    getAllRoles
  };