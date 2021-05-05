const Mock = require("mockjs");

const result = Mock.mock({
  "array|500-700": [
    {
      "id|+1": 1,
      name: "@cname",
      birthday: "@date",
      "sex|1-2": true,
      mobile: /1\d{10}/,
      "ClassId|1-16": 0,
    },
  ],
}).array;

//加入到表中
const Student = require("../models/Student");
Student.bulkCreate(result);
