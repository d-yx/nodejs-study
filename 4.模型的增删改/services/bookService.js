const Book = require("../models/Book");

//增加书籍
exports.addBook = async (bookObj) => {
  Book.create(bookObj);
};

//删除书籍
exports.deleteBook = async (id) => {
  Book.destroy({
    where: {
      id,
    },
  });
};

//更新书籍
exports.updateBook = async (bookObj,id) => {
  Book.update(bookObj, {
    where: {
      id,
    },
  });
};
