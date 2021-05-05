const sequelize = require("./db");
const { DataTypes } = require("sequelize");

module.exports = sequelize.define(
  "Class",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    openDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  {
    createdAt: false,
    updatedAt: false,
    paranoid: true,
  }
);
