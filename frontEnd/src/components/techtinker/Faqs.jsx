import React, { useState, useEffect } from "react";
import { Grid, Typography } from "@mui/material";
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import axios from "axios";

const Faqs = () => {
    const [expanded, setExpanded] = useState('panel1');
    const [faqs, setFaqs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios
            .get("https://techtinker-1.onrender.com/faqs")
            .then((response) => {
                if (response.data.success) {
                    setFaqs(response.data.data);
                } else {
                    console.error("Failed to fetch FAQs:", response.data.error);
                }
                setLoading(false);
            })
            .catch((err) => {
                setError("Error fetching FAQs");
                setLoading(false);
                console.error(err);
            });
    }, []);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    let faqsList;

    if (loading) {
        faqsList = <Typography>Loading FAQs...</Typography>;
    } else if (error) {
        faqsList = <Typography>{error}</Typography>;
    } else {
        faqsList = faqs.map((faq, index) => (
            <MuiAccordion
                key={index}
                expanded={expanded === index}
                onChange={handleChange(index)}
            >
                <MuiAccordionSummary
                    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
                    aria-controls={`panel${index}d-content`}
                    id={`panel${index}d-header`}
                >
                    <Typography>{faq.question}</Typography>
                </MuiAccordionSummary>
                <MuiAccordionDetails>
                    <Typography>{faq.answer}</Typography>
                </MuiAccordionDetails>
            </MuiAccordion>
        ));
    }

    return (
        <Grid container spacing={2} sx={{ px: 12, py: 9 }}>
            <Typography
                variant="h3"
                className="fontWeight-800 fontMontserrat textSecondary"
                sx={{ mb: 6 }}
            >
                Frequently Asked Questions
            </Typography>
            {faqsList}
        </Grid>
    );
};

export default Faqs;
