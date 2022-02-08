const Sequelize = require('sequelize');

const db = new Sequelize(process.POSTGRE_DATABASE, process.POSTGRE_USER, process.POSTGRE_PASSWORD, {
    host: process.POSTGRE_HOST,
    dialect: 'postgres'
  });

module.exports = db;