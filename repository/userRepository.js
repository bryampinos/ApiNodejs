const User = require('../models/user');

const createUser = async (user) => {
  return await User.create(user);
};

const findUserByEmail = async (email) => {
  return await User.findOne({ where: { email } });
};

const findUserByCedula = async (cedula) => {
  return await User.findOne({ where: { cedula } });
};

module.exports = {
  createUser,
  findUserByEmail,
  findUserByCedula
};
