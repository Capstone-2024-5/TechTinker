import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Link as RouterLink, useLocation } from "react-router-dom";
import {
    AppBar,
    Box,
    Container,
    Drawer,
    IconButton,
    List,
    ListItemButton,
    ListItemText,
    Menu,
    MenuItem,
    Toolbar,
    Typography,
    Button,
    Fade,
} from "@mui/material";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";

const pages = [
    {
        name: "Techtinker",
        link: "",
        submenus: [
            { name: "Home", link: "" },
            { name: "About", link: "about" },
            { name: "Data privacy", link: "data-privacy" },
            { name: "FAQ's", link: "faqs" },
            { name: "Contact Us", link: "contact-us" }
        ],
    },
    { name: "CourseList", link: "courselist" },
<<<<<<< HEAD
    { name: "Event", link: "events" },
    { name: "Register", link: "register" },
    {
        name: "Webstore",
        link: "webstore",
        submenus: [
            { name: "Science", link: "science" },
            { name: "Technology", link: "technology" },
            { name: "Engineering", link: "engineering" },
            { name: "Mathematics", link: "mathematics" },
            { name: "Robotics", link: "robotics" },
            { name: "Contact Us", link: "contact-us" },
        ],
    },
=======
    { name: "Events", link: "events" },
    { name: "Contact Us", link: "contact-us" },
    { name: "Register", link: "register" }, 
    {name: "Webstore", link: "webstore"},
>>>>>>> 5de60f7a54bba684debc27957e94d0868f6d96c7
];

const webpages = [
    { name: "Home", link: "" },
    {
        name: "Science",
        link: "science",
        sublinks: [
            "Elementary School Science",
            "Middle School Science",
            "High Scool Science",
            "Activity Books",
            "Experiments",
            "LAb Equipment",
        ],
    },
    { name: "Technology", link: "technology" },
    { name: "Engineering", link: "engineering" },
    { name: "Mathematics", link: "mathematics" },
    { name: "Robotics", link: "robotics" },
    { name: "Contact Us", link: "contact-us" },
];

export default function Header() {
    const [anchorElNav, setAnchorElNav] = useState(null);
    const [drawerOpen, setDrawerOpen] = useState(false);

    const location = useLocation();

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
                        {/* <AdbIcon
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
                            TECHTINKERS
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
                        </Typography> */}

                        <Box
                            sx={{
                                flexGrow: 1,
                                display: { xs: "none", md: "flex" },
                            }}
                        >
                            {pages.map((page) =>
                                page.submenus && page.submenus.length > 0 ? (
                                    <PopupState
                                        variant="popover"
                                        popupId="demo-popup-menu"
                                        key={page.name}
                                    >
                                        {(popupState) => (
                                            <React.Fragment>
                                                <Button
                                                    className="headerLink fontWeight-800"
                                                    {...bindTrigger(popupState)}
                                                >
                                                    {page.name}
                                                </Button>
                                                <Menu {...bindMenu(popupState)}>
                                                    {page.submenus.map(
                                                        (submenu) => (
                                                            <Link
                                                                key={
                                                                    submenu.name
                                                                }
                                                                component={
                                                                    RouterLink
                                                                }
                                                                to={
                                                                    submenu.link
                                                                }
                                                                className="headerLink subHeaderLink"
                                                            >
                                                                <MenuItem
                                                                    onClick={() => {
                                                                        handleCloseNavMenu();
                                                                        popupState.close();
                                                                    }}
                                                                >
                                                                    <Typography
                                                                        textAlign="center"
                                                                        className="headerLink fontWeight-800"
                                                                    >
                                                                        {
                                                                            submenu.name
                                                                        }
                                                                    </Typography>
                                                                </MenuItem>
                                                            </Link>
                                                        )
                                                    )}
                                                </Menu>
                                            </React.Fragment>
                                        )}
                                    </PopupState>
                                ) : (
                                    <Link
                                        key={page.name}
                                        component={RouterLink}
                                        to={page.link}
                                        className="headerLink"
                                    >
                                        <MenuItem onClick={handleCloseNavMenu}>
                                            <Typography
                                                textAlign="center"
                                                className="headerLink fontWeight-800"
                                            >
                                                {page.name}
                                            </Typography>
                                        </MenuItem>
                                    </Link>
                                )
                            )}
                        </Box>
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
