const express = require("express");
const cors = require("cors");
const app = express();
require("./common/db")();
const mongoose = require('mongoose');
const CourseListModel = require('./models/courseList')
const CourseModel = require('./models/course')
const userRouter = require("./routes/users_route");
const techTinkerRouter = require("./routes/tech_Tinker_route");
const registrationRouter = require("./routes/registration_route");
const { registerUser } = require("./controllers/registration_controller");
const productRouter= require("./routes/products_route");
const eventRouter = require("./routes/events_route");
const studentManagementRouter = require("./routes/student_management_route");
const postUploadProduct = require("./routes/adminProduct_route");
const adminLoginRouter = require("./routes/adminLogin_route");

app.use(cors({ origin: "*" }));

app.use(express.json());

const PORT = process.env.API_SERVER_PORT || 5000;

// Use the admin login route
app.use("", adminLoginRouter);
app.use("/user", userRouter);
app.use("", techTinkerRouter);
app.use("", postUploadProduct);
app.use("/user", userRouter);
app.use("/api", registrationRouter);
app.post("/api/register", registerUser);
app.use("/students", studentManagementRouter);
app.post("/addcourse", (req, res) =>{
    CourseModel.create(req.body)
    .then(courses => res.json(courses))
    .catch(err => res.json(err))
})

app.use("/products", productRouter);
app.use("/events", eventRouter);


const loadMoreRouter = require("./routes/products_route");
app.use("/products/loadMore", loadMoreRouter);

app.get('/getcourseList', (req, res) =>{
    CourseModel.find()
    .then(courseList => res.json(courseList))
    .catch(err => res.json(err))
});



app.listen(PORT, console.log(`Server API running on port ${PORT}`));

