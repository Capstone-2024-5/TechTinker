const express = require("express");
const {
  postNewsletter, postContact, getFAQs
} = require("../controllers/techTinker_controller");

const router = express.Router();

router.post("/subscribe", postNewsletter);
router.post("/contact", postContact);
router.get("/faqs", getFAQs);

module.exports = router;