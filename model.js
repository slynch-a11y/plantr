const Sequelize = require('sequelize');
const db = new Sequelize('postgres://5432/plantr');
module.exports = db;