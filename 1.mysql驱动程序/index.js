const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "dboss666",
  database: "companydb",
});

//查
// connection.query("select * from `company`;", function (err, result) {
//   console.log(result);
// });

//增
// connection.query(
//   "insert into company(`name`,location,buildDate) values('猪八戒','重庆',curdate()); ",
//   (err, result) => {
//     console.log(result);
//   }
// );

//改
// connection.query(
//   "update company set `name`='孙悟空' where id=4;",
//   (err, result) => {
//     console.log(result);
//   }
// );

//删
connection.query("delete from company where id=4;", (err, result) => {
  console.log(result);
});

// 断开连接
// connection.end();
