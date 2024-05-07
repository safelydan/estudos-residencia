'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('clientes', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true 
      },
      nome: {
        type: Sequelize.STRING,
        allowNull: false
      }, 
      cpf: {
        type: Sequelize.STRING(11),
        allowNull: false
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false
      }
    });
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
