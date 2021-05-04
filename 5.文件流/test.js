const fs = require("fs");
const path = require("path");

const filename = path.resolve(__dirname, "./a.txt");

const rs = fs.createReadStream(filename, {
  encoding: "utf-8",
  //每次读取数量,此时为一个字符数
  highWaterMark: 1,
});
rs.on("open", () => {
  console.log("文件被打开了！");
});

rs.on("error", () => {
  console.log("出错了！");
});

rs.on("close", () => {
  console.log("文件关闭了！");
});
// rs.close();

rs.on("data", (chunk) => {
  console.log("读到的一部分数据", chunk);
  //暂停读取
  rs.pause();
  setTimeout(() => {
    //恢复读取
    rs.resume();
  }, 500);
});

rs.on("end", () => {
  console.log("全部数据读取完毕！");
});

rs.on("pause", () => {
  console.log("暂停了！");
});

rs.on("resume", () => {
  console.log("恢复了！");
});
