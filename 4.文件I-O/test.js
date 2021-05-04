const fs = require("fs");
const path = require("path");

const filename = path.resolve(__dirname, "./file/1.txt");

fs.readFile(
  filename,
  {
    encoding: "utf-8",
  },
  (err, content) => {
    console.log(content);
  }
);

//ES7
async function test() {
  const content = await fs.promises.readFile(filename, "utf-8");
  console.log(content);
}
test();

// ES6
fs.promises.readFile(filename, "utf-8").then((data) => {
  console.log(data);
});
