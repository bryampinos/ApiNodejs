const userService = require('../services/userService');
const docenteService = require('../services/docenteService')


const loginDocente = async (req, res) => {
    try {
      const { docente, token } = await userService.login(req.body.email, req.body.password);
      res.json("el usuario es docente");
   
    } catch (error) {
      res.status(401).json({ message: error.message });
    }
  };


const asignacionMateria = async(req , res) =>{
try {
  const asignacion = await docenteService.asignacionDocente(req.body);
  res.json({message: "asignatura asignada "});
} catch (error) {
  res.status(401).json({ message: error.message });
}
}



  module.exports={
    loginDocente, asignacionMateria
  }


  