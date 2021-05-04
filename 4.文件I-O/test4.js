const fs = require("fs");
const path = require("path");

const filename = path.resolve(__dirname, "./file/file2");

async function test() {
  await fs.promises.mkdir(filename);
}
test();
