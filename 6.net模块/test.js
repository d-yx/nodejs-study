const net = require("net");

const socket = net.createConnection(
  {
    host: "dboss.icu",
    port: 80,
  },
  () => {
    console.log("连接成功！");
  }
);

socket.on("data", (chunk) => {
  console.log("来自服务器的消息", chunk.toString("utf-8"));
});

socket.write("你好！");
