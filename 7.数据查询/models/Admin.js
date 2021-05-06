const sequelize = require("./db");
const { DataTypes } = require("sequelize");
module.exports = sequelize.define(
  "Admin",
  {
    loginId: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    loginPwd: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    createdAt: false,
    updatedAt: false,
    paranoid: true, //该表数据不会真正删除，而是增加一列deleteAt,记录删除时间
  }
);
