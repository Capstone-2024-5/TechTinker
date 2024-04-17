const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  // name: String,
  // price: String,
  // imageUrl: String
  Name: {
    type: String
  },
  Price: {
    type: String
  },
  CategoryName: {
    type: String
  },
  Description: {
    type: String
  },
  ImageUrl: {
    type: String
  }
});

const Product = mongoose.model('product', productSchema);

module.exports = Product;