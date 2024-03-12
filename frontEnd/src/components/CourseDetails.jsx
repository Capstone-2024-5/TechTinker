import React from "react";
import { useParams } from "react-router-dom";
import { Box, IconButton, Stack, Typography } from "@mui/material";
import parse from "html-react-parser";
import axios from "axios";
import { useEffect, useState } from "react";
import Button from "@mui/material/Button";

export default function CourseDetails() {
  const { courseid } = useParams();

  const [courseData, setCourseData] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:4000/singlecoursedetails?id=${courseid}`)
      .then((courseData) => setCourseData([courseData.data]))
      .catch((err) => console.log(err));
  }, []);

  console.log(courseData);

  let coursedata = courseData.map((data) => {
    return (
      <>
        <Stack
          width={"70%"}
          alignItems={"center"}
          flexDirection={"column"}
          border={"1px solid darkgrey"}
          borderRadius={2}
          gap={3}
          padding={3}
        >
          <Typography variant="h4" fontWeight={"bold"}>
            {data.courseName}
          </Typography>
          <Box width={"100%"}>{parse(data.content)}</Box>
        </Stack>
        <Stack width={"70%"}>
          <Typography variant="h5">
            For Ages: {data.courseAge} years old
          </Typography>
        </Stack>
        <Stack
          flexDirection={"column"}
          gap={1}
          alignItems={"center"}
          width={"100%"}
          marginY={1}
        >
          {data.slots.map((slot) => {
            return (
              <>
                <Stack
                  width={"70%"}
                  direction={"row"}
                  textAlign={"center"}
                  alignItems={"center"}
                  padding={2}
                  border={"1px solid darkgrey"}
                  borderRadius={2}
                  className="courseSchedule"
                >
                  <Box sx={{ flex: "1" }}>
                    <Typography fontWeight={"bold"}>{slot.cDay}</Typography>
                  </Box>
                  <Box sx={{ flex: "1" }}>From: {slot.cStartTime}</Box>
                  <Box sx={{ flex: "1" }}>To: {slot.cEndTime}</Box>
                </Stack>
              </>
            );
          })}

          <Stack direction={"row"} gap={3} mt={3}>
            <Typography variant="h5" fontWeight={"bolder"}>
              Full Fee: ${data.courseFees}.99
            </Typography>
            <Typography variant="h5" fontWeight={"bolder"}>
              Introductory Workshop Fee: ${data.courseIntroFees}.99
            </Typography>
          </Stack>
          <Button variant="contained" sx={{ marginTop: "1rem" }}>
            Register Now
          </Button>
        </Stack>
      </>
    );
  });

  return (
    <>
      {/* {courseid} */}
      <Box>
        <Stack
          direction={"column"}
          gap={4}
          alignItems={"center"}
          margin={"auto"}
          width={"90%"}
          padding={3}
        >
          <img
            src="#"
            width={400}
            height={250}
            border={"1px solid red"}
            alt="blank"
          />
          {coursedata}

          {/* <Stack width={"70%"} border={"1px solid blue"}>
            <Typography variant="h4">Course:</Typography>
          </Stack> */}
        </Stack>
      </Box>
    </>
  );
}
