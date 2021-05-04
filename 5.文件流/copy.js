//将b.txt文件复制到c.txt文件
const fs = require("fs");
const path = require("path");

const from = path.resolve(__dirname, "./b.txt");
const to = path.resolve(__dirname, "./c.txt");

//创建一个读取流对象
const rs = fs.createReadStream(from);

//创建一个写入流对象
const ws = fs.createWriteStream(to);

// rs.on("data", (chunk) => {
//   // 判断后面的数据是否能直接写入
//   const flag = ws.write(chunk);
//   if (!flag) {
//     //暂停写入
//     rs.pause();
//   }
// });

// //写入通道清空时触发
// ws.on("drain", () => {
//   // 恢复写入
//   rs.resume();
// });

// rs.on("close", () => {
//   //写完了
//   ws.end(); //关闭写入流
//   console.log("复制完成！");
// });


// 建立管道 
rs.pipe(ws);
