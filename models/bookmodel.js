const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BookSchema = new mongoose.Schema({
  title: String,
  stock: Number,
  available: Number
});
  
  const book = mongoose.model("book", BookSchema);
  module.exports = book;