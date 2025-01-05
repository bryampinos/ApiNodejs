const bcrypt = require('bcryptjs');
require ('dotenv').config();
const jwt = require('jsonwebtoken');
const userRepository = require('../repository/userRepository');
const docenteService = require('./docenteService');
const representanteService = require('../services/representanteService')
const inspectorService = require('./inspectorService')
const docenteRepository = require('../repository/docenteRepository')
const inspectorRepository = require('../repository/inspectorRepository')
const representanteRepository = require('../repository/representanteRepository')
const administradorRepository = require('../repository/administradorRepository')
const register = async (user) => {
    try {
        // Verificar si los campos requeridos están presentes en el objeto user
        if ( !user.email || !user.apellido || !user.nombre || !user.password || !user.cedula || !user.rol_id) {
            throw new Error('Faltan datos obligatorios del usuario');
        }
         // Verificar si el correo electrónico ya existe en la base de datos
         const existingUser = await userRepository.findUserByEmail(user.email);
         if (existingUser) {
          throw new Error('El correo electrónico ya está en uso');
         }
         //verficar si la cedula ya existe en la base de datos
         const existingCedula = await userRepository.findUserByCedula(user.cedula);
         if (existingCedula) {
          throw new Error('La cedula  ya está en uso');
         }
         //VALIDAR EL NUMERO DE CEDULA 
         
        // const validacionCedula = await userRepository.validacion(user.cedula);
         //if (!validacionCedula) {
          //throw new Error('La cédula es inválida');
     // } else {
       //   console.log('La cédula es válida');
     // }
        // Hashear la cont
        
        const passwordHash = await bcrypt.hash(user.password, 10);
        user.password = passwordHash;
        // Generar iduser concatenando cedula y rol
        // Crear el usuario en el repositorio
       const resultado = await userRepository.createUser(user);
     const asignacion = await userRepository.findUserByEmailLogin(user.email)

       const usuarioRol={user_iduser:asignacion.iduser}
        if(user.rol_id==1){
         await administradorRepository.createAdministeador(usuarioRol)
        }
        if(user.rol_id==2){
         await inspectorRepository.createInspector(usuarioRol)
        }
        if(user.rol_id==3){
          //await docenteRepository.createDocente(usuarioRol)
         }
         if(user.rol_id==4){
          await representanteRepository.createRepresentante(usuarioRol)
         }
        return  resultado ;
    } catch (error) {
        console.error('Error al registrar usuario:', error);
        throw error; 
    }
};
//Aqui estoy realizando la logica del login 
const login = async (email, password) => {
  try {
    const user = await userRepository.findUserByEmailLogin(email);

  if (user && await bcrypt.compare(password, user.password)) {
    if (user.rol_id === 1) {//admin
    //  const idRol = await docenteRepository.findDocenteById(user.iduser);
      const token = jwt.sign({ user: user, idRol:'ADMIN'}, process.env.SECRET, { expiresIn: '1000h' });
      return { user, token };
    }else if (user.rol_id === 2){//inspector
    //  const idRol = await inspectorRepository.findInspectorByid(user.iduser);
      const token = jwt.sign({ user: user, idRol:'INSPECTOR'}, process.env.SECRET, { expiresIn: '1000h' });
      return { user, token };

    }else if (user.rol_id === 3){//DOCENTE
      //const idRol = await representanteRepository.findRepresentanteById(user.iduser);
      // const token = jwt.sign({ user: user, idRol:'DOCENTE'}, process.env.SECRET, { expiresIn: '1000h' });
      // return { user, token };
      const token =  await representanteRepository.buscarJornadasDocente(user.iduser)
      return {token}
    }else if (user.rol_id === 4){//representante
     // const idRol = await administradorRepository.finAdnministradorById(user.iduser);
      const token = jwt.sign({ user: user, idRol:'REPRESENTANTE'}, process.env.SECRET, { expiresIn: '1000h' });
      return { user, token };
      
    }
  }else{
      throw new Error('El usuario o contreña es incorrecto');
    }
  } catch (error) {
    console.error('usuario no registrado', error);
    throw error;
  }
  
   
};
const getAllUsers = async () => {
  try {
      const users = await userRepository.fetchAll();
      return users;
  } catch (error) {
      throw new Error('Error al obtener los usuarios: ' + error.message);
  }
};
const getUsersByRol = async (rol) => {
  try {
      const users = await userRepository.getUserByRol(rol);
      return users;
  } catch (error) {
      throw new Error('Error al obtener los usuarios: ' + error.message);
  }
};

const getUserById = async (id) => {
  return userRepository.findById(id);
};

const deleteUser = async(id)=>{
  return await userRepository.deleteUser(id);
}

const changePassword=async(user)=>{
  if (user.password){
    const hashedPassword = await bcrypt.hash(user.password, 10);
    user.password = hashedPassword
  }
 
  return await userRepository.updatePassword(user);
}
module.exports = {
  register,
  login,
  getAllUsers,
  getUserById,
  deleteUser,
  changePassword,
  getUsersByRol
};
