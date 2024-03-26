const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const repreRepository = require('../repository/repreRepository');

exports.register = async (body) => {
    const existingUser = await repreRepository.findUserByCedula(body.cedula);
    const existingUser2 = await repreRepository.findUserByEmail(body.email);
    if (existingUser, existingUser2) {
      throw new Error('EL USUARIO YA ESTA REGISTRADO');
     
    }
    const password = await bcrypt.hash(body.password, 10);
        const user = { 
            //aqui estan primero los nombres de las columnas de la tabla y despues lo que se envia 
            idRepresentante : "Repre"+ body.cedula,
            nombre: body.nombre, 
            apellido: body.apellido, 
            cedula: body.cedula, 
            email: body.email, 
            password: password
        };
        return repreRepository.insertUser(user);
};
//Este es el login Kevin , aqui esta generando el token tambien 
exports.login = async (body) => {
    const user = await repreRepository.findUserByEmail(body.email);
    if (user) {
        const comparision = await bcrypt.compare(body.password, user.password);
        if (comparision) {
            const token = jwt.sign({ id: user.id }, 'tu_clave_secreta', { expiresIn: '1h' });
            return { status: 'ok', message: 'Inicio de sesión exitoso', token: token };
        } else {
            return { status: 'error', message: 'Contraseña incorrecta' };
        }
    } else {
        return { status: 'error', message: 'Usuario no registrado' };
    }
};
