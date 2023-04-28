const bookModel = require("../models/bookModel");

const storeBook = async function (req, res) {
  let data = req.body;
  let saveData = await bookModel.create(data);
  res.send({ Data: saveData });
};

const fetchBook = async function (req, res) {
  let allData = await bookModel.find();
  res.send({ recieveData: allData });
};

module.exports.storeBook = storeBook;
module.exports.fetchBook = fetchBook;
