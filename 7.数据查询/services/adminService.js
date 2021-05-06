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
exports.updateAdmin = async (adminObj, adminId) => {
  Admin.update(adminObj, {
    where: {
      id: adminId,
    },
  });
};

//  查询用户
// 单个数据查询
exports.login = async (loginId, loginPwd) => {
  const result = await Admin.findOne({
    loginId,
    loginPwd,
  });
  //区分大小写
  if (result && result.loginId === loginId && result.loginPwd === loginPwd) {
    return result.toJSON();
  }
  return null;
};

// 按照主键查询
exports.getAdminById = async (id) => {
  const result = await Admin.findByPk(id);
  //区分大小写
  if (result) {
    return result.toJSON();
  }
  return null;
};
