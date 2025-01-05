const userService = require('../services/userService');

const register = async (req, res) => {
  try {
    const user = await userService.register(req.body);
  res.json(user);
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
  
};

const login = async (req, res) => {
  try {
    const token  = await userService.login(req.body.email, req.body.password);
    res.json({token});
   
 
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
};

const getUsers = async (req, res) => {
  try {
    
      const users = await userService.getAllUsers(req.query);
      res.json(users);
  } catch (error) {
      res.status(500).json({ message: error.message });
  }
};
const getjorDocente = async (req, res) => {
  try {
      const token = await userService.getDocenteJor(req.params.id);
      res.json(token);
  } catch (error) {
      res.status(500).json({ message: error.message });
  }
};
const getUsersByRoles = async (req, res) => {
  try {
    const userId = req.params.rol_id;
      const users = await userService.getUsersByRol(userId);
      res.json(users);
  } catch (error) {
      res.status(500).json({ message: error.message });
  }
};
const getUser = (req, res, next) => {
  const userId = req.params.id;
  userService.getUserById(userId)
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
};

const deleteUser =async(req, res)=>{
  const { id } = req.params;
  try {
    await userService.deleteUser(id);
    res.status(200).send({ message: 'Usuario eliminado exitosamente' });
} catch (error) {
    res.status(500).send({ message: 'Error al eliminar el usuario: ' + error.message });
}
}

const changePassword=async(req,res)=>{
  try {
   // const { userId, newPassword } = req.body;
    const user = await userService.changePassword(req.body);
    res.status(200).json({ message: 'USUARIO ACATUALIZADO' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
module.exports = {
  register,
  login,
  getUsers,
  getUser,
  deleteUser,
  changePassword,
  getUsersByRoles,
  getjorDocente
};
