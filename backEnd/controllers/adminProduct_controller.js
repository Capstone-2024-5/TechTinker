const UploadProduct = require("../models/products"); 

const postUploadProduct = async (req, res) => {
  console.log(req);
    const getUploadProduct = req.body;
  try {
    
    const newUploadProduct = new UploadProduct(getUploadProduct);
    await newUploadProduct.save();
    res.status(201).json({success: true, data: newUploadProduct});
    
  } catch (error) {
    console.error(error);
    res.status(500).json({success: false, error: 'Server Error'});
  }
};

module.exports = { postUploadProduct };