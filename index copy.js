// require("./init");
const express = require("express");
const http = require("http");
const app = express();
const server = http.createServer(app);

server.listen(9527, () => {
  console.log("server listen on 9527");
});
