import React from "react";
import Logo from "../assests/logo.png";
import firstIcon from "../assests/language-square.png";
import secondIcon from "../assests/Icon.png";
import BodyLogo from "../assests/bodylogo.png";
import { useNavigate } from "react-router-dom";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import SearchIcon from "@mui/icons-material/Search";
import { Box, Select, FormControl, InputLabel } from "@mui/material";
import Information from "./Information";

const Header = () => {
  const navigate = useNavigate();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [location, setLocation] = React.useState("Thane, Mumbai");

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <AppBar
        position="static"
        sx={{ background: "#fff", color: "#000", boxShadow: 1 }}
      >
        <Toolbar
          sx={{
            minHeight: 100,
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          {/* Logo */}
          <Box
            component="img"
            src={Logo}
            alt="CareDad Logo"
            sx={{ height: 50 }}
          ></Box>

          {/* Location Selector */}
          <FormControl>
            <InputLabel>Your location</InputLabel>
            <Select
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              variant="standard"
              displayEmpty
              sx={{
                minWidth: 150,
                "&:before, &:after": { display: "none" }, // Removes the underline
                "& .MuiSelect-select": { padding: 0 }, // Adjusts padding for better alignment
              }}
            >
              <MenuItem value={"Thane, Mumbai"}>Thane, Mumbai</MenuItem>
              <MenuItem value={"Delhi"}>Delhi</MenuItem>
              <MenuItem value={"Bangalore"}>Bangalore</MenuItem>
            </Select>
          </FormControl>

          {/* Navigation Links */}
          <Box sx={{ display: "flex", gap: 3 }}>
            <Button onClick={() => navigate("/HomePage")} color="inherit">
              Home
            </Button>
            <Button onClick={() => navigate("/Booking")} color="inherit">
              Appointment
            </Button>
            <Button onClick={() => navigate("/Payment")} color="inherit">
              Payments
            </Button>
          </Box>

          {/* Search Icon */}
          <IconButton onClick={handleMenuOpen}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <Box
                component="img"
                src={firstIcon}
                alt="first Icon"
                sx={{ width: 24, height: 24 }}
              />
              <Box
                component="img"
                src={secondIcon}
                alt="second Icon"
                sx={{ width: 24, height: 24 }}
              />
            </Box>
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
          >
            <MenuItem onClick={handleMenuClose}>English</MenuItem>
            <MenuItem onClick={handleMenuClose}>Malaysian</MenuItem>
            <MenuItem onClick={handleMenuClose}>Thai</MenuItem>
            <MenuItem onClick={handleMenuClose}>Indonesian</MenuItem>
          </Menu>

          {/* Profile Menu */}
          <IconButton>
            <SearchIcon />
          </IconButton>

          {/* User Profile */}
          <Button
            color="primary"
            variant="contained"
            sx={{
              borderRadius: 40,
              minHeight: 50,
              backgroundColor: "#003580",
              "&:hover": { backgroundColor: "#002766" },
            }}
            startIcon={
              <img src={BodyLogo} alt="Logo" sx={{ height: 24, width: 24 }} />
            }
          >
            John Doe
          </Button>
        </Toolbar>
      </AppBar>

      <Information />
    </>
  );
};

export default Header;