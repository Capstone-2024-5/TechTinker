// import React, {useRef, useState, useEffect } from "react";
// import axios from "axios";
// import { useLocation, useNavigate } from "react-router-dom";
// import { TextField, Button, Typography, Container, Grid } from "@mui/material";

// const AdminDashboardForm = () => {
//   const [imageFile, setImageFile] = useState(null);
//   const [productName, setProductName] = useState("");
//   const [description, setDescription] = useState("");
 
//   const [price, setPrice] = useState(0);
//   const location = useLocation();
//   const history = useNavigate();
//   const formRef = useRef(null);


//   const handleImageChange = (e) => {
//     setImageFile(e.target.files[0]);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const formData = new FormData(formRef.current);
//     const data = {};
//       formData.forEach((value, key) => {
//           data[key] = value;
//       });
//     try {
           
//       // Send product data to backend API
//       const response = await axios.post(
//         "http://localhost:4000/products", 
//         data
//       );

//       // Handle success or display error message
//       console.log(response.data);
//       if (response.data.success) {
//         // Handle success, maybe navigate to a new page or show a success message
//         console.log("Product added successfully with ID:", response.data.data._id);
//       } else {
//         // Handle failure, maybe show an error message
//         console.error("Failed to add product");
//       }
//     } catch (error) {
//       console.error("Error:", error);
//     }
//   };

//   const handleSignOut = () => {
//     // Implement sign-out functionality, e.g., clear session, redirect to login page
//     history("/admin_login");
//   };

//   return (
//     <Container maxWidth="sm">
//       <Typography variant="h5">Welcome {location.state.id}</Typography>
//       <form ref={formRef} onSubmit={handleSubmit}>
//         <Grid container spacing={2}>
//           <Grid item xs={12}>
//             <input
//               type="file"
//               accept="image/*"
//               onChange={handleImageChange}
//             />
//           </Grid>
//           <Grid item xs={12}>
//             <TextField
//               fullWidth
//               label="Product Name"
//               value={productName}
//               onChange={(e) => setProductName(e.target.value)}
//             />
//           </Grid>
//           <Grid item xs={12}>
//             <TextField
//               fullWidth
//               label="Description"
//               multiline
//               rows={4}
//               value={description}
//               onChange={(e) => setDescription(e.target.value)}
//             />
//           </Grid>
      
//           <Grid item xs={6}>
//             <TextField
//               fullWidth
//               label="Price"
//               type="number"
//               value={price}
//               onChange={(e) => setPrice(parseFloat(e.target.value))}
//             />
//           </Grid>
//           <Grid item xs={12}>
//             <Button type="submit" variant="contained" color="primary">
//               Add Product
//             </Button>
//           </Grid>
//         </Grid>
//       </form>
//       <Button onClick={handleSignOut} variant="outlined" color="primary">Sign Out</Button>
//     </Container>
//   );
// };

// export default AdminDashboardForm;


import React, { useRef, useState } from "react";
import axios from "axios";
import { TextField, Button, Typography, Container, Grid } from "@mui/material";

const AdminDashboardForm = () => {
  const [product, setProduct] = useState({
    Name: "",
    Price: "",
    CategoryName: "",
    Description: "",
    ImageUrl: ""
  });

  const formRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value
    }));
  };

  const handleImageChange = (e) => {
    // Handle image upload here if needed
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send product data to backend API
      const response = await axios.post(
        "http://localhost:4000/addproduct",
        product
      );

      // Handle success or display error message
      console.log(response.data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h5">Add Product</Typography>
      <form ref={formRef} onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Product Name"
              name="Name"
              value={product.Name}
              onChange={handleChange}
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
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Category Name"
              name="CategoryName"
              value={product.CategoryName}
              onChange={handleChange}
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
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Image URL"
              name="ImageUrl"
              value={product.ImageUrl}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="primary">
              Add Product
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default AdminDashboardForm;
