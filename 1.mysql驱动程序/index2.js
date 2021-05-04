//防止sql注入，不用query

const mysql = require("mysql2/promise");

async function test(id) {
  const connection = await mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "dboss666",
    database: "companydb",
  });
  const [result] = await connection.execute("select * from employee where id=?;",[id]);
  console.log(result);
  
  connection.end();
}
test(4);
