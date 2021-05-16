const moment = require("moment");
moment.locale("zh-cn");
// console.log(moment().toString());
// console.log(moment.utc().toString());

// console.log(+moment());
// console.log(+moment.utc());

//使用日期令牌格式
const formats = ["YYYY-MM-DD HH:mm:ss", "YYYY-M-D H:m:s", "x"];
// console.log(moment.utc("1970-01-01 00:00:00", formats, true).toString());

// const invalidMoment = moment.utc(
//   "Thu Jan 01 1970 00:00:00 GMT+0000",
//   formats,
//   true
// );

// console.log(invalidMoment.isValid());

// 显示(发生在客户端)
// const m = moment.utc("2020-5-20 5:20:20", formats, true);
// console.log(m.local().format("YYYY年MM月DD日 HH时mm分ss秒"));

// const m = moment("2020-5-20 5:20:20", formats, true);
// console.log(m.utc().format("YYYY年MM月DD日 HH时mm分ss秒"));

const m = moment.utc("2021-5-16 1:20:20", formats, true);

console.log(m.local().fromNow());
