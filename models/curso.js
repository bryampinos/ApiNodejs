const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('mysql://root:admin@localhost:3306/aplicacion');

const curso = sequelize.define('curso', {
    idCurso: {
    type: DataTypes.STRING,
    primaryKey: true
  },
  curso: {
    type: DataTypes.STRING
  },
  paralelo: {
    type: DataTypes.STRING
  }
}, {
    tableName: 'curso',
    timestamps: false
});

module.exports = curso;