import React, { useState } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import { TextField, Button, Typography, Container, Grid } from "@mui/material";

const AdminDashboardForm = () => {
  const [imageFile, setImageFile] = useState(null);
  const [productName, setProductName] = useState("");
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [price, setPrice] = useState(0);
  const location = useLocation();
  const history = useNavigate();

  const handleImageChange = (e) => {
    setImageFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("image", imageFile);
      formData.append("productName", productName);
      formData.append("description", description);
      formData.append("quantity", quantity);
      formData.append("price", price);

      // Send product data to backend API
      const response = await axios.post("http://localhost:4000/products", formData);

      // Handle success or display error message
      console.log(response.data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleSignOut = () => {
    // Implement sign-out functionality, e.g., clear session, redirect to login page
    history("/admin_login");
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h5">Welcome {location.state.id}</Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Product Name"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Description"
              multiline
              rows={4}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              label="Quantity"
              type="number"
              value={quantity}
              onChange={(e) => setQuantity(parseInt(e.target.value))}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              label="Price"
              type="number"
              value={price}
              onChange={(e) => setPrice(parseFloat(e.target.value))}
            />
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="primary">
              Add Product
            </Button>
          </Grid>
        </Grid>
      </form>
      <Button onClick={handleSignOut} variant="outlined" color="primary">Sign Out</Button>
    </Container>
  );
};

export default AdminDashboardForm;
