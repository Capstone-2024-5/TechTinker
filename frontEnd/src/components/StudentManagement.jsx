// StudentManagement.jsx

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const StudentManagement = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    try {    
      const response = await axios.get('http://localhost:4000/students');      
      setStudents(response.data); 
    } catch (error) {
      
    }
  };
  const tableStyle = {
    border: '1px solid teal',
    width: '100%',
    marginBottom: '20px'
  };

  const cellStyle = {
    border: '1px solid teal',
    padding: '8px',
    textAlign: 'left',
  };

  const dashboardStyle = {
    color : 'teal',
    textAlign: 'center',
  };
  const headerStyle = {
    border: '1px solid teal',
    padding: '8px',
    textAlign: 'left',
    background: 'teal',
    color: 'white',
  };

  return (
    <div>
      <h1 style={dashboardStyle}>Student Dashboard</h1>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={headerStyle}>First Name</th>
            <th style={headerStyle}>Last Name</th>
            <th style={headerStyle}>Phone Number</th>
            <th style={headerStyle}>Email</th>
            <th style={headerStyle}>Age</th>
            <th style={headerStyle}>Registration Type</th>
            <th style={headerStyle}>Course Details</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => (
            <tr key={index}>
              <td style={cellStyle}>{student.FirstName}</td>
              <td style={cellStyle}>{student.LastName}</td>
              <td style={cellStyle}>{student.PhoneNumber}</td>
              <td style={cellStyle}>{student.Email}</td>
              <td style={cellStyle}>{student.Age}</td>
              <td style={cellStyle}>{student.RegistrationType}</td>
              <td style={cellStyle}>
                {student.RegistrationType === 'Introductory Workshop' && (
                  <>
                    <div>Course Name: {student.Introductory_CourseDetails.CourseName}</div>
                    <div>Date: {student.Introductory_CourseDetails.SelectedDate}</div>
                    <div>Time: {student.Introductory_CourseDetails.SelectedTime}</div>
                  </>
                )}
                {student.RegistrationType === 'Regular Program' && (
                  <>
                    <div>Course Name: {student.Regular_CourseDetails.CourseName}</div>
                    <div>Start Date: {student.Regular_CourseDetails.StartDate}</div>
                    <div>Class Timings: {student.Regular_CourseDetails.ClassTimings}</div>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentManagement;
