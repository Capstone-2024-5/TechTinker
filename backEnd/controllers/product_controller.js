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
  const page = parseInt(req.query.page) || 1;
  const pageSize = 4; // Set your desired page size

  try {
    const products = await Product.find()
      .skip((page - 1) * pageSize)
      .limit(pageSize);

    res.json(products);
  } catch (err) {
    console.error("Error fetching more products: ", err);
    res.status(500).json({ error: "Internal server error" });
  }
};