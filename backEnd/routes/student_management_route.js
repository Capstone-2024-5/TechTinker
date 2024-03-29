// student_management_route.js

const express = require("express");
const router = express.Router();
const studentManagementController = require("../controllers/student_management_controller");

router.get("", async (req, res) => {
  try {  
    const students = await studentManagementController.getAllStudents();  
    res.status(200).json(students);
  } catch (error) {
   
    res.status(500).json({ error: "Server Error" });
  }
});

module.exports = router;
