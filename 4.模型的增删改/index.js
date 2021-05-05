// const sequelize = require("./models/db");
//测试连接
// (async () => {
//   try {
//     await sequelize.authenticate();
//     console.log("Connection has been established successfully.");
//   } catch (error) {
//     console.error("Unable to connect to the database:", error);
//   }
// })();

// require("./models/sync");

const adminServe = require("./services/adminService");
//增
// adminServe.addAdmin({
//   loginId: "dsadas",
//   loginPwd: "123123",
// });

//删
// adminServe.deleteAdmin(2);

//改
adminServe.updateAdmin({
    loginId:"666666"
},3)