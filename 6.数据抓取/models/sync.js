// 同步所有模型

const sequelize = require("./db");

require("./Admin");
require("./Class");
require("./Book");
require("./Student");

sequelize.sync({ alert: true });
