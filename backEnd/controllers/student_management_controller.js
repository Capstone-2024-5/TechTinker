// student_management_controller.js

const Registration = require("../models/registration");

exports.getAllStudents = async () => {
  try {
   const registrations = await Registration.find();
   // const registrations = await Registration.find().populate('course');
    return registrations;
  } catch (error) {
    throw error;
  }
};
