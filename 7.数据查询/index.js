// require("./models/sync");

// require("./models/relation");
// require("./Mock/mockClass");
// require("./Mock/mockStudent");

// require("./spider/fetchBooks");

const adminServe = require("./services/adminService");

// adminServe.login("admin", "123123").then((r) => {
//   console.log(r);
// });
adminServe.getAdminById(1).then((r) => {
  console.log(r);
});
