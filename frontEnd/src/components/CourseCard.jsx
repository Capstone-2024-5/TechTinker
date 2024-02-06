import * as React from "react";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

export default function CourseCard({course}) {
  return (
    <Paper elevation={4} sx={{width: 330, padding: 1.5}}>
      <Stack direction="column" spacing={1} useFlexGap width={300}>
        <img src="../public/black.jpg" width={300} height={150} alt="blank" />
        <Typography variant="h5">{course.title}</Typography>
        <Typography variant="body1">{course.description}</Typography>
      </Stack>
    </Paper>
  );
}
