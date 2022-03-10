const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new mongoose.Schema({
  name: String,
  email : String,
  phone: String,
  username : String,
  password : String
//   available: Number
});
  
  const user = mongoose.model("user", UserSchema);
  module.exports = user;