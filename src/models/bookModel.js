const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema(
  {
    bookName: String,
    authorName: String,
    category: String,
    year: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Book", bookSchema);
