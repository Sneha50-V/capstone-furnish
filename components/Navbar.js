import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Menu,
  MenuItem,
  Box,
  IconButton,
} from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleServicesClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleServicesClose = () => {
    setAnchorEl(null);
  };

  // Common sx for all nav buttons
  const navButtonSx = {
    whiteSpace: "nowrap",
    transition: "background 0.2s, opacity 0.2s",
    "&:hover": {
      backgroundColor: "rgba(255,255,255,0.12)", // semi-transparent white
      opacity: 0.85,
    },
  };

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "#1f2937",
        color: "white",
      }}
      elevation={0}
    >
      <Toolbar>
        {/* Title */}
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          <Link to="/" style={{ color: "white", textDecoration: "none" }}>
            JustFurnishIt
          </Link>
        </Typography>

        {/* Navigation Buttons */}
        <Box sx={{ display: "flex", gap: 3, alignItems: "center" }}>
          <Button color="inherit" component={Link} to="/" sx={navButtonSx}>
            Home
          </Button>
          <Button
            color="inherit"
            onClick={handleServicesClick}
            endIcon={<ArrowDropDownIcon />}
            sx={navButtonSx}
          >
            Services
          </Button>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleServicesClose}
            PaperProps={{
              sx: { backgroundColor: "#1f2937", color: "white" },
            }}
          >
            <MenuItem
              component={Link}
              to="/designs"
              onClick={handleServicesClose}
              sx={{ color: "white" }}
            >
              Designs
            </MenuItem>
            <MenuItem
              component={Link}
              to="/products"
              onClick={handleServicesClose}
              sx={{ color: "white" }}
            >
              Products
            </MenuItem>
          </Menu>
          <Button
            color="inherit"
            component={Link}
            to="/contact"
            sx={navButtonSx}
          >
            Contact Us
          </Button>

          <Button
            color="inherit"
            component={Link}
            to="/signup"
            sx={navButtonSx}
          >
            Signup
          </Button>
          <Button color="inherit" component={Link} to="/login" sx={navButtonSx}>
            Login
          </Button>
          <IconButton
            component={Link}
            to="/login"
            sx={{
              color: "white",
              transition: "background 0.2s, opacity 0.2s",
              "&:hover": {
                backgroundColor: "rgba(255,255,255,0.12)",
                opacity: 0.85,
              },
            }}
            aria-label="login"
          >
            <AccountCircleIcon />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
