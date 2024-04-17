import React, { useState } from 'react';
import { TextField, Button, Container, Grid, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const LoginForm = () => {
  const history = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState({});
  
  // console.log(username, password);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const isValid = validateForm();
    if(!isValid) return;
  
    try {
      const response = await axios.post("https://techtinker-1.onrender.com/admin", {
        username,
        password
      });
  
      // Check if the response status is in the 2xx range
      if (response.status >= 200 && response.status < 300) {
        // Assuming the response data contains the admin information
        const adminData = response.data;
        history("/admin_dashboard", { state: { id: adminData.username } });
      } else {
        // Handle other status codes
        alert("User not signed up");
      }
    } catch (error) {
      // Handle network errors or other errors
      alert("Wrong details");
      console.error('Error:', error);
    }
  };

  // Function to validate form field
  const validateForm = () => {
    let errors = {};
    let formIsValid = true;

    // Add validation rules for each field
    if(!username){
      formIsValid = false;
      errors.username = "Username is required";
    }

    if(!password){
      formIsValid = false;
      errors.password = "Password is required";
    }

    setError(errors);
    return formIsValid;
  };
  
  return (
    <Container maxWidth="md" style={{ backgroundColor: '#f0f0f0', minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '10px' }}>
      <Grid container spacing={3} alignItems="center" justifyContent="center">
        <Grid item xs={6}>
          <div style={{ textAlign: 'center', marginTop: 10}}>
            <Typography variant="h4" gutterBottom sx={{color: '#ff4500', fontWeight: 'bold', marginBottom: '40px', paddingTop: '25px' }}>
                  TECH<span style={{ color: '#4b0082' }}>TINKER</span>
            </Typography>
          </div>
        </Grid>
        <Grid item xs={6}>
            <div style={{ textAlign: 'center', marginTop: 10}}>
              <Typography variant="h5" gutterBottom sx={{color: '#ff4500', fontWeight: 'bold', paddingTop: '25px' }}>
                    ADMIN<span style={{ color: '#4b0082' }}>LOGIN</span>
              </Typography>
            </div>  
          <form onSubmit={handleSubmit}>
            
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  label='Username'
                  id='username'
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  fullWidth
                  error = {!!error.username}
                  helperText = {error.username}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  type='password'
                  id='password'
                  label='Password'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  fullWidth
                  error = {!!error.password}
                  helperText = {error.password}
                />
              </Grid>
              <Grid item xs={12} textAlign="center">
                <Button type="submit" variant="contained" color="primary">
                  Login
                </Button>
              </Grid>
            </Grid>
          </form>
        </Grid>
      </Grid>
    </Container>
  );
};

export default LoginForm;
