const express = require("express");

const router = express.Router();

const postUploadProduct = require('../controllers/adminProduct_controller');


router.post("/addproduct", postUploadProduct);

module.exports = router;