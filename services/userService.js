const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const userRepository = require('../repository/userRepository');
const docenteService = require('./docenteService');
const representanteService = require('./representanteService')
const inspectorService = require('./inspectorService')
const register = async (user) => {
    try {
        // Verificar si los campos requeridos están presentes en el objeto user
        if (!user.password || !user.email || !user.apellido || !user.nombre || !user.password || !user.cedula || !user.rol) {
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
        // Hashear la contraseña
        const passwordHash = await bcrypt.hash(user.password, 10);
        user.password = passwordHash;
        // Generar iduser concatenando cedula y rol
        user.iduser = "user"+user.cedula;
        // Crear el usuario en el repositorio
       const resultado = await userRepository.createUser(user);
       //envia los datos dependiendo su rol 

       //DOCENTE
        if (user.rol === 'docente') {
          const docente = {
              iddocente: "LIC"+user.cedula,
              user_iduser: user.iduser,
              asignatura: user.asignatura
          }
           await docenteService.docenteCreate(docente);
      }
      //REPRESENTANTE
      else if (user.rol === 'representante') {
      const representante = {
        idrepresentantes: "REP"+ user.cedula,
        user_iduser: user.iduser
      }
      await representanteService.representanteCreate(representante)
      }
      else if (user.rol === 'inspector'){
        const inspector = {
          idIsnpector: "INS"+user.cedula,
          user_iduser: user.iduser
        }
       await inspectorService.inspectorCreate(inspector)
      }
        return  resultado ;
    } catch (error) {
        console.error('Error al registrar usuario:', error);
        throw error; 
    }
};

const login = async (email, password) => {
  const user = await userRepository.findUserByEmail(email);
  if (user && await bcrypt.compare(password, user.password)) {
    const token = jwt.sign({ id: user.id }, 'secret', { expiresIn: '1h' });
    return { user, token };
  }
   throw new Error('El correo electrónico ya está en uso');
};

module.exports = {
  register,
  login
};