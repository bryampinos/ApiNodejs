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

const findDocenteById = async (req, res )=>{
  const docenteId = req.params.id;
  docenteService.getDocenteById(docenteId)
      .then(user => {
          if (!user) {
              res.status(404).json({ message: 'Usuario no encontrado' });
          } else {
              res.status(200).json(user);
          }
      })
      .catch(err => {
          console.log(err);
          res.status(500).json({ error: err });
      });

}


  module.exports={
    loginDocente, asignacionMateria,findDocenteById
  }


  