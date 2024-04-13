// registration_route.js
const express = require("express");
const router = express.Router();
const registrationController = require("../controllers/registration_controller");

router.get("/courseDetails", registrationController.fetchCourseDetails);

module.exports = router;