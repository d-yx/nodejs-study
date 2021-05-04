const mysql = require("mysql2/promise");

async function test() {
  const connection = await mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "dboss666",
    database: "companydb",
  });
  const [result] = await connection.query("select * from `company`;");
  console.log(result);
  
  connection.end();
}
test();
