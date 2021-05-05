const { Sequelize } = require("Sequelize");

module.exports = new Sequelize("myschooldb", "root", "dboss666", {
  host: "localhost",
  dialect: "mysql",
  // logging: null,//运行程序时没有废话
});
