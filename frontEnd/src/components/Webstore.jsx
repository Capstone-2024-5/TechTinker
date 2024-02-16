import React, { useState, useEffect } from 'react';
import { Grid, Button, Box, Typography } from '@mui/material';
import axios from 'axios';

const Webstore = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const pageSize = 8; // Change this value according to your requirement

  useEffect(() => {
    fetchData();
  }, [page]); // Fetch data whenever page changes

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`http://localhost:4000/products?pageSize=${pageSize}&page=${page}`);
      const newData = response.data.slice(0, 8);
      if (newData.length === 0) {
        // No more products to load
        return;
      }
      setProducts(prevProducts => [...prevProducts, ...newData]);
    } catch (error) {
      console.error('Error fetching data: ', error);
    } finally {
      setLoading(false);
    }
  };

  const loadMore = () => {
    setPage(prevPage => prevPage + 1); // Increment the page number
  };

  return (
    <Box p={2} sx={{ backgroundColor: '#f0f0f0' }}>
    <Typography variant="h4" gutterBottom sx={{ textAlign: 'center', color: '#ff4500', fontWeight: 'bold', marginBottom: '40px' }}>
      TECH<span style={{ color: '#4b0082' }}>TINKER</span>
    </Typography>

      <Grid container spacing={3} sx={{ boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)', backgroundColor: '#ffffff', borderRadius: '10px', padding: '20px' }}>
        {products.map((product, index) => (
          <Grid key={index} item xs={12} sm={6} md={4} lg={3}>
            <Box p={2} border={1} borderColor="grey.300" textAlign="center">
              <Box display="flex" justifyContent="center" alignItems="center">
                <img src={product.ImageUrl} alt={`Product ${product.Name}`} style={{ width: '70%', height: 'auto', objectFit: 'cover'}} />
              </Box>
              <Typography variant="h6">{product.Name}</Typography>
              <Typography variant="body1">Price: {product.Price}</Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
      <Box display="flex" justifyContent="center" alignItems="center" marginTop={8} marginBottom={3}>
        <Button variant="contained" color="primary" onClick={loadMore} disabled={loading}>
          {loading ? 'Loading...' : 'Load More'}
        </Button>
      </Box>
    </Box>
  );
};

export default Webstore;

