// juniorCourse.js
const mongoose = require('mongoose');

const juniorCourseSchema = new mongoose.Schema({
  CourseCode: { type: String, required: true },
  CourseName: { type: String, required: true },
  PreRequisites: { type: String, required: true },
});

const JuniorCourse = mongoose.model('junior_courses', juniorCourseSchema);

module.exports = JuniorCourse;