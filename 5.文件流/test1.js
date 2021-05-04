const fs = require("fs");
const path = require("path");

const filename = path.resolve(__dirname, "./b.txt");

const ws = fs.createWriteStream(filename, {
  encoding: "utf-8",
  highWaterMark: 3,
});

// ws.write("a");
//一直写，直到达到上限或无法再直接写入
let i = 0;
function write() {
  let flag = true;
  while (i < 1024 * 1024 && flag) {
    flag = ws.write("a"); //flag：得到下次还能不能直接写
    i++;
  }
}
write();

ws.on("drain", () => {
  write();
});
