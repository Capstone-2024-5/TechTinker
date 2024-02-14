// registration_controller.js
const JuniorCourse = require("../models/juniorCourse");
const SeniorCourse = require("../models/seniorCourse");
const Registration = require("../models/registration");

exports.fetchCourseDetails = async (req, res) => {
  try {
    const { Age } = req.query;
    let courseDetails;

    // Convert age to a number
    const userAge = parseInt(Age);

    if (userAge <= 8) {
      // Fetch course details from junior_courses collection
      courseDetails = await JuniorCourse.find({}, { CourseName: 1, _id: 0 });
    } else {
      // Fetch course details from senior_courses collection
      courseDetails = await SeniorCourse.find({}, { CourseName: 1, _id: 0 });
    }

    if (courseDetails.length === 0) {
      return res.status(404).json({ success: false, message: "No courses found for the given age group." });
    }

    res.status(200).json({ success: true, courseDetails });
  } catch (error) {
    console.error("Error fetching course details:", error);
    res.status(500).json({ success: false, error: "Server Error" });
  }
};

exports.registerUser = async (req, res) => {
  try {
    // Extract user registration data from request body
    const registrationData = req.body;
    const newRegistration = new Registration(registrationData);
    await newRegistration.save();
    res.status(201).json({ success: true, message: "User registered successfully" });
  } catch (error) {
    console.error("Error registering user:", error);
    res.status(500).json({ success: false, error: "Server Error" });
  }
};
