import React from "react";
import { useParams } from "react-router-dom";
import { Box, IconButton, Stack, Typography } from "@mui/material";
import parse from "html-react-parser";
import axios from "axios";
import { useEffect, useState } from "react";
import Button from '@mui/material/Button';


export default function CourseDetails() {
  const { courseid } = useParams();
  const data = [
    {
      courseName: "LEGO Mindstorms EV3",
      courseCode: "test101",
      content: `<p style="box-sizing: border-box; margin: 0px 0px 10px; line-height: 22px; text-align: left; color: rgb(121, 121, 121); font-family: &quot;Open Sans&quot;, sans-serif; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-indent: 0px; text-transform: none; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; white-space: normal; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; font-size: 14px;"><span style="box-sizing: border-box; color: rgb(0, 0, 0);">The solution enables students to understand and interpret two-dimensional drawings to create three-dimensional models; build, test troubleshoot and revise designs to improve robot performance; Gain practical, hands-on experience using mathematical concepts such as estimating and measuring distance, time and speed.</span></p><p style="box-sizing: border-box; margin: 0px 0px 10px; line-height: 22px; text-align: left; color: rgb(121, 121, 121); font-family: &quot;Open Sans&quot;, sans-serif; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-indent: 0px; text-transform: none; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; white-space: normal; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; font-size: 14px;"><br></p><div class="su-list" style="box-sizing: border-box; margin-bottom: 1.5em; color: rgb(121, 121, 121); font-family: &quot;Open Sans&quot;, sans-serif; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; white-space: normal; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; margin-left: 0px; font-size: 14px;"><p style="box-sizing: border-box; margin: 0px 0px 10px; line-height: 22px; text-align: left;"><br></p><ul><li><span style="box-sizing: border-box; color: rgb(0, 0, 0);">Design and build programmable robots using motors, sensors, gears, wheels, axles, and other technical components</span></li><li><span style="box-sizing: border-box; color: rgb(0, 0, 0);">Understand and interpret two-dimensional drawings to create three-dimensional models.</span></li><li><span style="box-sizing: border-box; color: rgb(0, 0, 0);">Build, test, troubleshoot, and revise designs to improve robot performance.</span></li><li><span style="box-sizing: border-box; color: rgb(0, 0, 0);">Gain practical, hands-on experience using mathematical concepts such as estimating and measuring distance, time, and speed</span></li><li><span style="box-sizing: border-box; color: rgb(0, 0, 0);">Communicate effectively using scientific and technical language.</span></li></ul></div><p style="box-sizing: border-box; margin: 0px 0px 10px; line-height: 22px; text-align: left; color: rgb(121, 121, 121); font-family: &quot;Open Sans&quot;, sans-serif; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-indent: 0px; text-transform: none; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; white-space: normal; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; font-size: 14px;"><br></p><p style="box-sizing: border-box; margin: 0px 0px 10px; line-height: 22px; text-align: left; color: rgb(121, 121, 121); font-family: &quot;Open Sans&quot;, sans-serif; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-indent: 0px; text-transform: none; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; white-space: normal; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; font-size: 14px;"><span style="box-sizing: border-box; color: rgb(0, 0, 0);"><strong style="box-sizing: border-box; font-weight: bold;">Click&nbsp;<a href="https://education.lego.com/en-us/downloads?domainredir=www.legoeducation.com" data-cke-saved-href="https://education.lego.com/en-us/downloads?domainredir=www.legoeducation.com" style="box-sizing: border-box; color: rgb(0, 0, 0); text-decoration: none; outline: none;">here&nbsp;</a>to download LEGO Mindstorms EV3 Software</strong></span></p>`,
      courseAge: "9-14",
      courseFees: "233",
      courseIntroFees: "22",
      slots: [
        {
          cDay: "Monday",
          cStartTime: "01:00 PM",
          cEndTime: "02:00 PM",
        },
        {
          cDay: "Saturday",
          cStartTime: "01:00 PM",
          cEndTime: "02:00 PM",
        },
      ],
      courseDuration: 12,
    },
  ];

  // const [courseData, setCourseData] = useState([]);

  // useEffect(() => {
  //   axios
  //     .get("http://localhost:4000/singlecoursedetails")
  //     .then((courseData) => setCourseData(courseData.data))
  //     .catch((err) => console.log(err));
  // }, []);

  let coursedata = data.map((data) => {
    return (
      <>
        <Stack
          width={"70%"}
          alignItems={"center"}
          flexDirection={"column"}
          borderRadius={2}
          gap={3}
          padding={3}
          className="boxShadowBlue"
        >
          <Typography variant="h4" fontWeight={"bold"} className="fontWeight-800 fontMontserrat textSecondary" sx={{ mt: 6 }}>{data.courseName}</Typography>
          <Box width={"100%"}>{parse(data.content)}</Box>
        </Stack>
        <Stack width={"70%"}>
          <Typography variant="h5" className="textSecondary">
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
          <Stack
            width={"70%"}
            direction={"row"}
            textAlign={"center"}
            alignItems={"center"}
            padding={2}
            borderRadius={2}
            className="courseSchedule boxShadowBlue"
          >
            <>
              <Box sx={{ flex: "1" }}>
                <Typography fontWeight={"bold"} className="textPrimary">
                  {data.slots[0].cDay}
                </Typography>
              </Box>
              <Box sx={{ flex: "1" }}>From: {data.slots[0].cStartTime}</Box>
              <Box sx={{ flex: "1" }}>To: {data.slots[0].cEndTime}</Box>
            </>
          </Stack>
          <Stack
            width={"70%"}
            direction={"row"}
            textAlign={"center"}
            alignItems={"center"}
            padding={2}
            borderRadius={2}
            className="courseSchedule boxShadowBlue"

          >
            <>
              <Box sx={{ flex: "1" }}>
                <Typography fontWeight={"bold"} className="textPrimary">
                  {data.slots[1].cDay}
                </Typography>
              </Box>
              <Box sx={{ flex: "1" }}>From: {data.slots[1].cStartTime}</Box>
              <Box sx={{ flex: "1" }}>To: {data.slots[1].cEndTime}</Box>
            </>
          </Stack>
          <Stack direction={'row'} gap={3} mt={3}>
            <Typography variant="h5" fontWeight={"bolder"} className="textPrimary">
              Full Fee: ${data.courseFees}.99
            </Typography>
            <Typography variant="h5" fontWeight={"bolder"} className="textPrimary">
              Introductory Workshop Fee: ${data.courseIntroFees}.99
            </Typography>
          </Stack>
          <Button variant="contained" sx={{marginTop:"1rem"}} className="btnPrimary">Register Now</Button>
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
            alt="blank"
            className="boxShadowBlue"
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
