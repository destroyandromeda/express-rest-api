module.exports = {
    up: (queryInterface, Sequelize) => queryInterface.bulkInsert(
        'Users',
        [
            {
                firstName: 'Jane',
                lastName: 'Doe',
                email: 'janedoe@example.com',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                firstName: 'Jon',
                lastName: 'Doe',
                email: 'jondoe@example.com',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        ],
        {},
    ),

    down: (queryInterface, Sequelize) => queryInterface.bulkDelete('Users', null, {}),
};
