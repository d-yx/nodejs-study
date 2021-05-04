const EventEmitter = require("events");

const ee = new EventEmitter();

ee.on("abc", (data1, data2) => {
  console.log("事件abc触发了1",data1,data2);
});
// ee.once("abc", () => {
//   console.log("事件只触发一次");
// });
const test = () => {
  console.log("事件abc触发了2");
};
ee.on("abc", test);

// ee.on("bcd", () => {
//   console.log("事件bcd触发了");
// });

ee.emit("abc",1,2);
ee.off("abc", test);
ee.emit("abc",1,2);
// ee.emit("bcd");
