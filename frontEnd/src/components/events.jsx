import React, { useState, useEffect } from 'react';
import { Box, Grid, Typography, Button, Card, CardContent, CardMedia } from "@mui/material";
import axios from 'axios';

const Events = () => {
    const [events, setEvents] = useState([]);
    const [selectedEvent, setSelectedEvent] = useState(null);
    const [showRegistrationForm, setShowRegistrationForm] = useState(false);
    const [loading, setLoading] = useState(true); // Added loading state

    useEffect(() => {
        // Fetch event data from the backend API
        fetchEventData();
    }, []);

    const fetchEventData = async () => {
        try {
          setLoading(true);
          const response = await axios.get("https://techtinker-1.onrender.com/events");
          const data = response.data; // Get the response data directly
          setEvents(data);
        } catch (error) {
          console.error('Error fetching data: ', error);
        } finally {
          setLoading(false);
        }
      };
      
  

    const handleEventSelection = (event) => {
        setSelectedEvent(event);
        setShowRegistrationForm(true);
    };

    const handleRegistrationSubmit = (event) => {
        event.preventDefault();
        setShowRegistrationForm(false);
    };

    return (
        <>
        <Typography
                variant="h3"
                align="center"
                className="fontWeight-800 fontMontserrat textSecondary"
                sx={{ m: 6 }}
            >
                Events
            </Typography>
        <Box m={4} sx={{ mx: 20 }}>
            {loading ? (
                <Typography variant="h5" align="center">Loading...</Typography>
            ) : (
                <Grid container spacing={3}>
                    {events.map((event, index) => (
                        <Grid item xs={12} md={6} key={index} sx={{ p: 4 }}>
                            <Card sx={{ p: 4 }}>
                                <Typography variant="h5" align="center" className='fontMontserrat textPrimary fontWeight-800' sx={{ pb: 4 }}>{event.EventName}</Typography>
                                <CardMedia
                                    component="img"
                                    height="350"
                                    image={event.ImageUrl}
                                    alt={event.EventName}
                                />
                                <CardContent sx={{textAlign: 'center'}} >
                                <Typography variant="h5" align="center" className='fontMontserrat textPrimary fontWeight-800' sx={{ py: 4 }}>{event.EventName}</Typography>
                                    <Button onClick={() => handleEventSelection(event)} className="btnPrimary">Select Event</Button>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            )}
            {selectedEvent && (
                <Box mt={4} padding={5}>
                    <Typography variant="h4" align="center">Register for {selectedEvent.name}</Typography>
                </Box>
            )}
        </Box>
        </>
    );
}

export default Events;
