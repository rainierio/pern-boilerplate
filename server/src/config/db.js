const Sequelize = require('sequelize');
require('dotenv').config();

const db = new Sequelize(process.env.POSTGRE_DATABASE, process.env.POSTGRE_USER, process.env.POSTGRE_PASSWORD, {
  host: 'localhost',
  dialect: 'postgres',
});

module.exports = db;
