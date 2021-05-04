//使用连接池
const mysql = require("mysql2/promise");
const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "dboss666",
  database: "companydb",
});
async function test(id) {
  const [result] = await pool.execute("select * from employee where id=?;", [
    id,
  ]);
  console.log(result);
}
test(4);
