const express = require("express");
const {
  postContact
} = require("../controllers/contacts_controller");

const router = express.Router();

router.post("", postContact);

module.exports = router;