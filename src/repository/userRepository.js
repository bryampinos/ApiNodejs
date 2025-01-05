const User = require('../models/user');

const createUser = async (user) => {
   const usuario = await  User.create(user);
   console.log(usuario)
   return findUserByCedula(usuario.cedula)
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
const findAdministradorById = async (user_iduser)=>{
     
  const administrador = await User.findOne({ where: { user_iduser } });
return administrador.user_iduser
}

const findUserByCedula = async (cedula) => {
  return await User.findOne({ where: { cedula } });
};
const validacion = async (cedula) => {
  // Verificar que la cédula tenga exactamente 10 dígitos
  if (!/^\d{10}$/.test(cedula)) {
    return false;
}

// Obtener los primeros 9 dígitos
const digits = cedula.split('').map(Number);

// Multiplicadores para el algoritmo
const multipliers = [2, 1, 2, 1, 2, 1, 2, 1, 2];

// Aplicar el algoritmo de módulo 10
let sum = 0;
for (let i = 0; i < multipliers.length; i++) {
    let product = digits[i] * multipliers[i];
    // Si el producto es mayor o igual a 10, sumamos los dígitos del producto
    if (product >= 10) {
        product = product - 9; // Equivalente a sumar los dígitos del producto
    }
    sum += product;
}

// Obtener el dígito verificador
const lastDigit = digits[9];
const residue = sum % 10;
const checkDigit = residue === 0 ? 0 : 10 - residue;

// Comparar el dígito verificador calculado con el último dígito de la cédula
return checkDigit === lastDigit;
};

const fetchAll = async () => {
  try {
    const users = await User.findAll()
      return users;
  } catch (error) {
      throw new Error('Error al obtener los usuarios de la base de datos: ' + error.message);
  }
};
const getDocenteJornada = async () => {
  try {
    const users = await User.findAll()
      return users;
  } catch (error) {
      throw new Error('Error al obtener los usuarios de la base de datos: ' + error.message);
  }
};

const getUserByRol = async (rol) => {
  try {
    const users = await User.findAll({
      where: {
        rol_id: rol,  
      },
    });
      return users;
  } catch (error) {
      throw new Error('Error al obtener los usuarios de la base de datos: ' + error.message);
  }
};
const findById = async (iduser) => {
  try {
      const user = await User.findByPk(iduser);
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

const updatePassword = async(user)=>{
  try {
    await User.update(user, {
      where: { iduser: user.iduser }, // Filtra por el ID del usuario
    }); 
  } catch (error) {
    throw new Error('Error al actualzar el usuario de la base de datos: ' + error.message); 
  }


}

module.exports = {
  createUser,
  findUserByEmail,
  findUserByCedula,
  findUserByEmailLogin,
  fetchAll,
  deleteUser,
  findById,
  validacion,
  findAdministradorById,
  updatePassword,
  getUserByRol, 
  getDocenteJornada
};
