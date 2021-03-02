'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('url_slugs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      user_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'users',  
          key: 'id' 
        },
        onUpdate: 'CASCADE'
      },
      slug: {
        type: Sequelize.STRING(100),
        allowNull: false,
        unique: true
      },
      addr: {
        type: Sequelize.STRING(500),
        allowNull: false
      },
      access: {
        type: Sequelize.INTEGER
      },
      created_at: {
        type: Sequelize.DATE, 
        allowNull: false,

      },
      updated_at: {
        type: Sequelize.DATE, 
        allowNull: false,

      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('UrlSlugs');
  }
};