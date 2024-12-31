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
const registrar = async(req , res) =>{
  try {
    const docente = await docenteService.registrarDocente(req.body);
    res.json({message: "docente creado "});
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

const getDocentes = async (req, res) => {
  try {
      const docentes = await docenteService.getAllDocentes();
      res.json(docentes);
  } catch (error) {
      res.status(500).json({ message: error.message });
  }
};
const  updateDocente=async(req, res)=> {
  try {
    const iduser = req.params.id;
    const updateData = req.body;
    const updateDocente = await docenteService.updateDocente(iduser, updateData);
    res.json(updateDocente);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
}
const deleteDocente = async(req, res)=> {
  try {
    const iduser = req.params.id;
    await docenteService.deleteDocente(iduser);
    res.status(204).json(); // 204 No Content
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
}

const allDocentes = async(req, res)=>{
  try {
    const docentes = await docenteService.allDocentes()
    res.json(docentes)
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
}
  module.exports={
    loginDocente, 
    asignacionMateria,
    findDocenteById,
    getDocentes,
    updateDocente,
    deleteDocente,
    allDocentes,
    registrar
  }


  