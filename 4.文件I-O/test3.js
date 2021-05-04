const fs = require("fs");
const path = require("path");

const filename = path.resolve(__dirname, "./file");

async function test() {
  const dir = await fs.promises.readdir(filename);
  console.log(dir);
}

test();
