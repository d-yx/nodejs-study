const MyRequest = require("./MyRequest");

const request = new MyRequest("http://dboss.icu");

request.send();

request.on("res", (headers, body) => {
  console.log(headers);
  console.log(body);
});
