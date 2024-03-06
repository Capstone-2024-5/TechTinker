const express = require("express");
const cors = require("cors");
const app = express();
require("./common/db")();
const mongoose = require('mongoose');
const CourseListModel = require('./models/courseList')
const CourseModel = require('./models/course')

app.use(cors({ origin: "*" }));

app.use(express.json());

const userRouter = require("./routes/users_route");
const contactRouter = require("./routes/contacts_route");
const newsletterRouter = require("./routes/newsletters_route");
const registrationRouter = require("./routes/registration_route");
const { registerUser } = require("./controllers/registration_controller");

app.use("/user", userRouter);
app.use("/contact", contactRouter);
app.use("/subscribe", newsletterRouter);
app.use("/user", userRouter);
app.use("/api", registrationRouter);
app.post("/api/register", registerUser);
app.post("/addcourse", (req, res) =>{
    CourseModel.create(req.body)
    .then(courses => res.json(courses))
    .catch(err => res.json(err))
})

const productRouter= require("./routes/products_route");
app.use("/products", productRouter);

const loadMoreRouter = require("./routes/products_route");
app.use("/products/loadMore", loadMoreRouter);
const PORT = process.env.API_SERVER_PORT || 5000;
app.get('/getcourseList', (req, res) =>{
    CourseModel.find()
    .then(courseList => res.json(courseList))
    .catch(err => res.json(err))
});

// app.get('./singlecoursedetails', (req, res) =>{
//     CourseModel.findOne('65e796eb466d66e46a408dcb')
//     .then((singleCourse => res.json(singleCourse)))
//     .catch(err => res.json(err))
// })

app.listen(PORT, console.log(`Server API running on port ${PORT}`));
