//设置所有模型关系
const Class = require("./Class");
const Student = require("./Student");

// 设置外键
Class.hasMany(Student);
Student.belongsTo(Class);
