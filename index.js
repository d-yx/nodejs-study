require("./init");

const stuServe = require("./services/studentService");
// stuServe.addStudent({
//   name: "dfld",
//   birthday: "2015-3-5",
//   sex: true,
//   mobile: "12617161222",
//   ClassId: "5332",
// }).catch(err=>{
//     console.log(err)
// });

stuServe.getStudents().then((res) => {
  console.log(res);
});
