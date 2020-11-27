const Sequelize = require("sequelize")

let sequelize = new Sequelize(
    process.env.APP_DB_NAME,
    process.env.APP_DB_USER,
    process.env.APP_DB_PASSWORD,
    {
        host: process.env.APP_DB_HOST,
        dialect: 'postgres',
        pool: {
            max: 5,
            min: 0,
            require: 30000,
            idle: 10000
        },
        logging: false
    }
)
sequelize
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.')
    })
    .catch(err => {
        console.log('Connection has been established successfully.')
        sequelize = new Sequelize(
            'postgres',
            process.env.APP_DB_USER,
            process.env.APP_DB_PASSWORD,
            {
                host: process.env.APP_DB_HOST,
                dialect: 'postgres',
                pool: {
                    max: 5,
                    min: 0,
                    require: 30000,
                    idle: 10000
                },
                logging: false
            }
        )
        const database = process.env.APP_DB_NAME
        console.log(`CREATE DATABASE "${database}"`);
        sequelize.query(`CREATE DATABASE  "${database}"`, {}).then(() => console.log('Database created'));
    });

