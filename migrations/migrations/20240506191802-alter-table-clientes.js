'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('clientes', 'telefone', { type: Sequelize.STRING ,
      allowNul: true
    });

  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('clientes','telefone');

    /**
     * Add reverting commands here.
     *
     * Example:
     */
  }
};
