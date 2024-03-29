const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const userRepository = require('../repository/userRepository');
const docenteService = require('./docenteService');
const register = async (user) => {
    try {
        // Verificar si los campos requeridos están presentes en el objeto user
        if (!user.password || !user.cedula || !user.rol) {
            throw new Error('Faltan datos obligatorios del usuario');
        }
        
        // Hashear la contraseña
        const passwordHash = await bcrypt.hash(user.password, 10);
        user.password = passwordHash;

        // Generar iduser concatenando cedula y rol
        user.iduser = "user"+user.cedula;

        // Crear el usuario en el repositorio
      
        const newUser = await userRepository.createUser(user);
        
        if (user.rol === 'docente') {
          const docente = {
              iddocente: "PRO"+user.cedula,
              user_iduser: user.iduser,
              asignatura: user.asignatura
          };
           await docenteService.docenteCreate(docente);
      }


        return   newUser;
    } catch (error) {
        console.error('Error al registrar usuario:', error);
        throw error; // Propagar el error para que se maneje adecuadamente fuera de la función
    }
};

const login = async (email, password) => {
  const user = await userRepository.findUserByEmail(email);
  if (user && await bcrypt.compare(password, user.password)) {
    const token = jwt.sign({ id: user.id }, 'secret', { expiresIn: '1h' });
    return { user, token };
  }
  throw new Error('Invalid credentials');
};

module.exports = {
  register,
  login
};
