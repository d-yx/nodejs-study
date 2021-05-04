const url = require("url");

const result = url.parse("http://dboss.icu/a/c?b=1&s=9#fdf");
// const result = new url.URL("http://dboss.icu/a/c?b=1&s=9#fdf");

// console.log(result);

// console.log(result.searchParams.has("b"));
// console.log(result.searchParams.get("s"));

const obj = {
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
};

const result1 = url.format(obj);

console.log(result1);
