const fs = require("fs");
const path = require("path");

const filename = path.resolve(__dirname, "./file/1.txt");

async function test() {
  await fs.promises.unlink(filename);
  console.log("文件删除了！");
}
test();
