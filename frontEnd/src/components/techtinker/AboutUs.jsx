import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Link as RouterLink, useLocation } from "react-router-dom";
import aboutus_1 from "../../images/aboutus_1.jpg";
import aboutus_2 from "../../images/aboutus_2.jpg";
import aboutus_3 from "../../images/aboutus_3.jpg";
import aboutus_4 from "../../images/aboutus_4.jpg";
import aboutus_5 from "../../images/aboutus_5.jpg";
import aboutus_6 from "../../images/aboutus_6.jpg";
import {
    Box,
    Typography,
    Grid
} from "@mui/material";

 const AboutUs = () => {
  return (
    <div className="container" style={{ backgroundColor: "#f0f0f0" }}>
      <div style={{ textAlign: 'center', marginTop: 10}}>
          <Typography variant="h4" gutterBottom sx={{color: '#ff4500', fontWeight: 'bold', marginBottom: '40px', paddingTop: '25px' }}>
                TECH<span style={{ color: '#4b0082' }}>TINKER</span>
          </Typography>
      </div>
    <div>
      <img 
        src={aboutus_1} 
        alt={"About US"} 
        style = {{
          borderRadius: '50%', // Make the image round
            width: '400px', // Set the width of the image
            height: '400px', // Set the height of the image
            objectFit: 'cover', // Ensure the image covers the entire space
            display: 'block', // Ensure the image is centered
            margin: '0 auto', // Center the image horizontally
            marginBottom: 20
        }}
      />
    </div>
    <Typography
        className="textCenter"
        variant="h5"
        paragraph
        
    >
        "At TechTinker, we're on a mission to ignite the passion for learning 
        in young minds through hands-on robotics education. Our journey began 
        with a simple idea: to provide students with the tools and knowledge they 
        need to thrive in an ever-evolving technological landscape."
    </Typography>
{/* Start */}
    <Grid container paddingTop={0} padding={5} spacing={3}>
      {/* 1st row grid */}
        <Grid item xs={12} sm={12} md={6} sx={{ px: 6, pb: 6 }}>
            <Box className="textCenter"
              sx={{
                backgroundColor: "#ffffff",
                padding: 3,
                borderRadius: 2,
              }}
            >
                <Typography variant="h6" gutterBottom sx={{ pb: 2, fontWeight: 'bold' }}>
                  Our Story
                </Typography>
                <p style={{fontSize: '20px'}}>
                  TechTinker was founded by a group of passionate educators and technology 
                  enthusiasts who saw the need for a creative and engaging approach to STEM 
                  education. Drawing from our diverse backgrounds in engineering, education, 
                  and innovation, we set out to create an environment where students could 
                  explore, experiment, and innovate without limits.
                </p>
            </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={6} sx={{ px: 6, pb: 6 }}>
            <Box>
                <img 
                  src={aboutus_2} 
                  alt={"About Us 2 "} 
                  style = {{
                    borderRadius: '50%', // Make the image round
                      width: '250px', // Set the width of the image
                      height: '250px', // Set the height of the image
                      objectFit: 'cover', // Ensure the image covers the entire space
                      display: 'block', // Ensure the image is centered
                      margin: '0 auto', // Center the image horizontally
                      marginBottom: 20
                  }}
                />
            </Box>
        </Grid>

        {/* 2nd row grid */}
        <Grid item xs={12} sm={12} md={6} sx={{ px: 6, pb: 6 }}>
            <Box className="textCenter">
                <img 
                  src={aboutus_6} 
                  alt={"About Us 6 "} 
                  style = {{
                    borderRadius: '50%', // Make the image round
                      width: '250px', // Set the width of the image
                      height: '250px', // Set the height of the image
                      objectFit: 'cover', // Ensure the image covers the entire space
                      display: 'block', // Ensure the image is centered
                      margin: '0 auto', // Center the image horizontally
                      marginBottom: 20
                  }}
                />
            </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={6} sx={{ px: 6, pb: 6 }}>
              <Box className="textCenter"
                    sx={{
                      backgroundColor: "#ffffff",
                      padding: 3,
                      borderRadius: 2,
                    }}
                  >
                <Typography variant="h6" gutterBottom sx={{ pb: 2, fontWeight: 'bold' }}>
                  The Spark
                </Typography>
                <p style={{fontSize: '20px'}}>
                  The idea for TechTinker was born out of a desire to bridge the gap between 
                  traditional classroom learning and real-world application. We realized that 
                  while students were learning valuable concepts in school, they often lacked 
                  the opportunity to apply these concepts in a hands-on, practical setting. 
                  This gap inspired us to create a program that not only teaches STEM principles 
                  but also empowers students to apply these principles to solve real-world 
                  problems.
                </p>
            </Box>
        </Grid>

        {/* 3rd row grid */}
        <Grid item xs={12} sm={12} md={6} sx={{ px: 6, pb: 6 }}>
            <Box className="textCenter"
                  sx={{
                    backgroundColor: "#ffffff",
                    padding: 3,
                    borderRadius: 2,
                  }}
                >
                <Typography variant="h6" gutterBottom sx={{ pb: 2, fontWeight: 'bold' }}>
                  Our Journey
                </Typography>
                <p style={{fontSize: '20px'}}>
                  From our humble beginnings in a small classroom, we've grown into a thriving 
                  community of young innovators and future leaders. Over the years, we've had 
                  the privilege of witnessing countless "aha" moments as students tackle 
                  challenges, overcome obstacles, and bring their ideas to life. Whether it's 
                  building a robot that can navigate a maze or designing a prototype for a 
                  sustainable energy solution, each project is a testament to the creativity 
                  and ingenuity of our students.
                </p>
            </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={6} sx={{ px: 6, pb: 6 }}>
            <Box className="textCenter">
                <img 
                  src={aboutus_3} 
                  alt={"About Us 3 "} 
                  style = {{
                    borderRadius: '50%', // Make the image round
                      width: '250px', // Set the width of the image
                      height: '250px', // Set the height of the image
                      objectFit: 'cover', // Ensure the image covers the entire space
                      display: 'block', // Ensure the image is centered
                      margin: '0 auto', // Center the image horizontally
                      marginBottom: 20
                  }}
                />
            </Box>
        </Grid>
        

          {/* 4th row grid */}
          <Grid item xs={12} sm={12} md={6} sx={{ px: 6, pb: 6 }}>
            <Box className="textCenter">
                <img 
                  src={aboutus_4} 
                  alt={"About Us 4 "} 
                  style = {{
                    borderRadius: '50%', // Make the image round
                      width: '250px', // Set the width of the image
                      height: '250px', // Set the height of the image
                      objectFit: 'cover', // Ensure the image covers the entire space
                      display: 'block', // Ensure the image is centered
                      margin: '0 auto', // Center the image horizontally
                      marginBottom: 20
                  }}
                />
            </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={6} sx={{ px: 6, pb: 6 }}>
            <Box className="textCenter"
                  sx={{
                    backgroundColor: "#ffffff",
                    padding: 3,
                    borderRadius: 2,
                  }}
                >
                <Typography variant="h6" gutterBottom sx={{ pb: 2, fontWeight: 'bold' }}>
                  Our Mission
                </Typography>
                <p style={{fontSize: '20px'}}>
                  At TechTinker, our mission is simple: to inspire the next generation of 
                  engineers, innovators, and problem solvers. We believe that by providing 
                  students with the skills and confidence they need to succeed in STEM fields, 
                  we're not just shaping future engineers – we're shaping the future of 
                  innovation itself.
                </p>
            </Box>
        </Grid>

        {/* 5th row grid */}
        <Grid item xs={12} sm={12} md={6} sx={{ px: 6, pb: 6 }}>
            <Box className="textCenter"
                  sx={{
                    backgroundColor: "#ffffff",
                    padding: 3,
                    borderRadius: 2,
                  }}
                >
                <Typography variant="h6" gutterBottom sx={{ pb: 2, fontWeight: 'bold' }}>
                  Join Us
                </Typography>
                <p style={{fontSize: '20px'}}>
                  We invite you to join us on this journey of exploration and discovery. 
                  Whether you're a student looking to explore the exciting world of robotics 
                  or an educator seeking new ways to engage your students, there's a place for 
                  you at TechTinker. Together, let's ignite the spark of curiosity, creativity, 
                  and innovation in young minds everywhere.
                </p>
            </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={6} sx={{ px: 6, pb: 6 }}>
            <Box className="textCenter">
                <img 
                  src={aboutus_5} 
                  alt={"About Us 5 "} 
                  style = {{
                    borderRadius: '50%', // Make the image round
                      width: '250px', // Set the width of the image
                      height: '250px', // Set the height of the image
                      objectFit: 'cover', // Ensure the image covers the entire space
                      display: 'block', // Ensure the image is centered
                      margin: '0 auto', // Center the image horizontally
                      marginBottom: 20
                  }}
                />
            </Box>
        </Grid>
        

    </Grid>
{/* End */}

    {/* Content from Home page */}
    <Typography
      variant="h3"
      className="textCenter fontWeight-800 fontMontserrat"
      sx={{ py: 1, mt: 8, mb: 2 }}
    >
        Why choose us for STEM Education?
    </Typography>
    <Box className="bgColorPrimary" sx={{ flexGrow: 1 }}>
        <Grid container paddingTop={0} padding={5}>
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

export default AboutUs;