module.exports = {
    up: (queryInterface, Sequelize) => queryInterface.bulkInsert(
        'Tasks',
        [
            {
                name: 'Download Vuejs',
                done: false,
                project_id: 1,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                name: 'Create UI Web',
                done: false,
                project_id: 1,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                name: 'Download Flutter',
                done: false,
                project_id: 2,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                name: 'Design UI',
                done: false,
                project_id: 2,
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
