const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const Amizade = sequelize.define('Amizades', {
    // definindo os atributos do model!
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        // Modelo a qual estou fazendo referência
        model: 'Users',
        // nome da columa que estou fazendo referência
        key: 'id',
      }
    },
    user_id1: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        // Modelo a qual estou fazendo referência
        model: 'Users',
        // nome da columa que estou fazendo referência
        key: 'id',
      }
    } 
  }, {
    // definindo opções do model!
    sequelize,
    modelName: 'Amizade',
  });
  
  Amizade.associate = (models)=> {
    //
  } 
  
  return Amizade;
};