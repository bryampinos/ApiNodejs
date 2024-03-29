const User = require('../models/user');

const createUser = async (user) => {
  return await User.create(user);
};

const findUserByEmail = async (email) => {
  return await User.findOne({ where: { email } });
};

module.exports = {
  createUser,
  findUserByEmail
};
