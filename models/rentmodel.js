const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const rentSchema = new mongoose.Schema({
//   user: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: "user"
//   },
  book: {
    type: Schema.Types.ObjectId,
    ref: "books"
  },
  user:{
    type: Schema.Types.ObjectId,
    ref: "users"
  },
  out: Date,
  status : String
}, 
);

const rent = mongoose.model("rent", rentSchema);

module.exports = rent;