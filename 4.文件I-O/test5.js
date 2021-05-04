const fs = require("fs");
const path = require("path");

const filename = path.resolve(__dirname, "./file/file3");

async function exists(filename) {
  try {
    await fs.promises.stat(filename);
    return true;
  } catch (err) {
    if (err.code == "ENOENT") {
      //文件不存在
      return false;
    }
    throw err;
  }
}

async function test() {
  const result = await exists(filename);
  if (result) {
    console.log("目录已存在,无需再操作！");
  } else {
    await fs.promises.mkdir(filename);
    console.log("目录创建成功！");
  }
}

test();
