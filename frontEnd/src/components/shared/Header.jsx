import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Link as RouterLink, useLocation } from "react-router-dom";
import {
  AppBar,
  Box,
  Container,
  Drawer,
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
  { name: "CourseList", link: "courselist" },
  { name: "CourseAdd", link: "courseadd" },
  { name: "Events", link: "events" },
 // { name: "Register", link: "register", submenus: [{ name: "Student Management", link: "studentmanagement" }] },
 { name: "Register", link: "register" },
 {name: "Student Management", link:"studentmanagement"},
  { name: "About Us", link: "aboutus" },
  { name: "Webstore", link: "webstore" },
 
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
            "Lab Equipment",
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

  const isHomePage = location.pathname === "/";
  const isCourseList = location.pathname === "/courselist";
  const isCourseDetails = new RegExp("/courselist/.*").test(location.pathname);
  const isRegisterPage = location.pathname === "/register";
  const isStudentManagementPage = location.pathname === "/studentmanagement"
  const isCourseAdd = location.pathname === "/courseadd";
  const isEventPage = location.pathname === "/events";
  const isContactUsPage = location.pathname === "/contact-us";
  const isWebstorePage = location.pathname === "/webstore";

  const isSciencePage = location.pathname === "/science";
  const isTechnologyPage = location.pathname === "/technology";
  const isEngineeringPage = location.pathname === "/engineering";
  const isMathematicsPage = location.pathname === "/mathematics";
  const isRoboticsPage = location.pathname === "/robotics";

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

        {/* {!isWebstorePage &&
          !isSciencePage &&
          !isTechnologyPage &&
          !isEngineeringPage &&
          !isMathematicsPage &&
          !isRoboticsPage && (
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex" },
              }}
            >
              {pages.map((page) => (
                <Link
                  key={page.name}
                  component={RouterLink}
                  to={page.link}
                  className="headerLink"
                >
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
          )} */}

        {!isHomePage &&
          !isCourseList &&
          !isRegisterPage &&
          !isEventPage &&
          !isContactUsPage &&
          !isCourseDetails &&
          !isStudentManagementPage &&
          !isCourseAdd && (
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex" },
              }}
            >
              {webpages.map((webpage) => (
                <Link
                  key={webpage.name}
                  component={RouterLink}
                  to={webpage.link}
                  className="headerLink"
                >
                  <Button
                    onClick={handleCloseNavMenu}
                    sx={{ color: "white", display: "block" }}
                    className="headerLink fontWeight-800"
                  >
                    {webpage.name}
                  </Button>
                </Link>
              ))}

              <Box sx={{ display: "flex", marginLeft: "auto" }}>
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
              </Box>
            </Box>
          )}
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
