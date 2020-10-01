module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Posts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      texto: {
        type: Sequelize.STRING(240)
      },
      caminhoFotoPost: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      users_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          // Modelo a qual estou fazendo referência
          model: 'Users',
          // nome da columa que estou fazendo referência
          key: 'id',
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Posts');
  }
};