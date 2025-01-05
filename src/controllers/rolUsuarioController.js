const rolUsuarioService = require('../services/rolUsuarioService')

const getRoles = async (req, res) => {
    try {
        if(req.query.rol_id){
            console.log('imprimio')
        }
        const roles = await rolUsuarioService.getAllRoles(req.query.rol_id);
        res.json(roles);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
  };
  module.exports={getRoles};