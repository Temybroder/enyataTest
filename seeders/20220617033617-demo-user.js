'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {

      await queryInterface.bulkInsert('user', 
      [
        {
        name: 'Adeolu Chimdi',
        email: 'adechimdi@gmail.com',
        password: '123456'
        },
        {
        name: 'Bella Michaels',
        email: 'bellamic@gmail.com',
        password: '654321'
        }
    ], {});
   
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     await queryInterface.bulkDelete('user', null, bulkDeleteOptions);
  }
};
