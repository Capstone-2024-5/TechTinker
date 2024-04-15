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
        <img src={`http://localhost:4000/images/${course.image}`} width={"100%"} height={"250px"} alt="blank" style={{objectFit:"cover"}} />
        <Typography variant="h5" className="cardTitle">{course.courseName}</Typography>
        <Typography variant="body1" className="cardText">{course.courseCode}</Typography>
      </Stack>
    </Paper>
  );
}
