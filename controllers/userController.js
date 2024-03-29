const userService = require('../services/userService');

const register = async (req, res) => {
  const user = await userService.register(req.body);
  res.json("usuario registrado exitosament");
};

const login = async (req, res) => {
  try {
    const { user, token } = await userService.login(req.body.email, req.body.password);
    res.json({ user, token});
 
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
};

module.exports = {
  register,
  login
};
