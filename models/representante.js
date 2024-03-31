const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('mysql://root:admin@localhost:3306/aplicacion');

const Representante = sequelize.define('representantes', {
    idrepresentantes: {
      type: DataTypes.STRING,
      primaryKey: true
    },
    user_iduser: {
        type: DataTypes.STRING,
      references: {
        model: 'user',
        key: 'iduser'
      }
    },
    
   
  }
  , {
    tableName: 'representantes',
    timestamps: false
});

module.exports = Representante;