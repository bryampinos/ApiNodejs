const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const Docente = require('./docente');
const Asignacion = require('./asignaciónDocenteMateria')
const esquela = sequelize.define('esquela', {
    idEsquela:{
        type: DataTypes.INTEGER,
    primaryKey: true
    },
    Fecha :{
        type: DataTypes.STRING   
    },
    Motivo : {
        type: DataTypes.STRING     
    },
    Descripcion: {
        type: DataTypes.STRING     
    
    },
    Evidencia:{
        type: DataTypes.STRING 
    },
    docente_docente:{
        type: DataTypes.STRING,
        references: {
          model: 'docente',
          key: 'iddocente'
        }
    },
    estudiantes_idEstudiantes:{
        type: DataTypes.STRING,
        references: {
          model: 'representantes',
          key: 'idrepresentantes'
        }
    },
    cita:{
        type: DataTypes.STRING   
    },
    
    asignación_docente_materia_idAsignacion:{
        type: DataTypes.STRING,
        references: {
          model: 'asignación_docente_materia_idAsignacion',
          key: 'idAsignacion'
        }
    },

}, {
    tableName: 'esquela',
    timestamps: false
  });
  esquela.belongsTo(Docente, { foreignKey: 'docente_docente' });
  esquela.belongsTo(Asignacion, { foreignKey: 'asignación_docente_materia_idAsignacion' });
  module.exports=esquela;