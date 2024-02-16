const mongoose = require('mongoose');

const CourseListSchema = new mongoose.Schema({
    CourseCode: String,
    CourseName: String
})

const CourseListModel = mongoose.model("senior_courses", CourseListSchema)

module.exports = CourseListModel