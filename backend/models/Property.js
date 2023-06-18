const mongoose = require("mongoose");

const PropertySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  floor: {
    type: Number,
    required: false
  },
  facing: {
    type: Number,
    required: false
  },
  price: {
    type: Number,
    required: false
  },
  propertySize: {
    type: Number,
    required: false
  },
  propertyDes: {
    type: String,
    required: false
  },
  address: {
    type: String,
    required: false
  },
  images: {
    type: [String],
    required: false
  },
  bedrooms: {
    type: Number,
    required: false
  },
  bathrooms: {
    type: Number,
    required: false
  },
  status: {
    type: String,
    required: false
  },
  balcony: {
    type: String,
    required: false
  },
  fStatus: {
    type: String,
    required: false
  },
  category: {
    type: String,
    required: false
  },
  gatedSecurity: {
    type: Boolean,
    required: false
  },
  lift: {
    type: Boolean,
    required: false
  },
  parking: {
    type: Boolean,
    required: false
  },
  vParking: {
    type: Boolean,
    required: false
  },
  water: {
    type: Boolean,
    required: false
  },
  power: {
    type: Boolean,
    required: false
  },
  veg: {
    type: Boolean,
    required: false
  },
  pets: {
    type: Boolean,
    required: false
  },
  features:{
    type: String,
    required: false
  },
  googleLocation: {
    type: String,
    required: false
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const Property = mongoose.model("property", PropertySchema);

module.exports = Property;
