require("./models/relation");

const adminServe = require("./services/adminService");

adminServe.login("admin", "123456").then((r) => {
  console.log(r);
});
