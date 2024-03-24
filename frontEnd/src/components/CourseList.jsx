import React from "react";
import CourseCard from "./CourseCard.jsx";
import Stack from "@mui/material/Stack";
import axios from "axios";
import { useEffect, useState } from "react";
import { Typography } from "@mui/material";

// const courses = [
//   {
//     id: 1,
//     title: "Course 1",
//     instructor: "John Doe",
//     description:
//       "This course covers the basics of React, including components, props, and state management.",
//   },
//   {
//     id: 2,
//     title: "Course 2",
//     instructor: "Jane Smith",
//     description:
//       "Learn advanced React concepts such as context, hooks, and performance optimization.",
//   },
//   {
//     id: 3,
//     title: "Course 3",
//     instructor: "Alice Johnson",
//     description:
//       "Explore different state management techniques in React, including Redux and the Context API.",
//   },
//   {
//     id: 4,
//     title: "Course 4",
//     instructor: "Bob Brown",
//     description:
//       "Master React hooks and build functional components with useState, useEffect, and more.",
//   },
//   {
//     id: 5,
//     title: "Course 5",
//     instructor: "Eva Lee",
//     description:
//       "Dive into the fundamentals of React Context API for managing global state in your applications.",
//   },
// ];

export default function CourseList() {
    const [courses, setcourses] = useState([]);

    useEffect(() => {
        axios
            .get("http://localhost:4000/getcourseList")
            .then((courses) => setcourses(courses.data))
            .catch((err) => console.log(err));
    }, []);

    let courseList = courses.map((course, index) => (
        <CourseCard course={course} key={index}></CourseCard>
    ));
    return (
        <>
            <Typography
                align="center"
                variant="h3"
                className="fontWeight-800 fontMontserrat textSecondary"
                sx={{ my: 6 }}
            >
                Courses
            </Typography>
            <Stack
                direction={"row"}
                flexWrap={"wrap"}
                gap={5}
                my={5}
                mx={"auto"}
                width={"80%"}
                justifyContent={"center"}
            >
                {courseList}
            </Stack>
        </>
    );
}
