const UploadProduct = require("../models/adminProduct_model");

exports.postUploadProduct = async (req, res) => {
  // console.log(req);

  try {
    const getUploadProduct = req.body;
    const newUploadProduct = new UploadProduct(getUploadProduct
    //   {
    //   Name: req.body.Name,
    //   Price: req.body.Price,
    //   CategoryName: req.body.CategoryName,
    //   Description: req.body.Description,
    //   ImageUrl: req.body.ImageUrl
    // }
    );

    await newUploadProduct.save();
    // return res.send(newUploadProduct);
    res.status(201).json({success: true, data: newUploadProduct});
    
  } catch (error) {
    console.error(error);
    res.status(500).json({success: false, error: 'Server Error'});
  }
};

// module.exports = { postUploadProduct };