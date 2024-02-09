import React, { useState } from "react";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { Drawer, List, ListItemButton, ListItemText } from '@mui/material';
import AdbIcon from "@mui/icons-material/Adb";
import { Link as RouterLink } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const pages = [
    { name: "Home", link: "" },
    { name: "Courses", link: "course" },
    { name: "Register", link: "register" },
    { name: "Event", link: "events" },
    { name: "Contact Us", link: "contact-us" },
    {name: "Webstore", link: "webstore"},
];

const webpages = [
    {name: "Home", link: ""},
    { name: "Science", link: "science" },
    { name: "Technology", link: "technology" },
    { name: "Engineering", link: "engineering" },
    { name: "Mathematics", link: "mathematics" },
    { name: "Robotics", link: "robotics" },
    { name: "Contact Us", link: "contact-us"},
];



export default function Header() {
    const [anchorElNav, setAnchorElNav] = useState(null);
    const [drawerOpen, setDrawerOpen] = useState(false);

    const location = useLocation();

    const isHomePage = location.pathname === '/';
    const isCoursePage = location.pathname === '/course';
    const isRegisterPage = location.pathname === '/register';
    const isEventPage = location.pathname === '/events';
    const isContactUsPage = location.pathname === '/contact-us';
    const isWebstorePage = location.pathname === '/webstore';

    const isSciencePage = location.pathname === '/science';
    const isTechnologyPage = location.pathname === '/technology';
    const isEngineeringPage = location.pathname === '/engineering';
    const isMathematicsPage = location.pathname === '/mathematics';
    const isRoboticsPage = location.pathname === '/robotics';

    const toggleDrawer = () => {
        setDrawerOpen(!drawerOpen);
      };

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
        <AppBar position="static">
            <Container maxWidth="xl">
            <Box>           
                <Toolbar disableGutters>
                    
                    <AdbIcon
                        sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
                    />
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="#app-bar-with-responsive-menu"
                        sx={{
                            mr: 2,
                            display: { xs: "none", md: "flex" },
                            fontFamily: "monospace",
                            fontWeight: 700,
                            letterSpacing: ".3rem",
                            color: "inherit",
                            textDecoration: "none",
                        }}
                    >
                        LOGO
                    </Typography>

                    <Box
                        sx={{
                            flexGrow: 1,
                            display: { xs: "flex", md: "none" },
                        }}
                    >
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: "bottom",
                                horizontal: "left",
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: "top",
                                horizontal: "left",
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: "block", md: "none" },
                            }}
                        >
                            {pages.map((page) => (
                                <Link key={page.name} component={RouterLink} to={page.link}>
                                    <MenuItem
                                        onClick={handleCloseNavMenu}
                                    >
                                        <Typography
                                            textAlign="center"
                                            className="headerLink fontWeight-800"
                                        >
                                            {page.name}
                                        </Typography>
                                    </MenuItem>
                                </Link>
                            ))}
                        </Menu>
                    </Box>

                    <AdbIcon
                        sx={{ display: { xs: "flex", md: "none" }, mr: 1 }}
                    />
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href="#app-bar-with-responsive-menu"
                        sx={{
                            mr: 2,
                            display: { xs: "flex", md: "none" },
                            flexGrow: 1,
                            fontFamily: "monospace",
                            fontWeight: 700,
                            letterSpacing: ".3rem",
                            color: "inherit",
                            textDecoration: "none",
                        }}
                    >
                        LOGO
                    </Typography>
                    
                    {!isWebstorePage && !isSciencePage && !isTechnologyPage && !isEngineeringPage && !isMathematicsPage && !isRoboticsPage && (
                        <Box
                            sx={{
                                flexGrow: 1,
                                display: { xs: "none", md: "flex" },
                            }}
                        >
                            {pages.map((page) => (
                                <Link key={page.name} component={RouterLink} to={page.link} className="headerLink">
                                    <Button
                                        onClick={handleCloseNavMenu}
                                        sx={{ color: "white", display: "block" }}
                                        className="headerLink fontWeight-800"
                                    >
                                        {page.name}
                                    </Button>
                                </Link>
                            ))}
                            
                        </Box>
                    )}
                   {!isHomePage && !isCoursePage && !isRegisterPage && !isEventPage && !isContactUsPage && (
                     
                        <Box
                            sx={{
                                flexGrow: 1,
                                display: { xs: "none", md: "flex" },
                            }}
                        >
                            {webpages.map((webpage) => (
                                <Link key={webpage.name} component={RouterLink} to={webpage.link} className="headerLink">
                                    <Button
                                        onClick={handleCloseNavMenu}
                                        sx={{ color: "white", display: "block" }}
                                        className="headerLink fontWeight-800"
                                    >
                                        {webpage.name}
                                    </Button>

                                </Link>
                            ))}
                            
                            <Box sx={{ display: 'flex', marginLeft: 'auto' }}>                       
                                <Box>
                                    <Button sx={{ color: "white", display: "block"}}>
                                        <ShoppingCartIcon/>
                                    </Button>
                                </Box>
                                <Box> 
                                    <Button sx={{ color: "white", display: "block", ml: 1}}>
                                        <MenuIcon onClick={() => setDrawerOpen(true)}/>
                                </Button>    
                                </Box>
                            </Box> 
                        </Box>
                    )} 
                
                </Toolbar>
                
            </Box>
            </Container>
            

            {/* Side Navigation Bar */}
      
            <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer}>
                <List>
                <ListItemButton>
                    <ListItemText primary="Category 1" />
                </ListItemButton>
                <ListItemButton>
                    <ListItemText primary="Category 2" />
                </ListItemButton>
                <ListItemButton>
                    <ListItemText primary="Category 3" />
                </ListItemButton>
                </List>
            </Drawer>
        </AppBar>
    );
}
