require("./models/relation");
// // require("./spider/fetchBooks");
const stuServ = require("./services/studentService");
stuServ.getStudents(1, 10, false, "秀").then((r) => {
  console.log(r);
});


// const studentServe = require("./services/studentService");

// studentServe.getStudents().then((r) => {
//   console.log(r);
// });
