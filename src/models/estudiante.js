const { DataTypes } = require('sequelize');
const sequelize = require('../../config/db');
const User = require('./user');
const nivelAcademico = require('./nivelAcademico');
const curso = require('./curso');

const estudiante =  sequelize.define('estudiante', {
    idEstudiantes: {
        type: DataTypes.INTEGER,
        primaryKey: true
      },
      NombreEst: {
        type: DataTypes.STRING
      },
      ApellidoEst: {
        type: DataTypes.STRING
      },
      cedula: {
        type: DataTypes.STRING
      },
      idrepresentantes: {
          type: DataTypes.INTEGER,
        references: {
          model: 'user',
          key: 'user_id'
        }
      },
      curso_id: {
        type: DataTypes.STRING,
      references: {
        model: 'curso',
        key: 'curso_id'
      }
    }
} 
, {
  tableName: 'estudiante',
  timestamps: false
});
estudiante.belongsTo(User, { foreignKey: 'idrepresentantes' });

estudiante.belongsTo(curso, { foreignKey: 'curso_id' });
module.exports=estudiante;