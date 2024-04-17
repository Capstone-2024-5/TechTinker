import React, { useState } from "react";
import GoogleMapReact from "google-map-react";
import {
    Grid,
    TextField,
    Button,
    Typography,
    Modal,
    Link,
} from "@mui/material";
import axios from "axios";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

const AnyReactComponent = ({ text, onClick }) => (
    <div
        style={{
            color: "white",
            background: "#1C5679",
            padding: "10px",
            display: "inline-flex",
            textAlign: "center",
            alignItems: "center",
            fontWeight: "700",
            justifyContent: "center",
            borderRadius: "100%",
            transform: "translate(-50%, -50%)",
        }}
        onClick={onClick}
    >
        {text}
    </div>
);

const Contact = () => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    const [modalOpen, setModalOpen] = useState(false);
    const [formSubmitted, setFormSubmitted] = useState(false);

    const openModal = () => {
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    const defaultProps = {
        center: {
            lat: 43.3930395,
            lng: -80.3400021,
        },
        zoom: 11,
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = {};
        formData.forEach((value, key) => {
            data[key] = value;
        });
        try {
            const response = await axios.post(
                "https://techtinker-1.onrender.com/contact",
                data
            );
            setFormSubmitted(true);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <Grid container spacing={2} sx={{ p: 12 }}>
            {!formSubmitted && (
                <Grid
                    item
                    xs={12}
                    sm={6}
                    sx={{ px: 4 }}
                    component="form"
                    onSubmit={handleSubmit}
                >
                    <Typography
                        variant="h3"
                        className="fontWeight-800 fontMontserrat textSecondary"
                        sx={{ mb: 6 }}
                    >
                        Drop Us a Line
                    </Typography>
                    <TextField
                        label="Full Name"
                        fullWidth
                        autoComplete="none"
                        sx={{ mb: 3 }}
                        name="fullName"
                        required
                    />
                    <TextField
                        label="Email"
                        fullWidth
                        autoComplete="none"
                        sx={{ mb: 3 }}
                        name="email"
                        required
                        inputProps={{
                            pattern: emailRegex.source,
                        }}
                    />
                    <TextField
                        label="Subject"
                        fullWidth
                        autoComplete="none"
                        sx={{ mb: 3 }}
                        name="subject"
                        required
                    />
                    <TextField
                        label="Message"
                        fullWidth
                        multiline
                        rows={5}
                        autoComplete="none"
                        sx={{ mb: 3 }}
                        name="message"
                        required
                    />
                    <Button type="submit" className="btnPrimary fontWeight-800">
                        Submit
                    </Button>
                </Grid>
            )}

            {formSubmitted && (
                <Grid item xs={12} sm={6} sx={{ px: 4, my: 20 }}>
                    <CheckCircleOutlineIcon
                        style={{ height: "100px", width: "100px" }}
                        className="textSecondary"
                        sx={{ mb: 2 }}
                    />
                    <Typography
                        variant="h3"
                        className="fontWeight-800 fontMontserrat textSecondary"
                        sx={{ mb: 6 }}
                    >
                        Message Sent
                    </Typography>
                </Grid>
            )}

            <Grid item xs={12} sm={6}>
                <div className="googleMap">
                    <GoogleMapReact
                        bootstrapURLKeys={{
                            key: "AIzaSyANwwY6n03jWz5lIWus7REMiXUBEkEO_hc",
                        }}
                        defaultCenter={defaultProps.center}
                        defaultZoom={defaultProps.zoom}
                    >
                        <AnyReactComponent
                            lat={43.3930395}
                            lng={-80.3400021}
                            text="Tech Tinker"
                            onClick={openModal}
                        />
                    </GoogleMapReact>
                </div>
            </Grid>
            <Modal
                open={modalOpen}
                onClose={closeModal}
                style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <div style={{ backgroundColor: "white", padding: "2rem 4rem" }}>
                    <Typography
                        variant="h6"
                        className="fontWeight-600"
                        sx={{ pb: 2 }}
                    >
                        Tech Tinker
                    </Typography>
                    <Typography variant="body1" sx={{ pb: 1 }}>
                        Phone: +1 123 123 1234
                    </Typography>
                    <Typography variant="body1" sx={{ pb: 1 }}>
                        Email: abc@gmail.com
                    </Typography>
                    <Typography variant="address">
                        23, ABC street, Kitchener, ON N6F 6S8
                    </Typography>
                    <br />
                    <Link
                        sx={{ pt: 2 }}
                        href="https://maps.app.goo.gl/zErCLMmwBFJyHs6a6"
                        target="_blank"
                        rel="noopener"
                        className="btnLink"
                    >
                        Get Direction
                    </Link>
                    <br />
                    <Button
                        sx={{ mt: 2 }}
                        onClick={closeModal}
                        className="btnPrimary"
                    >
                        Close
                    </Button>
                </div>
            </Modal>
        </Grid>
    );
};

export default Contact;
