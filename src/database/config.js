require("@babel/register")
require("@babel/polyfill")
require('dotenv').config()
const fs = require('fs')

module.exports = {
    development: {
        username: process.env.APP_DB_USER,
        password: process.env.APP_DB_PASSWORD,
        database: process.env.APP_DB_NAME,
        host: process.env.APP_DB_HOST,
        port: process.env.APP_DB_PORT,
        dialect: 'postgres',
        dialectOptions: {
            bigNumberStrings: true
        }
    },
    test: {
        username: process.env.APP_DB_USER,
        password: process.env.APP_DB_PASSWORD,
        database: process.env.APP_DB_NAME,
        host: process.env.APP_DB_HOST,
        port: process.env.APP_DB_PORT,
        dialect: 'postgres',
        dialectOptions: {
            bigNumberStrings: true
        }
    },
    production: {
        username: process.env.APP_DB_USER,
        password: process.env.APP_DB_PASSWORD,
        database: process.env.APP_DB_NAME,
        host: process.env.APP_DB_HOST,
        port: process.env.APP_DB_PORT,
        dialect: 'postgres',
        dialectOptions: {
            bigNumberStrings: true
        }
    }
};