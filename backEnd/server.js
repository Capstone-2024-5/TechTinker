const express = require("express");
const cors = require("cors");
const app = express();
require("./common/db")();
const mongoose = require("mongoose");
const CourseListModel = require("./models/courseList");
const CourseModel = require("./models/course");
const path = require("path");
const multer = require("multer");

app.use(cors({ origin: "*" }));

app.use(express.json());
app.use(express.static('public'));

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./public/images");
  },
  filename: (req, file, cb) => {
    cb(
      null,
      file.fieldname + "_" + Date.now() + path.extname(file.originalname)
    );
  },
});

const upload = multer({
  storage: storage,
});

const userRouter = require("./routes/users_route");
const techTinkerRouter = require("./routes/tech_Tinker_route");
const registrationRouter = require("./routes/registration_route");
const { registerUser } = require("./controllers/registration_controller");
const productRouter = require("./routes/products_route");
const eventRouter = require("./routes/events_route");
const adminModel = require("./models/adminLogin_model");
// const adminRoute = require("./routes/adminLogin_route");

const PORT = process.env.API_SERVER_PORT || 5000;

// app.use(adminRoute);
app.use("/user", userRouter);
app.use("", techTinkerRouter);
app.use("/user", userRouter);
app.use("/api", registrationRouter);
app.post("/api/register", registerUser);

app.post("/addcourse", upload.single("file"), (req, res) => {
  CourseModel.create({
    courseName: req.body.courseName,
    courseCode: req.body.courseCode,
    image: req.file.filename,
    content: req.body.content,
    courseAge: req.body.courseAge,
    courseFees: req.body.courseFees,
    courseIntroFees: req.body.courseIntroFees,
    slots: JSON.parse(req.body.slots), 
    courseDuration: req.body.courseDuration,
  })
    .then((courses) => res.json(courses))
    .catch((err) => res.json(err));
});

app.use("/products", productRouter);
app.use("/events", eventRouter);

const loadMoreRouter = require("./routes/products_route");
app.use("/products/loadMore", loadMoreRouter);

app.get("/getcourseList", (req, res) => {
  CourseModel.find()
    .then((courseList) => res.json(courseList))
    .catch((err) => res.json(err));
});

app.get("/singlecoursedetails", (req, res) => {
  CourseModel.findOne({ _id: req.query.id })
    .then((singleCourse) => res.json(singleCourse))
    .catch((err) => res.json(err));
});

app.get("/getCoursecrud", (req, res) => {
  CourseModel.find()
    .then((courseList) => res.json(courseList))
    .catch((err) => res.json(err));
});

app.get("/getCourse/:id", (req, res) => {
  const id = req.params.id;
  CourseModel.findById({ _id: id })
    .then((result) => res.json(result))
    .catch((err) => res.json(err));
});

app.delete("/deletecourse/:id", (req, res) => {
  const id = req.params.id;
  CourseModel.findByIdAndDelete({ _id: id })
    .then((res) => res.json(res))
    .catch((err) => res.json(err));
});

app.put("/updateCourse/:id", (req, res) => {
  const id = req.params.id;
  CourseModel.findByIdAndUpdate(
    { _id: id },
    {
      courseName: req.body.courseName,
      courseCode: req.body.courseCode,
      content: req.body.content,
      courseAge: req.body.courseAge,
      courseFees: req.body.courseFees,
      courseIntroFees: req.body.courseIntroFees,
      slots: req.body.slots,
      courseDuration: req.body.courseDuration,
    }
  )
    .then((res) => res.json(res))
    .catch((err) => res.json(err));
});

app.get("/admin_login", cors(), (req, res) => {});

app.post("/admin_login", async (req, res) => {
  const { username, password } = req.body;

  try {
    const check = await adminModel.findOne({ username: username });

    if (!check) {
      res.json("notexist");
    } else {
      res.json("exist");
    }
  } catch (e) {
    console.log("fail");
  }
});

app.listen(PORT, console.log(`Server API running on port ${PORT}`));
