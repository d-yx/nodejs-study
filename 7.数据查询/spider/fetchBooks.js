// 抓取豆瓣读书中的数据信息
const axios = require("axios");
const cherrio = require("cheerio");
const Book = require("../models/Book");

/**
 * 获取豆瓣读书网页的源代码
 */
async function getBooksHTML() {
  const resp = await axios.get("https://book.douban.com/latest");
  return resp.data;
}

/**
 * 从豆瓣读书中得到一个完整的网页，并从网页中分析出书籍的基本信息，然后得到一个书籍的详情页链接数组
 */
async function getBookLinks() {
  const html = await getBooksHTML();
  const $ = cherrio.load(html);
  const links = $("#content .grid-12-12 li a.cover")
    .map((i, ele) => ele.attribs["href"])
    .get();
  return links;
}

/**
 * 根据书籍详情页的地址，得到该书籍的详细信息
 * @param {*} detailUrl
 */
async function getBookDetail(detailUrl) {
  const resp = await axios(detailUrl);
  const $ = await cherrio.load(resp.data);
  const name = $("h1").text().trim();
  const imgurl = $("#mainpic .nbg img").attr("src");
  const publishDate = $("#info span.pl")
    .filter((i, ele) => $(ele).text().includes("出版年"))[0]
    .nextSibling.nodeValue.trim();
  const author = $("#info span.pl")
    .filter((i, ele) => $(ele).text().includes("作者"))
    .next("a")
    .text();
  return {
    name,
    imgurl,
    publishDate,
    author,
  };
}

/**
 * 获取所有的书籍信息
 */
async function fetchAll() {
  const links = await getBookLinks(); //得到书籍的详情页地址
  const proms = links.map((link) => {
    return getBookDetail(link);
  });
  return Promise.all(proms);
}

/**
 * 得到书籍信息，然后保存到数据库
 */
async function saveToDB() {
  const books = await fetchAll();
  await Book.bulkCreate(books);
  console.log("抓取数据并保存到了数据库");
}

saveToDB();
