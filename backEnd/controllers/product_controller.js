const Product = require("../models/products");

exports.getProducts = async (req, res) =>{
  try {
    const products = await Product.find();
    res.json(products);
  }catch(err){
    console.error("Error fetching products: ", err);
    res.status(500).json({error: "Internal server error"});
  }
};


exports.getLoadMore = async (req, res) => {
  // const page = parseInt(req.query.page) || 1;
  // const pageSize = 4; // Set your desired page size
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 8;
  const skip = (page - 1) * limit;

  try {
    const products = await Product.find()
      .skip(skip)
      .limit(limit);

    res.json(products);
  } catch (err) {
    console.error("Error fetching more products: ", err);
    res.status(500).json({ error: "Internal server error" });
  }
};