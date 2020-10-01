const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('Users', {
    // definindo os atributos do model!
    firstName: DataTypes.STRING(45),
    lastName: DataTypes.STRING,
    email: DataTypes.STRING(120),
    password: DataTypes.STRING,
    cpf: DataTypes.STRING(11),
  }, {
    // definindo opções do model!
    sequelize,
    modelName: 'User',
  });
  
  User.associate = (models)=> {
    User.hasMany(models.Posts,
      {
      foreignKey: 'users_id'
      }
    );
    User.belongsToMany( User, 
      {
      as: 'Amigos',
      through: 'Amizades'
      }
    );
  } 
  
  return User;
};