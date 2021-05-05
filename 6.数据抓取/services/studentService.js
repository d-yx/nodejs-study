const Student = require("../models/Student");

//增加学生
exports.addStudent = async (studentObj) => {
  Student.create(studentObj);
};

//删除学生
exports.deleteStudent = async (id) => {
  Student.destroy({
    where: {
      id,
    },
  });
};

//更新学生
exports.updateStudent = async (studentObj, id) => {
  Student.update(studentObj, {
    where: {
      id,
    },
  });
};
