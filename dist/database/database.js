"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sequelize = void 0;

var _sequelize = require("sequelize");

var sequelize = new _sequelize.Sequelize(process.env.APP_DB, process.env.APP_DB_USER, process.env.APP_DB_PASSWORD, {
  host: process.env.APP_DB_HOST,
  dialect: 'postgres',
  pool: {
    max: 5,
    min: 0,
    require: 30000,
    idle: 10000
  },
  logging: false
});
exports.sequelize = sequelize;