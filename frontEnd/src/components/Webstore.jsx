import React, { useState, useEffect } from 'react';
import { Grid, Button, Box, Typography, IconButton } from '@mui/material';
import { Close } from '@mui/icons-material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import axios from 'axios';

const Webstore = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [page, setPage] = useState(1); // Start from page 1
  const pageSize = 8; // Number of products to display per page

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`http://localhost:4000/products/?page=${page}&limit=${pageSize}`);
        setProducts(response.data); // Replace existing products with newly fetched products
        setErrorMsg('');
      } catch (error) {
        setErrorMsg('Error fetching data: ', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [page]);

    const loadMore = () => {
        setPage((prevPage) => prevPage + 1); // Increment the page number
    };

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  const handleCloseDetails = () => {
    setSelectedProduct(null);
  };

  const handleAddToCart = (product) => {
    // Add logic to add the product to the cart
    console.log('Product added to cart:', product);
  };

  return (
    <Box p={2} sx={{ backgroundColor: '#f0f0f0' }}>
      {/* Navigation Bar */}
      <Box sx={{ position: 'fixed', top: 0, right: 0, display: 'flex', alignItems: 'center', padding: '10px' }}>
        <IconButton color="primary" aria-label="cart">
          {/* Add your cart icon component here */}
          {/* For example: <ShoppingCartIcon /> */}
          
        </IconButton>
      </Box>

      <Typography variant="h4" gutterBottom sx={{ textAlign: 'center', color: '#ff4500', fontWeight: 'bold', marginBottom: '40px' }}>
        TECH<span style={{ color: '#4b0082' }}>TINKER</span>
      </Typography>

      <Grid container spacing={3} sx={{ boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)', backgroundColor: '#ffffff', borderRadius: '10px', padding: '20px', marginTop: '50px' }}>
        {products.map((product, index) => (
          <Grid key={index} item xs={12} sm={6} md={4} lg={3}>
            <Box p={2} border={1} borderColor="grey.300" textAlign="center" onClick={() => handleProductClick(product)} style={{ cursor: 'pointer', height: '100%' }}>
              <Box className="product-image-container" display="flex" justifyContent="center" alignItems="center" sx={{ height: '60%' }}>
                <img src={product.ImageUrl} alt={`Product ${product.Name}`} style={{ width: '70%', height: 'auto', objectFit: 'cover',}} />
              </Box>
              <Box sx={{ height: '40%' }}>
                <Typography variant="h6">{product.Name}</Typography>
                <Typography variant="body1">Price: {product.Price}</Typography>
                <Button variant="contained" color="primary" onClick={() => handleAddToCart(product)}>Add to Cart</Button>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
      <Box display="flex" justifyContent="center" alignItems="center" marginTop={8} marginBottom={3}>
        <Button variant="contained" color="primary" onClick={loadMore} disabled={loading}>
          {loading ? 'Loading...' : 'Load More'}
        </Button>
      </Box>

      {/* Modal to display product details */}
      {selectedProduct && (
        <Box
          position="fixed"
          textAlign="center"
          top={0}
          right={0}
          bottom={0}
          left={0}
          bgcolor="rgba(0, 0, 0, 0.5)"
          zIndex="9999"
          onClick={handleCloseDetails}
        >
          <Box
            position="absolute"
            top="15%"
            right="20%"
            left="20%"
            bgcolor="white"
            borderRadius="10px"
            boxShadow="0px 0px 10px rgba(0, 0, 0, 0.5)"
            p={2}
            sx={{ backdropFilter: 'blur(8px)', WebkitBackdropFilter: 'blur(8px)', }}
          >
            <IconButton onClick={handleCloseDetails} sx={{ position: 'absolute', top: '5px', right: '5px' }}>
              <Close />
            </IconButton>
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <img
                src={selectedProduct.ImageUrl}
                alt={`Product ${selectedProduct.Name}`}
                style={{ width: '30%', height: 'auto', objectFit: 'cover',}}
              />
            </Box>
            <Typography variant="h5">{selectedProduct.Name}</Typography>
            <Typography variant="body1">Price: {selectedProduct.Price}</Typography>
            <Typography variant="body1">Category: {selectedProduct.CategoryName}</Typography>
            <Typography variant="body1">Description: {selectedProduct.Description}</Typography>
            <Button onClick={() => handleAddToCart(selectedProduct)} variant="contained" color="primary">Add to Cart</Button>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default Webstore;
