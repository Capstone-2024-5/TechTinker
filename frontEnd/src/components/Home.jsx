import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import YouTube from "react-youtube";

export default function Home() {
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
        <div className="bgColorPrimary">
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
            <Grid container sx={{ px: 12, pt: 12 }}>
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
                        className=" fontWeight-500"
                        sx={{ py: 1, mb: 2 }}
                    >
                        Explore, Experience, and Express with Our Modern Robotics Program.
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
