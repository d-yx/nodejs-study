const net = require("net");

// 创建服务器
const server = net.createServer();

server.listen(9527); //监听9527端口

server.on("listening", () => {
  console.log("服务器监听了9527端口！");
});

server.on("connection", (socket) => {
  console.log("有客户端连接到服务器");
});
