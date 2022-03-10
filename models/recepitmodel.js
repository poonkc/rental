const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const recepitSchema = new mongoose.Schema({
    rent: {
        type: Schema.Types.ObjectId,
        ref: "rents"
      },
      price: Number,
      in : Date
});
  
  const recepit = mongoose.model("recepit", recepitSchema);
  module.exports = recepit;