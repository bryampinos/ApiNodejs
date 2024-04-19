const userService = require('../services/userService');

const register = async (req, res) => {
  try {
    const user = await userService.register(req.body);
  res.json({message: "usuario registrado"});
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
  
};

const login = async (req, res) => {
  try {
    const { token } = await userService.login(req.body.email, req.body.password);
    res.json({ message: 'Inicio de sesión exitoso',token});
   
 
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
};

const getUsers = async (req, res) => {
  try {
      const users = await userService.getAllUsers();
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

module.exports = {
  register,
  login,
  getUsers,
  getUser
};
