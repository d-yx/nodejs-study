// require("./init");
const express = require("express");
const app = express();

app.get("/news/:id", (req, res) => {
  // 获取请求信息
  console.log("请求头:", req.headers);
  console.log("请求路径:", req.path);
  console.log("请求参数:", req.query);
  console.log("params:", req.params);
  // 响应
  // res.send("fdsfsd");
  // res.setHeader("a", "123").end();
  // 重定向(状态码302：临时重定向；状态码301：永久重定向)
  // res.status(302).header("location", "http://dboss.icu").end();
  // res.status(302).location("http://dboss.icu").end();
  res.redirect(302, "http://dboss.icu"); //默认为301
});

app.listen(9527, () => {
  console.log("server listen on 9527");
});
