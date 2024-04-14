import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";
import Table from "@mui/material/Table";
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";

export default function CourseCRUD() {
  const [courseList, setCourseList] = useState([]);
  const navigate = useNavigate();
  const getcourses = () => {
    axios
      .get("http://localhost:4000/getCoursecrud")
      .then((result) => setCourseList(result.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => getcourses(), []);

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:4000/deletecourse/${id}`)
      .then((res) => console.log(res))
      .then(() => getcourses())
      .catch((err) => console.log(err));
  };

  const courseNames = courseList.map((names) => {
    return names.courseName;
  });

  return (
    <div style={{ padding: "20px" }}>
      <Table  style={{ margin: "auto", width: "40%" }} size="small" border={1}>
        <TableHead>
          <TableRow>
            <TableCell align="center">Course Name</TableCell>
            <TableCell align="center">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {courseList.map((courseNames, i) => {
            return (
              <TableRow key={i}>
                <TableCell align="center">{courseNames.courseName}</TableCell>
                <TableCell align="center">
                  <Button onClick={() => {navigate(`/courseUpdate/${courseNames._id}`)}}>Update</Button>
                    <IconButton aria-label="delete" onClick={(e) => handleDelete(courseNames._id)}>
                      <DeleteIcon />
                    </IconButton>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
}
