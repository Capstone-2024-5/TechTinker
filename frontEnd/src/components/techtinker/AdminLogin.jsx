import React, { useState } from 'react';
import { TextField, Button, Container, Grid, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const LoginForm = () => {
  const history = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  console.log(username, password);
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:4000/admin_login", {
        username,
        password
      })
        .then(res=>{
          if(res.data = "exist"){
              history("/admin_main",{state:{id:username}})
          }
          else if(res.data === "notexist"){
              alert("User have not sign up")
          }
        })
        .catch(e=>{
            alert("wrong details")
            console.log(e);
        })
    } catch (error) {
      console.error('Error:', error);
    }
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
              <Typography variant="h5" gutterBottom sx={{color: '#ff4500', fontWeight: 'bold', marginBottom: '40px', paddingTop: '25px' }}>
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
