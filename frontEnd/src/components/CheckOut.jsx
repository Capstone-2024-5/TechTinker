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

  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);
  

  const [paymentMethodError, setPaymentMethodError] = useState('');
  const [cardDetailsError, setCardDetailsError] = useState({});
  const [netbankingDetailsError, setNetbankingDetailsError] = useState({});
  
  const navigate = useNavigate();


  const validateForm = () => {
    let isValid = true;
    let cardErrors = {};
    let netbankingErrors = {};


    if (!paymentMethod) {
      setPaymentMethodError('Select payment method');
      isValid = false;
    } else {
      setPaymentMethodError('');
    }

//Validation for credit card/Debit card payment
    if (paymentMethod === 'credit_card') {
      if (!String(cardDetails.cardHolderName).trim()) {
        cardErrors.cardHolderName = 'Card holder name is required';
        isValid = false;
      }
      if (!String(cardDetails.cardNumber).trim()) {
        cardErrors.cardNumber = 'Card number is required';
        isValid = false;
      }
      if (!String(cardDetails.expiryMonth).trim()) {
        cardErrors.expiryMonth = 'Expiry month is required';
        isValid = false;
      }
      if (!String(cardDetails.expiryYear).trim()) {
        cardErrors.expiryYear = 'Expiry year is required';
        isValid = false;
      }
      if (!String(cardDetails.cvv).trim()) {
        cardErrors.cvv = 'CVV is required';
        isValid = false;
      }
      setCardDetailsError(cardErrors);
    }


    if (paymentMethod === 'net_banking') {

      if (!String(netbankingDetails.username).trim()) {
        netbankingErrors.username = 'Username is required';
        isValid = false;
      }
      if (!String(netbankingDetails.password).trim()) {
        netbankingErrors.password = 'Password is required';
        isValid = false;
      }
      setNetbankingDetailsError(netbankingErrors);
    }

    return isValid;
  };

  const handlePaymentMethodChange = (event) => {
    setPaymentMethod(event.target.value);
  };


  const handleCardDetailsChange = (event) => {
    const { name, value } = event.target;
    let error = '';
  
    if (name === 'cardNumber') {
      
      if (!/^\d*$/.test(value)) {
        error = 'Card number must contain only digits';
      } else if (value.length !== 16) {

        error = 'Card number must be 16 digits';
      }
  

      setCardDetailsError((prevErrors) => ({
        ...prevErrors,
        [name]: error,
      }));
  
      if (!error) {

        const numericValue = value.replace(/\D/g, '');

        const formattedValue = numericValue.replace(/(.{4})/g, '$1 ').trim();
      
        setCardDetails((prevCardDetails) => ({
          ...prevCardDetails,
          [name]: formattedValue,
        }));
      } else {
        
        setCardDetails((prevCardDetails) => ({
          ...prevCardDetails,
          [name]: value,
        }));
      }
    } else if (name === 'cvv') {

      if (!/^\d{3}$/.test(value)) {
        error = 'CVV must be 3 digits';
      }
  

      setCardDetailsError((prevErrors) => ({
        ...prevErrors,
        [name]: error,
      }));
  

      setCardDetails((prevCardDetails) => ({
        ...prevCardDetails,
        [name]: value,
      }));
    } else {

      const trimmedValue = typeof value === 'string' ? value.trim() : value;
  

      if (name === 'expiryMonth' || name === 'expiryYear') {
        if (!trimmedValue) {
          error = 'This field is required';
        }
      } else {

        if (!trimmedValue) {
          error = 'This field is required';
        }
      }
  

      setCardDetailsError((prevErrors) => ({
        ...prevErrors,
        [name]: error,
      }));
  

      setCardDetails((prevCardDetails) => ({
        ...prevCardDetails,
        [name]: value,
      }));
    }
  };
const handleNetbankingDetailsChange = (event) => {
  const { name, value } = event.target;
  let error = '';
  

  setNetbankingDetailsError((prevErrors) => ({
    ...prevErrors,
    [name]: error,
  }));
  

  if (!error) {
    setNetbankingDetails((prevNetbankingDetails) => ({
      ...prevNetbankingDetails,
      [name]: value,
    }));
  }
};

  
  const handlePaymentSubmission = () => {
    const isValid = validateForm();
    if (isValid) {
      setPaymentSuccess(true);
      setOpenDialog(true);
    }
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
        error={!!cardDetailsError.cardHolderName}
        helperText={cardDetailsError.cardHolderName}
      />
      <TextField
        label="Card Number"
        variant="outlined"
        fullWidth
        margin="normal"
        name="cardNumber"
        value={cardDetails.cardNumber}
        onChange={handleCardDetailsChange}
        error={!!cardDetailsError.cardNumber}
        helperText={cardDetailsError.cardNumber}
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
  error={!!cardDetailsError.expiryMonth}
>
  <MenuItem value="">Select</MenuItem>
  {[...Array(12).keys()].map(month => (
    <MenuItem key={month} value={month + 1}>{month + 1}</MenuItem>
  ))}
</Select>

{cardDetailsError.expiryMonth && (
  <Typography variant="caption" color="error">
    {cardDetailsError.expiryMonth}
  </Typography>
)}


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
  error={!!cardDetailsError.expiryYear}
>
  <MenuItem value="">Select</MenuItem>
  {[...Array(10).keys()].map(year => (
    <MenuItem key={year} value={new Date().getFullYear() + year}>{new Date().getFullYear() + year}</MenuItem>
  ))}
</Select>



            {cardDetailsError.expiryMonth && (
  <Typography variant="caption" color="error">
    {cardDetailsError.expiryYear}
  </Typography>
)}


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
        error={!!cardDetailsError.cvv}
        helperText={cardDetailsError.cvv}
      />
    </>
  );
  
  const NetbankingFields = (
    <>
      <FormControl variant="outlined" fullWidth margin="normal">
        <InputLabel>Select Bank</InputLabel>
        <Select
          value={netbankingDetails.bankName}
          onChange={handleNetbankingDetailsChange}
          label="Select Bank"
          name="bankName"
          error={!!netbankingDetailsError.bankName}
        >
          <MenuItem value="">Select Bank</MenuItem>
          <MenuItem value="TD">TD</MenuItem>
          <MenuItem value="RBC">RBC</MenuItem>
          <MenuItem value="Scotiabank">Scotiabank</MenuItem>
          <MenuItem value="CIB">CIBC</MenuItem>
          <MenuItem value="Others">Others</MenuItem>
        </Select>
        {netbankingDetailsError.bankName && (
          <Typography variant="caption" color="error">
            {netbankingDetailsError.bankName}
          </Typography>
        )}
      </FormControl>
  
      <TextField
        label="Username"
        variant="outlined"
        fullWidth
        margin="normal"
        name="username" 
        value={netbankingDetails.username}
        onChange={handleNetbankingDetailsChange} 
        error={!!netbankingDetailsError.username}
        helperText={netbankingDetailsError.username}
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
        error={!!netbankingDetailsError.password}
        helperText={netbankingDetailsError.password}
      />
    </>
  );
  

  return (
    <Grid container justifyContent="center">
      <Grid item xs={12} md={6}>
        <Typography variant="h4" align="center" gutterBottom style={{ color: '#1C796E', marginTop: '20px' }}>
          Make The Payment
        </Typography>
        <Paper elevation={3} style={{ padding: '20px', maxWidth: '1000px', margin: 'auto', marginTop: '20px' , marginBottom:'30px'}}>

          <Typography variant="body1" gutterBottom>
            <strong>Registration Type:</strong> {RegistrationType === 'introductory' ? 'Introductory Workshop' : 'Regular Program'}
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
            <strong>Gross Amount:</strong> ${RegistrationType === 'introductory' ? 24.99 : 436.95}
          </Typography>

          <Typography variant="body1" gutterBottom>
            <strong>HST:</strong> ${RegistrationType === 'introductory' ? 24.99 * 0.13 : 436.95 * 0.13}
          </Typography>

          <Typography variant="body1" gutterBottom>
            <strong>Total:</strong> ${RegistrationType === 'introductory' ? (24.99 + (24.99 * 0.13)).toFixed(2) : (436.95 + (436.95 * 0.13)).toFixed(2)}
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