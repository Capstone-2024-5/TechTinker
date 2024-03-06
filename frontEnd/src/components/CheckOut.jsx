import React from 'react';
import {
  Typography,
  Grid,
  Paper,
} from '@mui/material';

const Checkout = ({ formData }) => {
  // Destructure the formData object to access the required values
  const { RegistrationType, Introductory_CourseDetails, Regular_CourseDetails } = formData;

  // Define the registration type labels
  const registrationTypeLabels = {
    'introductory': 'Introductory Workshop',
    'regular': 'Regular Program'
  };

  // Get the label for the registration type
  const registrationTypeLabel = registrationTypeLabels[RegistrationType] || RegistrationType;

  // Define the fixed Gross Amount based on the Registration Type
  const grossAmount = RegistrationType === 'introductory' ? 24.99 : 436.95;

  // Calculate HST (13% of the Gross Amount)
  const hst = grossAmount * 0.13;

  // Calculate the Total (Gross Amount + HST)
  const total = grossAmount + hst;

  return (
    <Grid container justifyContent="center">
      <Grid item xs={12} md={6}>
        <Typography variant="h4" align="center" gutterBottom style={{ color: '#1C796E', marginTop: '20px' }}>
          CheckOut
        </Typography>
        <Paper elevation={3} style={{ padding: '20px', width: '100%', marginTop: '20px' }}>

          {/* Display the values taken from Registration.jsx */}
          <Typography variant="body1" gutterBottom>
            <strong>Registration Type:</strong> {registrationTypeLabel}
          </Typography>
          {/* Display Course details based on Registration Type */}
          {RegistrationType === 'introductory' ? (
            <>
              <Typography variant="body1" gutterBottom>
                <strong>Course Name:</strong> {Introductory_CourseDetails.CourseName}
              </Typography>
              <Typography variant="body1" gutterBottom>
                <strong>Date:</strong> {Introductory_CourseDetails.SelectedDate}
              </Typography>
              <Typography variant="body1" gutterBottom>
                <strong>Class Time:</strong> {Introductory_CourseDetails.SelectedTime}
              </Typography>
            </>
          ) : (
            <>
              <Typography variant="body1" gutterBottom>
                <strong>Course Name:</strong> {Regular_CourseDetails.CourseName}
              </Typography>
              <Typography variant="body1" gutterBottom>
                <strong>Start Date:</strong> {Regular_CourseDetails.StartDate}
              </Typography>
              <Typography variant="body1" gutterBottom>
                <strong>Class Timings:</strong> {Regular_CourseDetails.ClassTimings}
              </Typography>
            </>
          )}

          {/* Display the fixed Gross Amount */}
          <Typography variant="body1" gutterBottom>
            <strong>Gross Amount:</strong> ${grossAmount.toFixed(2)}
          </Typography>

          {/* Display the calculated HST */}
          <Typography variant="body1" gutterBottom>
            <strong>HST:</strong> ${hst.toFixed(2)}
          </Typography>

          {/* Display the Total, which is the Gross Amount + HST */}
          <Typography variant="body1" gutterBottom>
            <strong>Total:</strong> ${total.toFixed(2)}
          </Typography>

        </Paper>
      </Grid>
    </Grid>
  );
};

export default Checkout;
