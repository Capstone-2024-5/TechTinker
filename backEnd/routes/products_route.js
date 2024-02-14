const express = require("express");
const router = express.Router();
const { getProducts } = require("../controllers/product_controller");
const { getLoadMore } = require("../controllers/product_controller");

router.get("", getProducts); // Define the route with the callback function
router.get("", getLoadMore);

module.exports = router;
