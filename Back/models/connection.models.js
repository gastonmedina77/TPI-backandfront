const Sequelize = require("sequelize");
const config = require("../config.js")

const sequelize = new Sequelize(config.DB_DATA_BASE, config.DB_USER, config.DB_PASSWORD,{
    host: config.DB_HOST,
    dialect: config.DB_DIALECT,
});

module.exports = sequelize;