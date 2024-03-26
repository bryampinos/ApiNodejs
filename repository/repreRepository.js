const mysql = require('mysql');

// Conexión a la base de datos MySQL
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'admin',
    database: 'aplicacion'
});

db.connect((err) => {
    if (err) throw err;
    console.log('Conectado a la base de datos');
});
exports.findUserByCedula = (cedula) => {
    return new Promise((resolve, reject) => {
        const sql = 'SELECT * FROM representantes WHERE cedula = ?';
        db.query(sql, [cedula], (err, result) => {
            if (err) reject(err);
            resolve(result[0]);
        });
    });
};

exports.findUserByEmail = (email) =>{
    return new Promise((resolve, reject) => {
        const sql = 'SELECT * FROM representantes WHERE email = ?';
        db.query(sql, [email], (err, result) => {
            if (err) reject(err);
            resolve(result[0]);
        });
    });

}

exports.insertUser = (user) => {
    return new Promise((resolve, reject) => {
        const sql = 'INSERT INTO representantes SET ?';
        db.query(sql, user, (err, result) => {
            if (err) reject(err);
            resolve('Usuario registrado');
        });
    });
};

exports.findUserByEmail = (email) => {
    return new Promise((resolve, reject) => {
        const sql = 'SELECT * FROM representantes WHERE email = ?';
        db.query(sql, [email], (err, result) => {
            if (err) reject(err);
            resolve(result[0]);
        });
    });
};
