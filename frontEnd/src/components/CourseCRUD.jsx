import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import Table from "@mui/material/Table";
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
    <div style={{padding:"20px"}}>
        <table style={{margin:"auto", width:"40%"}} border={1}>
          <thead>
            <tr>
              <th align="center">Course Name</th>
              <th align="center">Action</th>
            </tr>
          </thead>
          <tbody>
            {courseList.map((courseNames, i) => {
              return (
                <tr key={i}>
                  <td align="center">{courseNames.courseName}</td>
                  <td align="center">
                    <Link to={`/courseUpdate/${courseNames._id}`}>Update</Link>
                    <Button
                      onClick={(e) => handleDelete(courseNames._id)}
                    >
                      <IconButton aria-label="delete">
                        <DeleteIcon />
                      </IconButton>
                    </Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
    </div>
  );
}
