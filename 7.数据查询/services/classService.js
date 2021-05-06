const Class = require("../models/Class");

//增加班级
exports.addClass = async (classObj) => {
  Class.create(classObj);
};

//删除班级
exports.deleteClass = async (id) => {
  Class.destroy({
    where: {
      id,
    },
  });
};

//更新班级
exports.updateClass = async (classObj, id) => {
  Class.update(classObj, {
    where: {
      id,
    },
  });
};
