import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import CloseIcon from '@mui/icons-material/Close';
import axios from "axios";
import {
    Typography,
    Button,
    TextField,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
} from "@mui/material";
import YouTube from "react-youtube";

export default function Home() {
    const [open, setOpen] = useState(false);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [nameTouched, setNameTouched] = useState(false);
    const [emailTouched, setEmailTouched] = useState(false);
    const formRef = useRef(null);

    const isValidEmail = (email) => {
        return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
    };    

    const handleNameBlur = () => {
        setNameTouched(true);
    };

    const handleEmailBlur = () => {
        setEmailTouched(true);
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            setOpen(true);
        }, 10000);

        return () => clearTimeout(timer);
    }, []);

    const handleClose = () => {
        setOpen(false);
    };

    const handleSubmit = async (e) => {
        console.log("Name:", name);
        console.log("Email:", email);
        e.preventDefault();
        const formData = new FormData(formRef.current);
        const data = {};
        formData.forEach((value, key) => {
            data[key] = value;
        });
        try {
            const response = await axios.post(
                "https://techtinker-1.onrender.com/subscribe",
                data
            );
            setOpen(false);
        } catch (error) {
            console.error(error);
        }
    };

    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '"></span>';
        },
    };

    const opts = {
        height: "360",
        width: "640",
        playerVars: {
            autoplay: 1,
        },
    };

    return (
        <div>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle mt={2} className="fontWeight-700 fontMontserrat textPrimary">
                    Join Our Community
                    <Button onClick={handleClose} sx={{ position: 'absolute', right: 16, top: 24 }} className="textPrimary"><CloseIcon /></Button>
                </DialogTitle>
                <DialogContent>
                    <DialogContentText mb={2}>
                        Enter your name and email to stay updated with our
                        latest programs, events and promotions.
                    </DialogContentText>
                    <form ref={formRef} onSubmit={handleSubmit}>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        name="name"
                        label="Name"
                        type="text"
                        fullWidth
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        onBlur={handleNameBlur}
                        error={nameTouched && name === ''}
                        helperText={(nameTouched && name === '') ? 'Name is required' : ''}
                    />
                    <TextField
                        margin="dense"
                        id="email"
                        name="email"
                        label="Email Address"
                        type="email"
                        fullWidth
                        value={email}
                        inputProps={{ pattern: "[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" }}
                        onChange={(e) => setEmail(e.target.value)}
                        onBlur={handleEmailBlur}
                        error={emailTouched && !isValidEmail(email)}
                        helperText={(emailTouched && !isValidEmail(email)) ? 'Invalid email format' : ''}
                    />
                                        </form>

                </DialogContent>
                <DialogActions sx={{ p: 3 }}>
                    <Button onClick={handleClose} className="btnLink">Later</Button>
                    <Button type="submit" onClick={handleSubmit} className="btnPrimary" disabled={!name || !email || !isValidEmail(email)}>Subscribe</Button>
                </DialogActions>
            </Dialog>
            <Swiper
                pagination={pagination}
                modules={[Pagination, Autoplay, Navigation]}
                className="mySwiper"
                navigation={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
            >
                <SwiperSlide>
                    <Grid container sx={{ px: 12 }}>
                        <Grid item xs={12} md={8} sx={{ px: 6 }}>
                            <Typography
                                sx={{ pt: 10 }}
                                variant="h2"
                                className="fontMontserrat fontWeight-1000 textSecondary"
                            >
                                Ignite your STEM Passion with Fun Learning!
                            </Typography>
                            <Typography
                                className="textBlack"
                                variant="h5"
                                sx={{ pt: 6, pb: 12 }}
                            >
                                Join our dynamic STEM classes, weekdays or
                                weekends, for hands-on coding and robotics fun.
                                Unleash curiosity, embrace innovation – enroll
                                now!
                            </Typography>
                        </Grid>
                        <Grid item xs={0} md={4}></Grid>
                    </Grid>
                </SwiperSlide>
                <SwiperSlide>
                    <Grid container sx={{ px: 12 }}>
                        <Grid item xs={12} md={8} sx={{ px: 6 }}>
                            <Typography
                                sx={{ pt: 10 }}
                                variant="h2"
                                className="fontMontserrat fontWeight-1000 textSecondary"
                            >
                                Ignite your STEM Passion with Fun Learning!
                            </Typography>
                            <Typography
                                className="textBlack"
                                variant="h5"
                                sx={{ pt: 6, pb: 12 }}
                            >
                                Join our dynamic STEM classes, weekdays or
                                weekends, for hands-on coding and robotics fun.
                                Unleash curiosity, embrace innovation – enroll
                                now!
                            </Typography>
                        </Grid>
                        <Grid item xs={0} md={4}></Grid>
                    </Grid>
                </SwiperSlide>
            </Swiper>
            <Grid container sx={{ px: 12, py: 6 }} className="bgColorPrimary">
                <Grid item xs={12} md={6}>
                    <Typography
                        variant="h3"
                        className="fontWeight-800 fontMontserrat"
                        sx={{ py: 1, mt: 8, mb: 2 }}
                    >
                        Get Inspired !
                    </Typography>
                    <Typography
                        variant="h5"
                        className="fontWeight-500"
                        sx={{ py: 1, mb: 2 }}
                    >
                        Explore, Experience, and Express with Our Modern
                        Robotics Program.
                    </Typography>
                    <p></p>
                </Grid>
                <Grid item xs={12} md={6} className="textCenter">
                    <YouTube videoId="KT9IZLOF3hA" opts={opts} />
                </Grid>
            </Grid>
            <Typography
                variant="h3"
                className="textCenter fontWeight-800 fontMontserrat"
                sx={{ py: 1, mt: 8, mb: 2 }}
            >
                Why choose us for STEM Education?
            </Typography>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container padding={5}>
                    <Grid item xs={12} sm={12} md={6} sx={{ px: 6, pb: 6 }}>
                        <Box className="textCenter">
                            <Typography variant="h5" sx={{ pb: 2 }}>
                                Fostering Mechanical Minds
                            </Typography>
                            <p>
                                At our robotics program, we ignite the spark for
                                mechanical thinking. Whether you're drawn to the
                                intricacies of machinery or fascinated by
                                building, our curriculum caters to diverse
                                interests within the STEM spectrum.
                            </p>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} sx={{ px: 6, pb: 6 }}>
                        <Box className="textCenter">
                            <Typography variant="h5" sx={{ pb: 2 }}>
                                Collaborative Learning Environment
                            </Typography>
                            <p>
                                Step into a collaborative arena where teamwork
                                is not just encouraged but essential. Our small
                                class sizes ensure an intimate setting, with a
                                maximum of 8 students per instructor,
                                facilitating effective collaboration and
                                personalized attention.
                            </p>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} sx={{ px: 6, pb: 6 }}>
                        <Box className="textCenter">
                            <Typography variant="h5" sx={{ pb: 2 }}>
                                Experiential Exploration
                            </Typography>
                            <p>
                                Experience STEM education through hands-on
                                projects and experiments. Our curriculum is
                                designed to engage young minds in real-world
                                problem-solving, fostering a deep understanding
                                of concepts through practical application.
                            </p>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} sx={{ px: 6, pb: 6 }}>
                        <Box className="textCenter" sx={{ pb: 2 }}>
                            <Typography variant="h5">
                                Passion-Driven Instructors
                            </Typography>
                            <p>
                                Learn from a dedicated team of instructors who
                                are not just educators but passionate
                                enthusiasts of robotics and engineering. Our
                                staff is committed to instilling a love for
                                learning, making the educational journey both
                                exciting and impactful.
                            </p>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </div>
    );
}
