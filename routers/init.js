const express = require("express");
const app = express();

app.use(require("./staticMIddleWare"));

app.get("/news", (req, res, next) => {
  console.log("handler1");
  // throw new Error("abc");
  // 相当于
  next(new Error("abc"));
  // next();
});

app.get("/news", (req, res, next) => {
  console.log("handler3");
  // res.send("123");
  next();
});

app.use(require("./errorMiddleWare"));

app.listen(9527, () => {
  console.log("server listen on 9527");
});
