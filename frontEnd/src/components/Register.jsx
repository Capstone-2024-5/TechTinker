import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


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

const Register = ({ handleFormData }) => {
  const navigate = useNavigate();
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
  const [formErrors, setFormErrors] = useState({});
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
  
    setFormErrors(prevErrors => ({
      ...prevErrors,
      [name]: '',
    }));

    if (name.startsWith('Introductory_CourseDetails.') || name.startsWith('Regular_CourseDetails.')) {
      const [section, field] = name.split('.');
      setFormErrors(prevErrors => ({
        ...prevErrors,
        [section]: {
          ...prevErrors[section],
          [field]: '',
        },
      }));
    }
  
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
  
      setFormErrors(prevErrors => ({
        ...prevErrors,
        Address: {
          ...prevErrors.Address,
          [addressField]: '',
        },
      }));
    } else if (name.startsWith('Introductory_CourseDetails.') || name.startsWith('Regular_CourseDetails.')) {
      const [section, field] = name.split('.');
      setFormData(prevData => ({
        ...prevData,
        [section]: {
          ...prevData[section],
          [field]: value,
        },
      }));
  
      setFormErrors(prevErrors => ({
        ...prevErrors,
        [section]: {
          ...prevErrors[section],
          [field]: '',
        },
      }));
    } else {
      setFormData(prevData => ({
        ...prevData,
        [name]: value,
      }));
    }
  };
  
  const handleSubmit = e => {
    e.preventDefault();
    const isValid = validateForm(); 
    if (!isValid) return; 

    const requestData = {
      FirstName: formData.FirstName,
      LastName: formData.LastName,
      PhoneNumber: formData.PhoneNumber,
      Email: formData.Email,
      Age: formData.Age,
      Address: formData.Address,
      RegistrationType: formData.RegistrationType === 'introductory' ? 'Introductory Workshop' : 'Regular Program',
    };

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
      handleFormData(formData); 
      navigate('/checkout'); 
    })
    .catch(error => {
      console.error('Error registering:', error);
    });
  
};

  const validateForm = () => {
    let errors = {};
    let formIsValid = true;
    const nameRegex = /^[A-Za-z]+$/;
    const zipCodeRegex = /^[A-Za-z]\d[A-Za-z]\s\d[A-Za-z]\d$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneNumberRegex = /^\d{3}-\d{3}-\d{4}$/;
    const ageRegex = /^\d{1,2}$/;
    
    if (!formData.FirstName) {
      formIsValid = false;
      errors.FirstName = 'First Name is required';
    } else if (!nameRegex.test(formData.FirstName)) {
      formIsValid = false;
      errors.FirstName = 'First Name should contain only alphabets';
    }

    if (!formData.LastName) {
      formIsValid = false;
      errors.LastName = 'Last Name is required';
    } else if (!nameRegex.test(formData.LastName)) {
      formIsValid = false;
      errors.LastName = 'Last Name should contain only alphabets';
    }
    if (!formData.PhoneNumber) {
      formIsValid = false;
      errors.PhoneNumber = 'Phone Number is required';
    } else if (!phoneNumberRegex.test(formData.PhoneNumber)) {
      formIsValid = false;
      errors.PhoneNumber = 'Invalid phone number format. Please use xxx-xxx-xxxx format with numbers only';
    }

    if (!formData.Email) {
      formIsValid = false;
      errors.Email = 'Email is required';
    } else if (!emailRegex.test(formData.Email)) {
      formIsValid = false;
      errors.Email = 'Invalid email format';
    }

    if (!formData.Age) {
      formIsValid = false;
      errors.Age = 'Age is required';
    } else if (!ageRegex.test(formData.Age)) {
      formIsValid = false;
      errors.Age = 'Age must be maximum 2 digits only';
    }
    
    if (!formData.Address.Line1) {
      formIsValid = false;
      errors.Address = { ...errors.Address, Line1: 'Address Line 1 is required' };
    }
    
    if (!formData.Address.City) {
      formIsValid = false;
      errors.Address = { ...errors.Address, City: 'City is required' };
    }
    
    if (!formData.Address.Province) {
      formIsValid = false;
      errors.Address = { ...errors.Address, Province: 'Province is required' };
    }
    
    if (!formData.Address.Zipcode) {
      formIsValid = false;
      errors.Address = { ...errors.Address, Zipcode: 'Postal Code is required' };
    } else if (!zipCodeRegex.test(formData.Address.Zipcode)) {
      formIsValid = false;
      errors.Address = { ...errors.Address, Zipcode: 'Postal Code should be in the format of A1A 1A1' };
    }
    
    if (!formData.RegistrationType) {
      formIsValid = false;
      errors.RegistrationType = 'Registration Type is required';
    }

    if (formData.RegistrationType === 'introductory' && !formData.Introductory_CourseDetails.CourseName) {
      formIsValid = false;
      errors.CourseName = 'Course Name is required';
    }
  
    if (formData.RegistrationType === 'regular' && !formData.Regular_CourseDetails.CourseName) {
      formIsValid = false;
      errors.CourseName = 'Course Name is required';
    }
  

    if (formData.RegistrationType === 'regular' && !formData.Regular_CourseDetails.StartDate) {
      formIsValid = false;
      errors.StartDate = 'Start Date is required';
    }
  

    if (formData.RegistrationType === 'introductory' && !formData.Introductory_CourseDetails.SelectedDate) {
      formIsValid = false;
      errors.SelectedDate = 'Select Date is required';
    }


  if (formData.RegistrationType === 'regular' && !formData.Regular_CourseDetails.ClassTimings) {
    formIsValid = false;
    errors.ClassTimings = 'Class Timings are required';
  }


  if (formData.RegistrationType === 'introductory' && !formData.Introductory_CourseDetails.SelectedTime) {
    formIsValid = false;
    errors.SelectedTime = 'Select Time is required';
  }
  
    setFormErrors(errors);
    return formIsValid;
  };

  return (
    <Grid container justifyContent="center">
      <Grid item xs={12} md={6}>
        <Typography variant="h4" align="center" gutterBottom style={{ color: '#1C796E', marginTop: '20px' }}>
          Join TechTinkers: Register Here..!
        </Typography>
        <Paper className="course_registration_form" elevation={3} p={3}>
          {registrationSuccess ? (
            <Typography variant="body1" align="center" style={{ color: 'green', marginBottom: '16px' }}>
              Registration successful!
            </Typography>
          ) : (
            <form onSubmit={handleSubmit}>

              <TextField
                fullWidth
                label="First Name"
                name="FirstName"
                value={formData.FirstName}
                onChange={handleInputChange}
                margin="normal"
                error={!!formErrors.FirstName}
                helperText={formErrors.FirstName}
              />
                <TextField
                  fullWidth
                  label="Last Name"
                  name="LastName"
                  value={formData.LastName}
                  onChange={handleInputChange}
                  margin="normal"
                  error={!!formErrors.LastName}
                  helperText={formErrors.LastName}
                />
                <TextField
                  fullWidth
                  label="Phone Number"
                  name="PhoneNumber"
                  value={formData.PhoneNumber}
                  onChange={handleInputChange}
                  margin="normal"
                  error={!!formErrors.PhoneNumber}
                  helperText={formErrors.PhoneNumber}
                />
                <TextField
                  fullWidth
                  label="Email"
                  name="Email"
                  value={formData.Email}
                  onChange={handleInputChange}
                  margin="normal"
                  error={!!formErrors.Email}
                  helperText={formErrors.Email}
                />
<TextField
  fullWidth
  label="Age"
  name="Age"
  value={formData.Age}
  onChange={handleInputChange}
  margin="normal"
  error={!!formErrors.Age}
  helperText={formErrors.Age}
/>

                <TextField
                  fullWidth
                  label="Address Line 1"
                  name="Address.Line1"
                  value={formData.Address?.Line1}
                  onChange={handleInputChange}
                  margin="normal"
                  error={!!formErrors.Address?.Line1}
                  helperText={formErrors.Address?.Line1}
                />
                <TextField
                  fullWidth
                  label="Address Line 2"
                  name="Address.Line2"
                  value={formData.Address.Line2}
                  onChange={handleInputChange}
                  margin="normal"
                />
                <TextField
                  fullWidth
                  label="City"
                  name="Address.City"
                  value={formData.Address?.City}
                  onChange={handleInputChange}
                  margin="normal"
                  error={!!formErrors.Address?.City}
                  helperText={formErrors.Address?.City}
                />
                <FormControl fullWidth margin="normal">
                  <InputLabel>Province</InputLabel>
                  <Select
                    label="Province"
                    name="Address.Province"
                    value={formData.Address?.Province}
                    onChange={handleInputChange}
                    error={!!formErrors.Address?.Province}
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
                  {formErrors.Address?.Province && (
                    <Typography variant="caption" color="error">
                      {formErrors.Address?.Province}
                    </Typography>
                  )}
                </FormControl>
  
                <TextField
                  fullWidth
                  label="Postal Code"
                  name="Address.Zipcode"
                  value={formData.Address?.Zipcode}
                  onChange={handleInputChange}
                  margin="normal"
                  error={!!formErrors.Address?.Zipcode}
                  helperText={formErrors.Address?.Zipcode}
                />
  <FormControl fullWidth margin="normal" error={!!formErrors.RegistrationType}>
    <InputLabel>Registration Type</InputLabel>
    <Select
      label="Registration Type"
      name="RegistrationType"
      value={formData.RegistrationType}
      onChange={handleInputChange}
    >
      <MenuItem value="">Select Registration Type</MenuItem>
      <MenuItem value="introductory">Introductory Workshop</MenuItem>
      <MenuItem value="regular">Regular Program</MenuItem>
    </Select>
    {formErrors.RegistrationType && (
      <Typography variant="caption" color="error">
        {formErrors.RegistrationType}
      </Typography>
    )}
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
  error={!!formErrors.CourseName} 
>
  {courseNames.map(course => (
    <MenuItem key={course.CourseName} value={course.CourseName}>{course.CourseName}</MenuItem>
  ))}
</Select>
{formErrors.CourseName && (
    <Typography variant="caption" color="error">
      {formErrors.CourseName}
    </Typography>
  )}

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
                    error={!!formErrors.SelectedDate} 
                  />
                  {formErrors.SelectedDate && (
  <Typography variant="caption" color="error">
    {formErrors.SelectedDate}
  </Typography>
)}
                </Grid>
                <Grid item xs={6}>
                  <FormControl fullWidth margin="normal">
                    <InputLabel>Select Time</InputLabel>
                    <Select
                      label="Select Time"
                      name="Introductory_CourseDetails.SelectedTime"
                      value={formData.Introductory_CourseDetails.SelectedTime}
                      onChange={handleInputChange}
                      error={!!formErrors.SelectedTime} 
                    >
                      <MenuItem value="Friday - 5:00 PM - 6:00 PM">Friday - 5:00 PM - 6:00 PM</MenuItem>
                      <MenuItem value="Friday - 6:00 PM - 7:00 PM">Friday - 6:00 PM - 7:00 PM</MenuItem>
                      <MenuItem value="Saturday 10:00 AM - 11:00 AM">Saturday 10:00 AM - 11:00 AM</MenuItem>
                      <MenuItem value="Saturday 11:00 AM - 12:00 PM">Saturday 11:00 AM - 12:00 PM</MenuItem>
                      <MenuItem value="Saturday 12:00 PM - 01:00 PM">Saturday 12:00 PM - 01:00 PM</MenuItem>
                      <MenuItem value="Saturday 01:00 PM - 02:00 PM">Saturday 01:00 AM - 02:00 PM</MenuItem>
                    </Select>
                    {formErrors.SelectedTime && (
    <Typography variant="caption" color="error">
      {formErrors.SelectedTime}
    </Typography>
  )}
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
  error={!!formErrors.CourseName} 
>
  {courseNames.map(course => (
    <MenuItem key={course.CourseName} value={course.CourseName}>{course.CourseName}</MenuItem>
  ))}
</Select>
{formErrors.CourseName && (
    <Typography variant="caption" color="error">
      {formErrors.CourseName}
    </Typography>
  )}

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
  error={!!formErrors.StartDate} 
  />
  {formErrors.StartDate && (
<Typography variant="caption" color="error">
{formErrors.StartDate}
</Typography>
)}


                </Grid>
                <Grid item xs={6}>
                  <FormControl fullWidth margin="normal">
                    <InputLabel>Select Time</InputLabel>
                    <Select
                      label="Class Timing"
                      name="Regular_CourseDetails.ClassTimings"
                      value={formData.Regular_CourseDetails.ClassTimings}
                      onChange={handleInputChange}
                      error={!!formErrors.ClassTimings} 
                    >
                      <MenuItem value="Saturday 10:00 AM - 11:00 PM">Saturday 10:00 AM - 11:00 AM</MenuItem>
                      <MenuItem value="Friday 5:00 PM - 6:00 PM">Friday 5:00 PM - 6:00 PM</MenuItem>
                    </Select>
                    {formErrors.ClassTimings && (
    <Typography variant="caption" color="error">
      {formErrors.ClassTimings}
    </Typography>
  )}
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