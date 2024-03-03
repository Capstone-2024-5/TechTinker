const mongoose = require("mongoose");

const registrationSchema = new mongoose.Schema({
  FirstName: { type: String, required: true },
  LastName: { type: String, required: true },
  PhoneNumber: { type: String, required: true },
  Email: { type: String, required: true },
  Age: { type: Number, required: true },
  Address: {
    Line1: { type: String, required: true },
    Line2: { type: String },
    City: { type: String, required: true },
    Province: { type: String, required: true },
    Zipcode: { type: String, required: true }
  },
  RegistrationType: { type: String, required: true },
  Introductory_CourseDetails: {
    CourseName: { type: String,},
    SelectedDate: { type: Date },
    SelectedTime: { type: String }
  },
  Regular_CourseDetails: {
    CourseName: { type: String,},
    StartDate: { type: Date },
    ClassTimings: { type: String }
  }
});

const Registration = mongoose.model("course_registrations", registrationSchema);

module.exports = Registration;