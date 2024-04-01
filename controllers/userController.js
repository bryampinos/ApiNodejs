const userService = require('../services/userService');

const register = async (req, res) => {
  try {

    
    const user = await userService.register(req.body);
  res.json("usuario registrado");
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
  
};

const login = async (req, res) => {
  try {
    const { user, token, rol } = await userService.login(req.body.email, req.body.password);
    res.json({ user, token, rol});
 
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
};

module.exports = {
  register,
  login,
};
