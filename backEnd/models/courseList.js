const mongoose = require('mongoose');

const CourseListSchema = new mongoose.Schema({
    CourseCode: String,
    CourseName: String
})

const CourseListModel = mongoose.model("junior_courses1", CourseListSchema)

module.exports = CourseListModel