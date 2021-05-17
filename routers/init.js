const express = require("express");
const path = require("path");
const app = express(); //创建一个express应用
const staticRoot = path.resolve(__dirname, "../public");
app.use(
  express.static(staticRoot, {
    index: "index.html",
  })
);

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.json());

app.post("/api/student", (req, res) => {
  console.log(req.body);
});

app.use(require("./errorMiddleWare"));

app.listen(9527, () => {
  console.log("server listen on 9527");
});
