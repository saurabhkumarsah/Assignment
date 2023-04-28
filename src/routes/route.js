const express = require("express");
const router = express.Router();
const controller = require("../controller/bookController");
const models = require("../models/bookModel");

router.post("/createBook", controller.storeBook);

router.get("/getBook", controller.fetchBook);

module.exports = router;
