import React from "react";
import CourseCard from "./CourseCard.jsx";
import Stack from "@mui/material/Stack";
import axios from "axios";
import { useEffect, useState } from "react";
import { Typography } from "@mui/material";


export default function CourseList() {
    const [courses, setcourses] = useState([]);

    useEffect(() => {
        axios
            .get("https://techtinker-1.onrender.com/getcourseList")
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
