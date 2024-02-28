const express = require("express");
const router = express.Router();
const { getEvents } = require("../controllers/events_controller");


router.get("", getEvents); // Define the route with the callback function

module.exports = router;
