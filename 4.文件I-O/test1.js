const fs = require("fs");
const path = require("path");

const filename = path.resolve(__dirname, "./file/2.txt");

// async function test() {
//   await fs.promises.writeFile(filename, "反倒是李开复扩大解放了", "utf-8");
// }
// test();

async function test() {
  await fs.promises.writeFile(filename, "反倒是李开复扩大解放了", {
    encoding: "utf-8",
    flag: "a", //往后添加
  });
}
test();
