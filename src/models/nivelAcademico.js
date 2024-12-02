const sequelize = require("../../config/db");
const jornada = require('./jornada')
const { DataTypes } = require('sequelize');

const nivelAcademico = sequelize.define('nivel_academico', {
    nivel_id: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    nivel_descripcion: {
        type: DataTypes.STRING,

    },
    nivel_estado: {
        type: DataTypes.BOOLEAN
    },
    jornada_jor_id: {
        type: DataTypes.INTEGER,
        references: {
            model: jornada,
            key: 'jor_id'
        }
    }

}, {
    tableName: 'nivel_academico',
    timestamps: false
});


nivelAcademico.belongsTo(jornada, { foreignKey: 'jor_id' });
module.exports = jornada;