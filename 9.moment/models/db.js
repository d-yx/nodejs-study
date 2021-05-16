const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("myschooldb", "root", "dboss666", {
  host: "localhost",
  dialect: "mysql",
  // logging: null
});

module.exports = sequelize;
