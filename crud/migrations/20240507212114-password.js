'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('users', 'password', { type: Sequelize.STRING });
  },

  async down(queryInterface, Sequelize) {
    /**
     * Adicione aqui os comandos de reversão.
     *
     * Exemplo:
     * await queryInterface.removeColumn('users', 'password');
     */
  }
};
