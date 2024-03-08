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
            { name: "About Us", link: "aboutus" },
            { name: "Data privacy", link: "data-privacy" },
            { name: "FAQ's", link: "faqs" },
            { name: "Contact Us", link: "contact-us" },
            { name: "Admin Login", link: "admin_login"}
        ],
    },
    { name: "CourseList", link: "courselist" },
    { name: "Events", link: "events" },
    { name: "Contact Us", link: "contact-us" },
    { name: "Register", link: "register" },
    { name: "About Us", link: "aboutus" }, // cab be deleted afterwards as link is inside techticke main
    {name: "Webstore", link: "webstore"},
];

// const webpages = [
//     { name: "Home", link: "" },
//     {
//         name: "Science",
//         link: "science",
//         sublinks: [
//             "Elementary School Science",
//             "Middle School Science",
//             "High Scool Science",
//             "Activity Books",
//             "Experiments",
//             "Lab Equipment",
//         ],
//     },
//     { name: "Technology", link: "technology" },
//     { name: "Engineering", link: "engineering" },
//     { name: "Mathematics", link: "mathematics" },
//     { name: "Robotics", link: "robotics" },
//     { name: "Contact Us", link: "contact-us" },
// ];

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
