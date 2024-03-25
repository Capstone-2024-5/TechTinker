import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import IconButton from '@mui/material/IconButton';


export default function CourseCRUD() {
  const [courseList, setCourseList] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/getCoursecrud")
      .then((result) => setCourseList(result.data))
      .catch((err) => console.log(err));
  }, []);

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:4000/deletecourse/${id}`)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  const courseNames = courseList.map((names) => {
    return names.courseName;
  });

  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ width: 650, margin: "auto" }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">Course Name</TableCell>
              <TableCell align="center">Action</TableCell>
            </TableRow>
          </TableHead>
          <tbody>
            {courseList.map((courseNames) => {
              return (
                <TableRow>
                  <TableCell align="center">{courseNames.courseName}</TableCell>
                  <TableCell align="center">
                    <Link to={`/courseUpdate/${courseNames._id}`}>Update</Link>
                    <Button
                      onClick={(e) => handleDelete(courseNames._id)}
                    >
                      <IconButton aria-label="delete">
                        <DeleteIcon />
                      </IconButton>
                    </Button>
                  </TableCell>
                </TableRow>
              );
            })}
          </tbody>
        </Table>
      </TableContainer>
    </>
  );
}
