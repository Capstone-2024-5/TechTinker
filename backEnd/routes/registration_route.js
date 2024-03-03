// registration_route.js
const express = require("express");
const router = express.Router();
const registrationController = require("../controllers/registration_controller");

// Route to fetch course details based on age
router.get("/courseDetails", registrationController.fetchCourseDetails);

module.exports = router;