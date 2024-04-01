const userService = require('../services/userService');

const loginDocente = async (req, res) => {

    try {
      const { docente, token } = await userService.login(req.body.email, req.body.password);
      res.json("el usuario es docente");
   
    } catch (error) {
      res.status(401).json({ message: error.message });
    }
  };
  module.exports={
    loginDocente
  }
  