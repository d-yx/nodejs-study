const Mock = require("mockjs");

const result = Mock.mock({
  "array|16": [
    {
      "id|+1": 1,
      name: "物联网应用技术 @id 班",  
      openDate: "@date",
    },
  ],
}).array;

//加入到表中
const Class = require("../models/Class");
Class.bulkCreate(result);
