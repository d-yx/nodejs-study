//使用模糊查询时得注意
const mysql = require("mysql2/promise");
const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "dboss666",
  database: "companydb",
});
async function test(id) {
  const [
    result,
  ] = await pool.execute(
    "select * from employee where `name` like concat('%',?,'%');",
    [id]
  );
  console.log(result);
}
test("袁");
