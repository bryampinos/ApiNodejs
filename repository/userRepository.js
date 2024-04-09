const User = require('../models/user');

const createUser = async (user) => {
  return await User.create(user);
};

const findUserByEmail = async (email) => {
  const user = await User.findOne({ where: { email } });
return user;
};
const findUserByEmailLogin = async (email) => {
  const user = await User.findOne({ where: { email } });
  if (!user) {
    throw new Error('Usuario no encontrado');
  }
  return user;
};


const findUserByCedula = async (cedula) => {
  return await User.findOne({ where: { cedula } });
};

module.exports = {
  createUser,
  findUserByEmail,
  findUserByCedula,
  findUserByEmailLogin
};
