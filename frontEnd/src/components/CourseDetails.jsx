import React from "react";
import { useParams } from "react-router-dom";
import { Box, IconButton, Stack, Typography } from "@mui/material";
import parse from "html-react-parser";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import Button from "@mui/material/Button";

export default function CourseDetails() {
  const { courseid } = useParams();
  const [image, setImage] = useState();
  const [courseData, setCourseData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`https://techtinker-1.onrender.com/singlecoursedetails?id=${courseid}`)
      .then((courseData) => setCourseData([courseData.data]))
      .catch((err) => console.log(err));
  }, []);

  console.log(courseData);

  let coursedata = courseData.map((data, i) => {
    return (
      <>
        <img
          src={`${data.courseImage}`}
          width={"25%"}
          height={"25%"}
          alt="blank"
          className="boxShadowBlue"
        />
        <Stack
          width={"70%"}
          alignItems={"center"}
          flexDirection={"column"}
          borderRadius={2}
          gap={3}
          padding={3}
          className="boxShadowBlue"
          key={i}
        >
          <Typography
            variant="h4"
            fontWeight={"bold"}
            className="fontWeight-800 fontMontserrat textSecondary"
          >
            {data.courseName}
          </Typography>
          <Box width={"100%"}>{parse(data.content)}</Box>
        </Stack>
        <Stack width={"70%"}>
          <Typography variant="h5" className="textSecondary">
            For Ages: {data.courseAge} years old
          </Typography>
        </Stack>
        <Stack width={"70%"}>
          <Typography variant="h5" className="textSecondary">
            Weeks: {data.courseDuration} weeks
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
            <Typography
              variant="h5"
              fontWeight={"bolder"}
              className="textPrimary"
            >
              Introductory Workshop Fee: ${data.courseIntroFees}.99
            </Typography>
          </Stack>
          <Button
            variant="contained"
            sx={{ marginTop: "1rem" }}
            className="btnPrimary"
            onClick={() => {navigate(`/register?name=${data.courseName}`)}}
          >
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
          {/* <img
            src={`https://techtinker-1.onrender.com/images/${coursedata.image}`}
            width={400}
            height={250}
            alt="blank"
            className="boxShadowBlue"
          /> */}
          {coursedata}
        </Stack>
      </Box>
    </>
  );
}
