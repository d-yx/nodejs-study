// 读取一个目录中的所有子目录和文件
const fs = require("fs");
const path = require("path");
class File {
  constructor(filename, name, ext, isFile, size, createTime, updateTime) {
    this.filename = filename;
    this.name = name;
    this.ext = ext;
    this.isFile = isFile;
    this.size = size;
    this.createTime = createTime;
    this.updateTime = updateTime;
  }
  async getChildren() {
    if (this.isFile) {
      //文件不可能有子文件
      return [];
    }
    let children = await fs.promises.readdir(this.filename);
    children = children.map((name) => {
      const result = path.resolve(this.filename, name);
      return File.getFile(result);
    });
    return Promise.all(children);
  }

  async getContent(isBuffer = false) {
    if (this.isFile) {
      if (isBuffer) {
        return await fs.promises.readFile(this.filename);
      }
      return await fs.promises.readFile(this.filename, "utf-8");
    }
    return null;
  }

  static async getFile(filename) {
    const name = path.basename(filename);
    const ext = path.extname(filename);
    const stat = await fs.promises.stat(filename);
    const isFile = stat.isFile();
    const size = stat.size;
    const createTime = new Date(stat.birthtime);
    const updateTime = new Date(stat.mtime);
    return new File(filename, name, ext, isFile, size, createTime, updateTime);
  }
}

async function readDir(dirname) {
  const file = await File.getFile(dirname);
  return await file.getChildren();
}

async function test() {
  const dirname = path.resolve(__dirname, "./file");
  const result = await readDir(dirname);
  console.log(result);
}   
test();
