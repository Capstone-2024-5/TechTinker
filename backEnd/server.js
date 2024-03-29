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
const adminModel = require("./models/adminLogin_model");
const postUploadProduct = require("./routes/adminProduct_route");

app.use(cors({ origin: "*" }));

app.use(express.json());

const PORT = process.env.API_SERVER_PORT || 5000;

// app.use(adminRoute);
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

// app.get('./singlecoursedetails', (req, res) =>{
//     CourseModel.findOne('65e796eb466d66e46a408dcb')
//     .then((singleCourse => res.json(singleCourse)))
//     .catch(err => res.json(err))
// })

app.get("/admin_login", cors(), (req, res) => {

})

app.post("/admin_login", async(req, res)=>{
    const {username, password} = req.body;

    try{
        const check = await adminModel.findOne({username:username});

        if(!check){
            res.json("notexist");
        }else{

            res.json("exist");
        }
    }catch (e){
        console.log("fail");
    }
})


app.listen(PORT, console.log(`Server API running on port ${PORT}`));

