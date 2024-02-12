import React, { useState, useEffect } from 'react';
import axios from 'axios';
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
      SelectedDate: '',
      SelectedTime: '',
    },
    Regular_CourseDetails: {
      CourseName: '',
      StartDate: '', 
      ClassTimings: '',
    },
  });
  

  const [courseNames, setCourseNames] = useState([]);
  const [registrationSuccess, setRegistrationSuccess] = useState(false);

  useEffect(() => {
    if (formData.Age !== '') {
      fetchCourseNames();
    }
  }, [formData.Age]);

  const fetchCourseNames = () => {
    axios.get('http://localhost:4000/api/courseDetails', {
      params: {
        Age: formData.Age,
      }
    })
      .then(response => {
        setCourseNames(response.data.courseDetails);
      })
      .catch(error => {
        console.error('Error fetching course details:', error);
      });
  };

  const handleDateChange = (date, field) => {
    setFormData(prevData => ({
      ...prevData,
      [field]: {
        ...prevData[field],
        SelectedDate: date,
      },
    }));
  };

  const handleInputChange = event => {
    const { name, value } = event.target;
  
    if (name === 'Age') {
      setFormData(prevData => ({
        ...prevData,
        [name]: value,
      }));
    } else if (name.startsWith('Address.')) {
      const addressField = name.split('.')[1];
      setFormData(prevData => ({
        ...prevData,
        Address: {
          ...prevData.Address,
          [addressField]: value,
        },
      }));
    } else if (name.startsWith('Introductory_CourseDetails.') || name.startsWith('Regular_CourseDetails.')) {
      const [section, courseField] = name.split('.');
      setFormData(prevData => ({
        ...prevData,
        [section]: {
          ...prevData[section],
          [courseField]: value,
        },
      }));
    } else {
      setFormData(prevData => ({
        ...prevData,
        [name]: value,
      }));
    }
  
    if (name === 'Regular_CourseDetails.StartDate') {
      setFormData(prevData => ({
        ...prevData,
        Regular_CourseDetails: {
          ...prevData.Regular_CourseDetails,
          StartDate: value,
        },
      }));
    }
  };
  
  const handleSubmit = e => {
    e.preventDefault();
    const requestData = {
      FirstName: formData.FirstName,
      LastName: formData.LastName,
      PhoneNumber: formData.PhoneNumber,
      Email: formData.Email,
      Age: formData.Age,
      Address: formData.Address,
      RegistrationType: formData.RegistrationType,
    };
  
    // Set course details based on the selected registration type
    if (formData.RegistrationType === 'introductory') {
      requestData.Introductory_CourseDetails = {
        CourseName: formData.Introductory_CourseDetails.CourseName,
        SelectedDate: formData.Introductory_CourseDetails.SelectedDate,
        SelectedTime: formData.Introductory_CourseDetails.SelectedTime,
      };
    } else {
      requestData.Regular_CourseDetails = {
        CourseName: formData.Regular_CourseDetails.CourseName,
        StartDate: formData.Regular_CourseDetails.StartDate,
        ClassTimings: formData.Regular_CourseDetails.ClassTimings,
      };
    }
  
    axios.post('http://localhost:4000/api/register', requestData)
      .then(response => {
        console.log('Registration successful:', response.data);
        setRegistrationSuccess(true);
      })
      .catch(error => {
        console.error('Error registering:', error);
      });
  };
  
  
  
  return (
    <Grid container justifyContent="center">
      <Grid item xs={12} md={6}>
        <Typography
          variant="h3"
          align="center"
          gutterBottom
          style={{ color: '#1C796E', marginTop: '20px' }}
        >
          Join XYZ: Register Here..!
        </Typography>
        <Paper className="course_registration_form" elevation={3} p={3}>
          {registrationSuccess ? (
            <Typography variant="body1" align="center" style={{ color: 'green', marginBottom: '16px' }}>
              Registration successful!
            </Typography>
          ) : (
            
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
                  name="Address.Line1"
                  value={formData.Address.Line1}
                  onChange={handleInputChange}
                  margin="normal"
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  label="Address Line 2"
                  name="Address.Line2"
                  value={formData.Address.Line2}
                  onChange={handleInputChange}
                  margin="normal"
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  label="City"
                  name="Address.City"
                  value={formData.Address.City}
                  onChange={handleInputChange}
                  margin="normal"
                />
              </Grid>
              <Grid item xs={6}>
  <FormControl fullWidth margin="normal">
    <InputLabel>Province</InputLabel>
    <Select
      label="Province"
      name="Address.Province"
      value={formData.Address.Province}
      onChange={handleInputChange}
    >
      <MenuItem value="">Select Province</MenuItem>
      <MenuItem value="Alberta">Alberta</MenuItem>
      <MenuItem value="British Columbia">British Columbia</MenuItem>
      <MenuItem value="Manitoba">Manitoba</MenuItem>
      <MenuItem value="New Brunswick">New Brunswick</MenuItem>
      <MenuItem value="Newfoundland and Labrador">Newfoundland and Labrador</MenuItem>
      <MenuItem value="Northwest Territories">Northwest Territories</MenuItem>
      <MenuItem value="Nova Scotia">Nova Scotia</MenuItem>
      <MenuItem value="Nunavut">Nunavut</MenuItem>
      <MenuItem value="Ontario">Ontario</MenuItem>
      <MenuItem value="Prince Edward Island">Prince Edward Island</MenuItem>
      <MenuItem value="Quebec">Quebec</MenuItem>
      <MenuItem value="Saskatchewan">Saskatchewan</MenuItem>
      <MenuItem value="Yukon">Yukon</MenuItem>
      
    </Select>
  </FormControl>
</Grid>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  label="Postal Code"
                  name="Address.Zipcode"
                  value={formData.Address.Zipcode}
                  onChange={handleInputChange}
                  margin="normal"
                />
              </Grid>
            </Grid>
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
            {formData.RegistrationType && (
              <Typography variant="body2" color="textSecondary" style={{ marginTop: '8px' }}>
                {formData.RegistrationType === 'introductory'
                  ? 'Introductory workshops are offered only on Friday & Saturday.'
                  : 'Regular Programs are offered only on Friday & Saturday.'}
              </Typography>
            )}
            {formData.RegistrationType === 'introductory' && (
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <FormControl fullWidth margin="normal">
                    <InputLabel>Course Name</InputLabel>
                    <Select
  label="Course Name"
  name="Introductory_CourseDetails.CourseName"
  value={formData.Introductory_CourseDetails.CourseName}
  onChange={handleInputChange}
>
  {courseNames.map(course => (
    <MenuItem key={course.CourseName} value={course.CourseName}>{course.CourseName}</MenuItem>
  ))}
</Select>

                  </FormControl>
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    fullWidth
                    type="date"
                    label="Select Date"
                    name="Introductory_CourseDetails.SelectedDate"
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
                      name="Introductory_CourseDetails.SelectedTime"
                      value={formData.Introductory_CourseDetails.SelectedTime}
                      onChange={handleInputChange}
                    >
                      <MenuItem value="Friday - 5:00 PM - 6:00 PM">Friday - 5:00 PM - 6:00 PM</MenuItem>
                      <MenuItem value="Friday - 6:00 PM - 7:00 PM">Friday - 6:00 PM - 7:00 PM</MenuItem>
                      <MenuItem value="Saturday 10:00 AM - 11:00 AM">Saturday 10:00 AM - 11:00 AM</MenuItem>
                      <MenuItem value="Saturday 11:00 AM - 12:00 PM">Saturday 11:00 AM - 12:00 PM</MenuItem>
                      <MenuItem value="Saturday 12:00 PM - 01:00 PM">Saturday 12:00 PM - 01:00 PM</MenuItem>
                      <MenuItem value="Saturday 01:00 PM - 02:00 PM">Saturday 01:00 AM - 02:00 PM</MenuItem>
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
  name="Regular_CourseDetails.CourseName"
  value={formData.Regular_CourseDetails.CourseName}
  onChange={handleInputChange}
>
  {courseNames.map(course => (
    <MenuItem key={course.CourseName} value={course.CourseName}>{course.CourseName}</MenuItem>
  ))}
</Select>

                  </FormControl>
                </Grid>
                <Grid item xs={6}>
                <TextField
  fullWidth
  type="date"
  label="Start Date"
  name="Regular_CourseDetails.StartDate"
  value={formData.Regular_CourseDetails.StartDate} 
  onChange={(e) => handleInputChange(e)} 
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
                      label="Class Timing"
                      name="Regular_CourseDetails.ClassTimings"
                      value={formData.Regular_CourseDetails.ClassTimings}
                      onChange={handleInputChange}
                    >
                      <MenuItem value="Saturday 10:00 AM - 11:00 PM">Saturday 10:00 AM - 11:00 AM</MenuItem>
                      <MenuItem value="Friday 5:00 PM - 6:00 PM">Friday 5:00 PM - 6:00 PM</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
              </Grid>
            )}
           <Button className="btn_course_register" type="submit" variant="contained">
                Register
              </Button>
            </form>
          )}
     </Paper>
      </Grid>
    </Grid>
  );
};

export default Register;
