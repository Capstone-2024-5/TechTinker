// registration_controller.js


const CourseModel = require("../models/course");
const Registration = require("../models/registration");

exports.fetchCourseDetails = async (req, res) => {
  try {
    const { Age } = req.query;
    const userAge = parseInt(Age);
    const courseAgeGroup = userAge <= 8 ? "4-8" : "9-14";

    const courseDetails = await CourseModel.find({ courseAge: courseAgeGroup }, { courseName: 1, _id: 0 });

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
    const registrationData = req.body;
    const newRegistration = new Registration(registrationData);
    await newRegistration.save();
    res.status(201).json({ success: true, message: "User registered successfully" });
  } catch (error) {
    console.error("Error registering user:", error);
    res.status(500).json({ success: false, error: "Server Error" });
  }
};