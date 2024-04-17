import React, { useState } from "react";
import Badge from '@mui/material/Badge';
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
} from "@mui/material";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";
import { Adb as AdbIcon, ShoppingCart as ShoppingCartIcon, Menu as MenuIcon } from "@mui/icons-material";

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
      { name: "Admin Login", link: "admin_login" },
    ],
  },
  { name: "Courses", link: "courselist" },
  // { name: "CourseCRUD", link: "courseupdate" },
  // { name: "CourseAdd", link: "courseadd" },
  { name: "Events", link: "events" },
  { name: "Register", link: "register" },
  // {name: "Student Management", link:"studentmanagement"},
  { name: "About Us", link: "aboutus" }, // cab be deleted afterwards as link is inside techticke main
  { name: "Webstore", link: "webstore" },
];

export default function Header({ cartCount, handleAddToCart }) {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const location = useLocation();

  const isHomePage = location.pathname === "/";
  const isCourseList = location.pathname === "/courselist";
  const isCourseDetails = new RegExp("/courselist/.*").test(location.pathname);
  const isRegisterPage = location.pathname === "/register";
  const isCourseAdd = location.pathname === "/courseadd";
  const isCourseUpdate = location.pathname === "/courseupdate";
  const isStudentManagementPage = location.pathname === "/studentmanagement"
  const isEventPage = location.pathname === "/events";
  const isContactUsPage = location.pathname === "/contact-us";
  const isWebstorePage = location.pathname === "/webstore";
  const isAboutUs = location.pathname === "/aboutus";
  const isAdminLogin = location.pathname === "/admin_login";
  const isAdminDashBoard = location.pathname === "//admin_dashboard";
  

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
    <AppBar position="static" className="header">
      <Container maxWidth="xl">
        <Box>
          <Toolbar disableGutters>
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex", alignItems:"center" },
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
                          className="logobtn headerLink fontWeight-800"
                          {...bindTrigger(popupState)}
                        >
                          {page.name}
                        </Button>
                        <Menu {...bindMenu(popupState)}>
                          {page.submenus.map((submenu) => (
                            <Link
                              key={submenu.name}
                              component={RouterLink}
                              to={submenu.link}
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
                                  {submenu.name}
                                </Typography>
                              </MenuItem>
                            </Link>
                          ))}
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
            {/* Render the shopping cart icon with count */}
            {isWebstorePage && (
            <div style={{ position: 'relative' }}>
                <IconButton color="inherit" onClick={handleAddToCart}>
                <ShoppingCartIcon />
                </IconButton>
                <Badge badgeContent={cartCount} color="error" style={{ position: 'absolute', top: 10, right: 5 }}>
                {/* Empty div to maintain spacing */}
                <div style={{ width: 24, height: 24 }} />
                </Badge>
            </div>
            )
            }
          </Toolbar>
        </Box>

        <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
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

        {
        !isHomePage &&
          !isCourseList &&
          !isRegisterPage &&
          !isEventPage &&
          !isContactUsPage &&
          !isCourseDetails &&
          !isCourseUpdate &&
          !isStudentManagementPage &&
          !isCourseAdd &&
          !isWebstorePage &&
          !isAboutUs &&
          !isAdminLogin &&
          isAdminDashBoard && (
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex" },
              }}
            >
             {/* <Box sx={{ display: "flex", marginLeft: "auto" }}>
                <Box>
                  <Button sx={{ color: "white", display: "block" }}>
                    <ShoppingCartIcon />
                  </Button>
                </Box>
                <Box>
                  <Button sx={{ color: "white", display: "block", ml: 1 }}>
                    <MenuIcon onClick={() => setDrawerOpen(true)} />
                  </Button>
                </Box>
              </Box> */}

              <div style={{ position: 'relative' }}>
                <IconButton color="inherit" onClick={handleAddToCart}>
                <ShoppingCartIcon />
                </IconButton>
                <Badge badgeContent={cartCount} color="error" style={{ position: 'absolute', top: 10, right: 5 }}>
                {/* Empty div to maintain spacing */}
                <div style={{ width: 24, height: 24 }} />
                </Badge>
            </div>
            </Box>
          )
          }
      </Container>
    </AppBar>
    );
};
