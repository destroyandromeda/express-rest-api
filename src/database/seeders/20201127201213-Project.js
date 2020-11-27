'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => queryInterface.bulkInsert(
        'Projects',
        [
            {
                name: 'Make a Web App',
                description: 'Using Javascript',
                priority: 1,
                delivery_date: '2019-05-12',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                name: 'Make an App',
                description: 'Using Dart',
                priority: 1,
                delivery_date: '2019-05-13',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                name: 'Make a Desktop App',
                description: 'Using C++',
                priority: 1,
                delivery_date: '2019-05-14',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        ],
        {},
    ),

    down: async (queryInterface, Sequelize) => {
        /**
         * Add commands to revert seed here.
         *
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
    }
};
