const sequelize = require("./db");

// 同步所有模型
require("./Admin");
require("./Class");
require("./Book");
require("./Student");

sequelize.sync({ alert: true });
