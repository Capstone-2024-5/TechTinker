const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: String,
  price: String,
  imageUrl: String
});

const Product = mongoose.model('product', productSchema);

module.exports = Product;