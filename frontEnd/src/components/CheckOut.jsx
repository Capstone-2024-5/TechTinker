import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Typography,
  Grid,
  Paper,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  FormControl,
  FormControlLabel,
  RadioGroup,
  Radio,
  TextField,
  Box,
  MenuItem,
  Select,
  InputLabel,
} from '@mui/material';

const Checkout = ({ formData }) => {
  const { RegistrationType, Introductory_CourseDetails, Regular_CourseDetails } = formData;

  const [paymentMethod, setPaymentMethod] = useState('');
  const [cardDetails, setCardDetails] = useState({
    cardHolderName: '',
    cardNumber: '',
    expiryMonth: '',
    expiryYear: new Date().getFullYear(),
    cvv: '',
  });

  const [netbankingDetails, setNetbankingDetails] = useState({
    bankName: '',
    username: '',
    password: '',
  });

  const [paymentSuccess, setPaymentSuccess] = useState(false); // State to track payment success
  const [openDialog, setOpenDialog] = useState(false); // State to manage dialog visibility

  const navigate = useNavigate(); // Hook for navigation

  const registrationTypeLabels = {
    'introductory': 'Introductory Workshop',
    'regular': 'Regular Program'
  };
  const registrationTypeLabel = registrationTypeLabels[RegistrationType] || RegistrationType;

  const grossAmount = RegistrationType === 'introductory' ? 24.99 : 436.95;
  const hst = grossAmount * 0.13;
  const total = grossAmount + hst;

  const handlePaymentMethodChange = (event) => {
    setPaymentMethod(event.target.value);
  };

  const handleCardDetailsChange = (event) => {
    const { name, value } = event.target;
    setCardDetails({ ...cardDetails, [name]: value });
  };

  const handleNetbankingDetailsChange = (event) => {
    const { name, value } = event.target;
    setNetbankingDetails({ ...netbankingDetails, [name]: value });
  };

  const handlePaymentSubmission = () => {
    setPaymentSuccess(true); 
    setOpenDialog(true); 
  };

  const handleDialogClose = () => {
    setOpenDialog(false); 
    navigate('/'); 
  };

  const CreditCardFields = (
    <>
      <TextField
        label="Card Holder Name"
        variant="outlined"
        fullWidth
        margin="normal"
        name="cardHolderName"
        value={cardDetails.cardHolderName}
        onChange={handleCardDetailsChange}
      />
      <TextField
        label="Card Number"
        variant="outlined"
        fullWidth
        margin="normal"
        name="cardNumber"
        value={cardDetails.cardNumber}
        onChange={handleCardDetailsChange}
      />
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <FormControl variant="outlined" fullWidth margin="normal">
            <InputLabel>Expiry Month</InputLabel>
            <Select
              value={cardDetails.expiryMonth}
              onChange={handleCardDetailsChange}
              label="Expiry Month"
              name="expiryMonth"
            >
            <MenuItem value="02">02</MenuItem>
            <MenuItem value="02">03</MenuItem>
            <MenuItem value="02">04</MenuItem>
            <MenuItem value="02">05</MenuItem>
            <MenuItem value="02">06</MenuItem>
            <MenuItem value="02">07</MenuItem>
            <MenuItem value="02">08</MenuItem>
            <MenuItem value="02">09</MenuItem>
            <MenuItem value="02">10</MenuItem>
            <MenuItem value="02">11</MenuItem>
            <MenuItem value="02">12</MenuItem>

            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={6}>
          <FormControl variant="outlined" fullWidth margin="normal">
            <InputLabel>Expiry Year</InputLabel>
            <Select
              value={cardDetails.expiryYear}
              onChange={handleCardDetailsChange}
              label="Expiry Year"
              name="expiryYear"
            >
            <MenuItem value={new Date().getFullYear()}>{new Date().getFullYear()}</MenuItem>
            <MenuItem value={new Date().getFullYear() + 1}>{new Date().getFullYear() + 1}</MenuItem>
            <MenuItem value={new Date().getFullYear() + 2}>{new Date().getFullYear() + 2}</MenuItem>
            <MenuItem value={new Date().getFullYear() + 3}>{new Date().getFullYear() + 3}</MenuItem>
            <MenuItem value={new Date().getFullYear() + 4}>{new Date().getFullYear() + 4}</MenuItem>
            <MenuItem value={new Date().getFullYear() + 5}>{new Date().getFullYear() + 5}</MenuItem>
            <MenuItem value={new Date().getFullYear() + 6}>{new Date().getFullYear() + 6}</MenuItem>
            <MenuItem value={new Date().getFullYear() + 7}>{new Date().getFullYear() + 7}</MenuItem>
            <MenuItem value={new Date().getFullYear() + 8}>{new Date().getFullYear() + 8}</MenuItem>
            <MenuItem value={new Date().getFullYear() + 9}>{new Date().getFullYear() + 9}</MenuItem>
            <MenuItem value={new Date().getFullYear() + 10}>{new Date().getFullYear() + 10}</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>
      <TextField
        label="CVV"
        variant="outlined"
        fullWidth
        margin="normal"
        name="cvv"
        value={cardDetails.cvv}
        onChange={handleCardDetailsChange}
      />
    </>
  );
  
  const NetbankingFields = (
    <>
      <FormControl variant="outlined" fullWidth margin="normal">
        <InputLabel>Select Your Bank</InputLabel>
        <Select
          value={netbankingDetails.bankName}
          onChange={handleNetbankingDetailsChange}
          name="bankName"
          margin="normal"
        >
          <MenuItem value="RBC">RBC</MenuItem>
          <MenuItem value="TD">TD</MenuItem>
          <MenuItem value="BMO">BMO</MenuItem>
          <MenuItem value="Scotiabank">Scotiabank</MenuItem>
          <MenuItem value="CIBC">CIBC</MenuItem>

        </Select>
      </FormControl>
      <TextField
        label="Username"
        variant="outlined"
        fullWidth
        margin="normal"
        name="username"
        value={netbankingDetails.username}
        onChange={handleNetbankingDetailsChange}
      />
      <TextField
        label="Password"
        variant="outlined"
        fullWidth
        margin="normal"
        name="password"
        type="password"
        value={netbankingDetails.password}
        onChange={handleNetbankingDetailsChange}
      />
    </>
  );
  
  return (
    <Grid container justifyContent="center">
      <Grid item xs={12} md={6}>
        <Typography variant="h4" align="center" gutterBottom style={{ color: '#1C796E', marginTop: '20px' }}>
          Make The Payment
        </Typography>
        <Paper elevation={3} style={{ padding: '20px', maxWidth: '1000px', margin: 'auto', marginTop: '20px' }}>

          <Typography variant="body1" gutterBottom>
            <strong>Registration Type:</strong> {registrationTypeLabel}
          </Typography>

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

          <Typography variant="body1" gutterBottom>
            <strong>Gross Amount:</strong> ${grossAmount.toFixed(2)}
          </Typography>

          <Typography variant="body1" gutterBottom>
            <strong>HST:</strong> ${hst.toFixed(2)}
          </Typography>

          <Typography variant="body1" gutterBottom>
            <strong>Total:</strong> ${total.toFixed(2)}
          </Typography>
 
          <Box width="100%">
            <Typography variant="h6" align="center" gutterBottom style={{ color: '#1C796E'}}>
              Payment
            </Typography>
          </Box>

          <Box display="flex" alignItems="center" justifyContent="space-between" marginBottom="20px">
            <Typography variant="body1" gutterBottom>Payment methods:</Typography>
            <FormControl component="fieldset" style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
              <RadioGroup
                aria-label="payment-method"
                name="payment-method"
                value={paymentMethod}
                onChange={handlePaymentMethodChange}
                style={{ display: 'flex', flexDirection: 'row' }}
              >
                <FormControlLabel value="credit_card" control={<Radio />} label="Credit Card/Debit Card" style={{ whiteSpace: 'nowrap' }} />
                <FormControlLabel value="net_banking" control={<Radio />} label="Net Banking" style={{ whiteSpace: 'nowrap' }} />
                <FormControlLabel value="offline_payment" control={<Radio />} label="Offline Payment" style={{ whiteSpace: 'nowrap' }} />
              </RadioGroup>
            </FormControl>
          </Box>


          {paymentMethod === 'credit_card' && CreditCardFields}
          {paymentMethod === 'net_banking' && NetbankingFields}
          {paymentMethod === 'offline_payment' && (
            <Typography variant="body1" gutterBottom style={{ marginTop: '20px', color: '#1C796E'}}>
              Please make the payment by visiting our office within 3 days of the registration or e-transfer at accounts@stemotics.com. Once transferred, contact us back with the transaction ID.
            </Typography>
          )}


{(paymentMethod === 'credit_card' || paymentMethod === 'net_banking') && (
            <Button className="btn_course_register"  variant="contained" onClick={handlePaymentSubmission}>
              PAY NOW
            </Button>
          )}
        </Paper>
      </Grid>
     
      <Dialog
        open={openDialog}
        onClose={handleDialogClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Payment Successful!</DialogTitle>
        <DialogContent>
          <Typography variant="body1" gutterBottom>
            Your payment has been successfully processed.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDialogClose} color="primary" autoFocus>
            OK
          </Button>
        </DialogActions>
      </Dialog>
    </Grid>
  );
};

export default Checkout;
