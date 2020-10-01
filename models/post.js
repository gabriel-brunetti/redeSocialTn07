const { Model } = require('sequelize');
  module.exports = (sequelize, DataTypes) => {
    const Post = sequelize.define('Posts', {
      // definindo os atributos do model!
      texto: DataTypes.STRING(240),
      caminhoFotoPost: DataTypes.STRING,
      users_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'Users',
          key: 'id'
        }
      },
    }, {
      // definindo opções do model!
      sequelize,
      modelName: 'Post',
    });
    
    Post.associate = (models)=> {
      //associações vão aqui!
      Post.belongsTo(models.Users, {
          foreignKey: 'users_id',
          as: 'dono'
      });
    } 
    
    return Post;
  };