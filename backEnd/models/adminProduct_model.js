const mongoose = require ("mongoose");

const uploadProductSchema = new mongoose.Schema({
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

const UploadProduct = mongoose.model('UploadProduct', uploadProductSchema);

module.exports = { UploadProduct };