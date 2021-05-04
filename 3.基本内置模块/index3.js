// const url = require("url");

// const url = new URL("http://dboss.icu/a/c?b=1&s=9#fdf");
// console.log(url);

//转换成字符串
const result = require("url").format({
  href: "http://dboss.icu/a/c?b=1&s=9#fdf",
  origin: "http://dboss.icu",
  protocol: "http:",
  username: "",
  password: "",
  host: "dboss.icu",
  hostname: "dboss.icu",
  port: "",
  pathname: "/a/c",
  search: "?b=1&s=9",
  hash: "#fdf",
});

console.log(result);
