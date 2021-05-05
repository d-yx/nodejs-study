// 注：以下代码未考虑业务逻辑

const Admin = require("../models/Admin");

//增加用户
exports.addAdmin = async (adminObj) => {
  const ins = await Admin.create(adminObj);
  return ins.toJSON();
};
//删除用户
exports.deleteAdmin = async (adminId) => {
  Admin.destroy({
    where: {
      id: adminId,
    },
  });
};
// 更新用户
exports.updateAdmin = async (adminObj,adminId) => {
  Admin.update(adminObj, {
    where: {
      id: adminId,
    },
  });
};
