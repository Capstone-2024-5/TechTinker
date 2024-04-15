import React, { useRef, useState } from "react";
import axios from "axios";
import { TextField, Button, Typography, Container, Grid } from "@mui/material";
import { Link } from "react-router-dom";

const AdminDashboardForm = () => {
  const [product, setProduct] = useState({
    Name: "",
    Price: "",
    CategoryName: "",
    Description: "",
    ImageUrl: ""
  });

  const [formErrors, setFormErrors] = useState({}); // State for form errors
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const isValid = validateForm(); // Validate form before submission
    if (!isValid) return;

    try {
      // Send product data to backend API
      const response = await axios.post(
        "http://localhost:4000/addproduct",
        product
      );

      // Handle success or display error message
      // console.log(response.data);

      setSuccessMessage("Product added successfully!");
      // Clear the form
      setProduct({
        Name: "",
        Price: "",
        CategoryName: "",
        Description: "",
        ImageUrl: ""
      });

      // Remove success message after 3 seconds
      setTimeout(() => {
        setSuccessMessage("");
      }, 5000);

    } catch (error) {
      console.error("Error:", error);
    }
  };

  // Function to validate form fields
  const validateForm = () => {
    let errors = {};
    let formIsValid = true;

    // Add validation rules for each field
    if (!product.Name) {
      formIsValid = false;
      errors.Name = "Product Name is required";
    }

    if (!product.Price) {
      formIsValid = false;
      errors.Price = "Price is required";
    }

    if(!product.CategoryName){
      formIsValid = false;
      errors.CategoryName = "Category Name is required";
    }

    if(!product.Description){
      formIsValid = false;
      errors.Description = "Description is required";
    }

    if(!product.ImageUrl){
      formIsValid = false;
      errors.ImageUrl = "Image URL is required";
    }

    setFormErrors(errors); // Update state with errors
    return formIsValid;
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" gutterBottom sx={{ color: '#ff4500', fontWeight: 'bold', marginBottom: '40px', paddingTop: '25px', textAlign: 'center' }}>
        ADD<span style={{ color: '#4b0082' }}> PRODUCT</span>
      </Typography>

      {successMessage && (
            <Grid item xs={12} textAlign="center">
              <Typography variant="body1" style={{ color: 'Red', marginBottom: '10px' }}>{successMessage}</Typography>
            </Grid>
          )}
          
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Product Name"
              name="Name"
              value={product.Name}
              onChange={handleChange}
              error={!!formErrors.Name} // Set error state based on validation
              helperText={formErrors.Name} // Display error message if any
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Price"
              name="Price"
              type="number"
              value={product.Price}
              onChange={handleChange}
              error={!!formErrors.Price}
              helperText={formErrors.Price}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Category Name"
              name="CategoryName"
              value={product.CategoryName}
              onChange={handleChange}
              error={!!formErrors.CategoryName}
              helperText={formErrors.CategoryName}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Description"
              name="Description"
              multiline
              rows={4}
              value={product.Description}
              onChange={handleChange}
              error={!!formErrors.Description}
              helperText={formErrors.Description}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Image URL"
              name="ImageUrl"
              value={product.ImageUrl}
              onChange={handleChange}
              error={!!formErrors.ImageUrl}
              helperText={formErrors.ImageUrl}
            />
          </Grid>
          <Grid item xs={12} textAlign="center" marginBottom={"20px"} >
            <Button type="submit" variant="contained" color="primary" style={{ marginRight: '20px' }}>
              Add Product
            </Button>
            <Link to={"/admin_dashboard"}>
              <Button type="submit" variant="contained" color="primary">
                Dashboard
              </Button>
            </Link>
          </Grid>
          
        </Grid>
      </form>
    </Container>
  );
};

export default AdminDashboardForm;
