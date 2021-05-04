const fs = require("fs");
const path = require("path");
const filename = path.resolve(__dirname, "./file");

async function test() {
  const stat = await fs.promises.stat(filename);
  console.log(stat);
}
test();
