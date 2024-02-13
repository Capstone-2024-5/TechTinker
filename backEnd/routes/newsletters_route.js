const express = require("express");
const {
  postNewsletter
} = require("../controllers/newsletters_controller");

const router = express.Router();

router.post("", postNewsletter);

module.exports = router;