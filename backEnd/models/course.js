const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
    courseName: String,
    courseCode: String,
    courseImage: String,
    // image: String,
    content: String,
    courseAge: String,
    courseFees: String,
    courseIntroFees: String, 
    slots: Array,
    courseDuration: Number
})

const CourseModel = mongoose.model("courses", courseSchema)
module.exports = CourseModel

// axios.post("http://localhost:3001/addcourse", {courseName, content, courseAge, courseFees, courseIntroFees, slots, courseDuration})
