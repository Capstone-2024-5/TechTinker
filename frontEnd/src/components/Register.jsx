
import React, { useState } from 'react';
import {
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  Grid,
  Paper,
  Typography,
} from '@mui/material';

const Register = () => {
  const [formData, setFormData] = useState({
    FirstName: '',
    LastName: '',
    PhoneNumber: '',
    Email: '',
    Age: '',
    Address: {
      Line1: '',
      Line2: '',
      City: '',
      Province: '',
      Zipcode: '',
    },
    RegistrationType: '',
    Introductory_CourseDetails: {
      CourseName: '',
      SelectedDate: null,
      SelectedTime: '',
    },
    Regular_CourseDetails: {
      CourseName: '',
      StartDate: null,
      ClassTiming: '',
    },
  });

  const handleDateChange = (date, field) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: {
        ...prevData[field],
        SelectedDate: date,
      },
    }));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <Grid container justifyContent="center">
      <Grid item xs={12} md={6}> {/* Adjust md={6} as needed for responsiveness */}
      <Typography
          variant="h3"
          align="center"
          gutterBottom
          style={{ color: '#1C796E' , marginTop:'20px'}} // Set the color here
        >
          Join XYZ: Register Here..!
        </Typography>
    <Paper className="course_registration_form" elevation={3} p={3} >
          <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
            <Grid item xs={12}>
                <Typography variant="subtitle1">Personal Information</Typography>
              </Grid>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  label="First Name"
                  name="FirstName"
                  value={formData.FirstName}
                  onChange={handleInputChange}
                  margin="normal"
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  label="Last Name"
                  name="LastName"
                  value={formData.LastName}
                  onChange={handleInputChange}
                  margin="normal"
                />
              </Grid>

              {/* Second Row */}
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  label="Phone Number"
                  name="PhoneNumber"
                  value={formData.PhoneNumber}
                  onChange={handleInputChange}
                  margin="normal"
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  label="Email"
                  name="Email"
                  value={formData.Email}
                  onChange={handleInputChange}
                  margin="normal"
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  label="Age"
                  name="Age"
                  value={formData.Age}
                  onChange={handleInputChange}
                  margin="normal"
                />
              </Grid>
              </Grid>

              <Grid container spacing={2}>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  label="Address Line 1"
                  name="Line1"
                  value={formData.Line1}
                  onChange={handleInputChange}
                  margin="normal"
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  label="Address Line 2"
                  name="Line2"
                  value={formData.Line2}
                  onChange={handleInputChange}
                  margin="normal"
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  label="City"
                  name="City"
                  value={formData.City}
                  onChange={handleInputChange}
                  margin="normal"
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  label="Province"
                  name="Province"
                  value={formData.Province}
                  onChange={handleInputChange}
                  margin="normal"
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  label="Postal Code"
                  name="Zipcode"
                  value={formData.Zipcode}
                  onChange={handleInputChange}
                  margin="normal"
                />
              </Grid>
              </Grid>

            {/* Registration Type */}
            <FormControl fullWidth margin="normal">
            <InputLabel>Registration Type</InputLabel>
            <Select
              label="Registration Type"
              name="RegistrationType"
              value={formData.RegistrationType}
              onChange={handleInputChange}
            >
              <MenuItem value="introductory">Introductory Workshop</MenuItem>
              <MenuItem value="regular">Regular Program</MenuItem>
            </Select>
          </FormControl>
           {/* Conditional label for Registration Type */}
           {formData.RegistrationType && (
              <Typography variant="body2" color="textSecondary" style={{ marginTop: '8px' }}>
                {formData.RegistrationType === 'introductory'
                  ? 'Introductory workshops are offered only on Friday & Saturday.'
                  : 'Regular Programs are offered only on Friday & Saturday.'}
              </Typography>
            )}

            {/* Introductory Course Details */}
            {formData.RegistrationType === 'introductory' && (
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <FormControl fullWidth margin="normal">
                  <InputLabel>Course Name</InputLabel>
                  <Select
                    label="Course Name"
                    name="CourseName"
                    value={formData.Introductory_CourseDetails.CourseName}
                    onChange={handleInputChange}
                  >
                    {/* Your course options */}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={6}>
              <TextField
                fullWidth
                type="date"
                label="Select Date"
                name="SelectedDate"
                value={formData.Introductory_CourseDetails.SelectedDate}
                onChange={(e) => handleDateChange(e.target.value, 'Introductory_CourseDetails')}
                InputLabelProps={{
                  shrink: true,
                }}
                margin="normal"
              />
            </Grid>
              <Grid item xs={6}>
                <FormControl fullWidth margin="normal">
                  <InputLabel>Select Time</InputLabel>
                  <Select
                    label="Select Time"
                    name="SelectedTime"
                    value={formData.Introductory_CourseDetails.SelectedTime}
                    onChange={handleInputChange}
                  >
                    {/* Your course options */}
                  </Select>
                </FormControl>
                </Grid>
            </Grid>
          )}

{formData.RegistrationType === 'regular' && (
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <FormControl fullWidth margin="normal">
                  <InputLabel>Course Name</InputLabel>
                  <Select
                    label="Course Name"
                    name="CourseName"
                    value={formData.Regular_CourseDetails.CourseName}
                    onChange={handleInputChange}
                  >
                    {/* Your course options */}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={6}>
              <TextField
                fullWidth
                type="date"
                label="Start Date"
                name="Start Date"
                value={formData.Introductory_CourseDetails.SelectedDate}
                onChange={(e) => handleDateChange(e.target.value, 'Regular_CourseDetails')}
                InputLabelProps={{
                  shrink: true,
                }}
                margin="normal"
              />
            </Grid>
              <Grid item xs={6}>
              <FormControl fullWidth margin="normal">
                  <InputLabel>Select Time</InputLabel>
                  <Select
                    label="Class Time"
                    name="ClassTiming"
                    value={formData.Introductory_CourseDetails.ClassTiming}
                    onChange={handleInputChange}
                  >
                    {/* Your course options */}
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
          )}

            {/* Submit Button */}
            <Button className="btn_course_register" type="submit" variant="contained">
              Register
            </Button>
          </form>
        </Paper>
    
        </Grid>
        </Grid>
  );
};

export default Register;



