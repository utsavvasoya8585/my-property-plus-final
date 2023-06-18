const mongoose = require("mongoose");
const { Schema } = mongoose;

const SalesSchema = new Schema({
  designId: {
    // type: mongoose.Schema.Types.ObjectId,
    type: String,
    required: true,
    // ref: "Design",
  },
  userId: {
    // type: mongoose.Schema.Types.ObjectId,
    type: String,
    required: true,
    // ref: "User",
  },
  addOns: {
    type: [Number],
    required: true,
  },

  date: {
    type: Date,
    default: Date.now,
  },
});

const Sales = mongoose.model("sales", SalesSchema);
module.exports = Sales;
