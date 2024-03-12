import * as React from "react";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function CourseCard({ course }) {
  const navigate = useNavigate();

  return (
    <Paper
      className="courseListCards"
      elevation={4}
      sx={{ width: 310, padding: 1.5 }}
      onClick={() => {
        navigate(`/courselist/${course._id}`);
      }}
    >
      <Stack direction="column" spacing={1} useFlexGap width={300}>
        <img src="#" width={300} height={150} alt="blank" />
        <Typography variant="h5">{course.courseName}</Typography>
        <Typography variant="body1">{course.courseCode}</Typography>
      </Stack>
    </Paper>
  );
}
