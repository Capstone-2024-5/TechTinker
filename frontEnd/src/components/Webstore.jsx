import React, { useState } from 'react';
import { Grid, Button, Drawer, List, ListItemButton, ListItemText, IconButton, Menu    } from '@mui/material';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';


const Webstore = () => {
  
  const [products, setProducts] = useState([
    { id: 1, name: 'Product 1', price: '$10', image: 'https://via.placeholder.com/150' },
    { id: 2, name: 'Product 2', price: '$20', image: 'https://via.placeholder.com/150' },
    { id: 3, name: 'Product 3', price: '$30', image: 'https://via.placeholder.com/150' },
    { id: 4, name: 'Product 4', price: '$30', image: 'https://via.placeholder.com/150' },
    { id: 5, name: 'Product 5', price: '$30', image: 'https://via.placeholder.com/150' },
    { id: 6, name: 'Product 6', price: '$30', image: 'https://via.placeholder.com/150' },
    { id: 7, name: 'Product 7', price: '$30', image: 'https://via.placeholder.com/150' },
    { id: 8, name: 'Product 8', price: '$30', image: 'https://via.placeholder.com/150' },
  ]);
  

  const loadMore = () => {
    setProducts([
      ...products,
      { id: 9, name: 'Product 9', price: '$30', image: 'https://via.placeholder.com/150' },
      { id: 10, name: 'Product 10', price: '$30', image: 'https://via.placeholder.com/150' },
      { id: 11, name: 'Product 11', price: '$30', image: 'https://via.placeholder.com/150' },
      { id: 12, name: 'Product 12', price: '$30', image: 'https://via.placeholder.com/150' },
    ]);
  };

  return (
    <Box p={2}>
      
      <Typography variant="h4" gutterBottom>Product Page</Typography>
      <Grid container spacing={3}>
        {products.map((product) => (
          <Grid key={product.id} item xs={12} sm={6} md={4} lg={3}>
            <Box p={2} border={1} borderColor="grey.300" textAlign="center">
              <Box display="flex" justifyContent="center" alignItems="center">
                <img src={product.image} alt={`Product ${product.name}`} style={{ width: '70%', height: 'auto' }} />
              </Box>
              <Typography variant="h6">{product.name}</Typography>
              <Typography variant="body1">Price: {product.price}</Typography>
            </Box>
          </Grid>
        ))}
      </Grid>

      <Box display="flex" justifyContent="center" alignItems="center" marginTop={3} marginBottom={3}>
        <Button variant="contained" color="primary" onClick={loadMore}>
          Load More
        </Button>
      </Box>
      
    </Box>
  );
};

export default Webstore;
