const mongoose = require("mongoose");
const { Schema } = mongoose;

const BlogSchema = new Schema({
  blogType: {
    type: String,
    required: false
  },
  title: {
    type: String,
    required: true,
  },
  images: {
    type: [String],
    required: false,
  },
  description1: {
    type: String,
    required: true,
  },
  description2: {
    type: String,
    required: true,
  },

  date: {
    type: Date,
    default: Date.now,
  },
});

const Blog = mongoose.model("blog", BlogSchema);
module.exports = Blog;
