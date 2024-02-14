// seniorCourse.js
const mongoose = require('mongoose');
const seniorCourseSchema = new mongoose.Schema({
  CourseCode: { type: String, required: true },
  CourseName: { type: String, required: true },
  PreRequisites: { type: String, required: true },
});

const SeniorCourse = mongoose.model('senior_courses', seniorCourseSchema); // Add the missing '=' here

module.exports = SeniorCourse;