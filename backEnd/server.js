const express = require("express");
const cors = require("cors");
const app = express();
require("./common/db")();
const mongoose = require('mongoose');
const CourseListModel = require('./models/courseList')

app.use(cors({ origin: "*" }));

app.use(express.json());

const userRouter = require("./routes/users_route");
app.use("/user", userRouter);

const PORT = process.env.API_SERVER_PORT || 5000;

app.get('/getcourseList', (req, res) =>{
    CourseListModel.find()
    .then(courseList => res.json(courseList))
    .catch(err => res.json(err))
});


app.listen(PORT, console.log(`Server running on port ${PORT}`));