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

const fetchAll = async () => {
  try {
      const users = await User.findAll();
      return users;
  } catch (error) {
      throw new Error('Error al obtener los usuarios de la base de datos: ' + error.message);
  }
};
const findById = async (id) => {
  try {
      const user = await User.findByPk(id);
      return user;
  } catch (error) {
      throw new Error('Error al obtener el usuario de la base de datos: ' + error.message);
  }
};

const deleteUser = async (id) => {
  return await User.destroy({
      where: { iduser: id }
  });
}

module.exports = {
  createUser,
  findUserByEmail,
  findUserByCedula,
  findUserByEmailLogin,
  fetchAll,
  deleteUser,
  findById
};
