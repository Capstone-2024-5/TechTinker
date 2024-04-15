import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import { Facebook, Instagram, Twitter } from "@mui/icons-material";
import { Box } from "@mui/material";

export default function Footer() {
    return (
        <Box component="footer" className="bgColorPrimary">
            <Container maxWidth="lg" sx={{ pt: 4 }}>
                <Grid container spacing={5}>
                    <Grid item xs={12} sm={6}>
                        <Typography
                            variant="h6"
                            className="fontWeight-700"
                            gutterBottom
                        >
                            About Us
                        </Typography>
                        <Typography variant="body2">
                            Igniting young minds with hands-on robotics
                            education, fostering creativity and STEM skills for
                            a future of innovation and collaboration. Join us in
                            shaping tomorrow's engineers and leaders in science
                            and technology.
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Typography
                            variant="h6"
                            className="fontWeight-700"
                            gutterBottom
                        >
                            Contact Us
                        </Typography>
                        <Typography variant="body2">
                            23, ABC street, Kitchener, ON N6F 6S
                        </Typography>
                        <Typography variant="body2">
                            Email: abc@gmail.com
                        </Typography>
                        <Typography variant="body2">
                            Phone: +1 123 123 1234
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={2}>
                        <Typography
                            variant="h6"
                            className="fontWeight-700"
                            gutterBottom
                        >
                            Follow Us
                        </Typography>
                        <Link href="https://www.facebook.com/" color="inherit">
                            <Facebook />
                        </Link>
                        <Link
                            href="https://www.instagram.com/"
                            color="inherit"
                            sx={{ pl: 1, pr: 1 }}
                        >
                            <Instagram />
                        </Link>
                        <Link href="https://www.twitter.com/" color="inherit">
                            <Twitter />
                        </Link>
                    </Grid>
                </Grid>
            </Container>
            <Box mt={5} p={2} className="copyright">
                    <Typography
                        variant="body2"
                        className="fontWeight-700"
                        align="center"
                    >
                        {"Copyright © "}
                        <Link color="inherit" href="https://your-website.com/">
                        
                            <span style={{color: '#ff4500'}}>TECH</span><span style={{ color: '#4b0082' }}>TINKER</span>
                        
                        </Link>{" "}
                        {new Date().getFullYear()}
                        {"."}
                    </Typography>
                </Box>
        </Box>
    );
}
