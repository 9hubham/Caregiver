import {
  Toolbar,
  AppBar,
  Typography,
  Button,
  Box,
  Stack,
  MenuItem,
  FormControl,
  Select,
  InputAdornment,
} from "@mui/material";
import Profileimg from "../assests/bodylogo.png";
import Logo from "../assests/logo.png";
import Arrow from "../assests/arrow-down.png";
import Down from "../assests/Icon.png";
import Search from "../assests/search 1.png";
import "@fontsource-variable/onest";
import Dp from "../assests/dp.png";
import Profile1 from "../assests/profile(1).png"
import Alex from "../assests/profile(2).png";
import React from "react";
import firstIcon from "../assests/language-square.png";
import secondIcon from "../assests/Icon.png";
import BodyLogo from "../assests/bodylogo.png";
import { useNavigate } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import {  InputLabel } from "@mui/material";
import Information from "./Information";

function Bookings() {
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
      <Box
        sx={{
          height: "1142px",
          width: "1288px",
          display: "flex",
          alignItems: "center",
          marginTop: "162px",
          marginLeft: "149px",
          marginRight: "149px",
          marginBottom: "162px",
        }}
      >
        <Box
          sx={{
            height: "1142px",
            width: "1188px",
            gap: "16px",
            borderRadius: "8px",
            paddingTop: "28px",
            paddingRight: "38px",
            paddingLeft: "38px",
            paddingBottom: "28px",
            border: "1px Solid #F2F4F7",
            boxShadow: "2px 2px 15px 0 #0000000D",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            
          }}
        >
          <Stack
            sx={{
              height: "30px",
              display: "flex",
              flexDirection: "row",
            }}
          >
            <Typography
              sx={{
                fontWeight: 700,
                fontFamily: "Onest",
                fontSize: 20,
              }}
            >
              Current Booking
            </Typography>
          </Stack>
          <Stack
            sx={{
              height: "96px",
              width: "1066px",
              borderRadius: "8px",
              padding: "16px",
              gap: "8px",
              border: "1px Solid #F2F4F7",
              display: "flex",
              flexDirection: "row",
            }}
          >
            <Box>
              <img
                src={Dp}
                alt="Profile"
                style={{
                  width: "64px",
                  height: "64px",
                  borderRadius: "12px",
                  border: "1.5px Solid #FC9155",
                }}
              />
            </Box>
            <Stack
              sx={{
                height: "52px",
                width: "834px",
                gap: "8px",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Stack
                sx={{
                  height: "24px",

                  display: "flex",
                  flexDirection: "row",
                }}
              >
                <Typography
                  sx={{
                    fontWeight: 500,
                    fontFamily: "Onest",
                    fontSize: "16px",
                  }}
                >
                  Paula Mora
                </Typography>
              </Stack>
              <Stack
                sx={{
                  height: "20px",

                  display: "flex",
                  flexDirection: "row",
                }}
              >
                <Typography
                  sx={{
                    fontWeight: 400,
                    fontFamily: "Onest",
                    fontSize: "14px",
                  }}
                >
                  Oct 17, 2023 1:55 am
                </Typography>
              </Stack>
            </Stack>
            <Box
              sx={{
                height: 64,
                width: 56,
                border: "1px Solid #F2F4F7",
                paddingTop: "4px",
                paddingRight: "15px",
                paddingBottom: "4px",
                paddingLeft: "14px",
                gap: "4px",
                display: "flex",
                boxShadow: "2px 0px 15px 0.05px #0000000D",
                borderRadius: "8px",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Stack sx={{}}>
                <Typography
                  sx={{
                    fontWeight: 600,
                    fontSize: "14px",
                    fontFamily: "Onest",
                    color: "#475467",
                  }}
                >
                  2 hr
                </Typography>
              </Stack>
            </Box>
            <Box
              sx={{
                height: 64,
                width: 56,
                border: "1px Solid #F2F4F7",
                paddingTop: "4px",
                paddingRight: "15px",
                paddingBottom: "4px",
                paddingLeft: "14px",
                gap: "4px",
                display: "flex",
                boxShadow: "2px 0px 15px 0.05px #0000000D",
                borderRadius: "8px",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Stack sx={{}}>
                <Typography
                  sx={{
                    fontWeight: 600,
                    fontSize: "14px",
                    fontFamily: "Onest",
                    color: "#475467",
                  }}
                >
                  Call
                </Typography>
              </Stack>
            </Box>
          </Stack>

          <Stack sx={{ height: "30px", display: "flex", flexDirection: "row" }}>
            <Typography
              sx={{ fontWeight: 700, fontFamily: "Onest", fontSize: 20 }}
            >
              Previous Booking
            </Typography>
          </Stack>
          <Stack
            sx={{
              height: "96px",
              width: "1066px",
              borderRadius: "8px",
              padding: "16px",
              gap: "8px",
              border: "1px Solid #F2F4F7",
              display: "flex",
              flexDirection: "row",
            }}
          >
            <Box>
              <img
                src={Profile1}
                alt="Profile"
                style={{
                  width: "64px",
                  height: "64px",
                  borderRadius: "12px",
                  border: "1.5px Solid #FC9155",
                }}
              />
            </Box>
            <Stack
              sx={{
                height: "52px",
                width: "834px",
                gap: "8px",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                marginTop: "5px",
              }}
            >
              <Stack
                sx={{
                  height: "24px",

                  display: "flex",
                  flexDirection: "row",
                }}
              >
                <Typography
                  sx={{
                    fontWeight: 500,
                    fontFamily: "Onest",
                    fontSize: "16px",
                  }}
                >
                  Stephanie Sharkey
                </Typography>
              </Stack>
              <Stack
                sx={{
                  height: "20px",

                  display: "flex",
                  flexDirection: "row",
                }}
              >
                <Typography
                  sx={{
                    fontWeight: 400,
                    fontFamily: "Onest",
                    fontSize: "14px",
                  }}
                >
                  Oct 17, 2023 1:55 am
                </Typography>
              </Stack>
            </Stack>

            <Stack
              sx={{
                display: "flex",
                marginLeft: "50px",
                justifyContent: "center",
              }}
            >
              <Box
                sx={{
                  height: 64,
                  width: 56,
                  border: "1px Solid #F2F4F7",
                  paddingTop: "4px",
                  paddingRight: "15px",
                  paddingBottom: "4px",
                  paddingLeft: "14px",
                  gap: "4px",
                  display: "flex",
                  boxShadow: "2px 0px 15px 0.05px #0000000D",
                  borderRadius: "8px",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Stack sx={{}}>
                  <Typography
                    sx={{
                      fontWeight: 600,
                      fontSize: "14px",
                      fontFamily: "Onest",
                      color: "#475467",
                    }}
                  >
                    Call
                  </Typography>
                </Stack>
              </Box>
            </Stack>
          </Stack>
          <Stack
            sx={{
              height: "96px",
              width: "1066px",
              borderRadius: "8px",
              padding: "16px",
              gap: "8px",
              border: "1px Solid #F2F4F7",
              display: "flex",
              flexDirection: "row",
            }}
          >
            <Box>
              <img
                src={Dp}
                alt="Profile"
                style={{
                  width: "64px",
                  height: "64px",
                  borderRadius: "12px",
                  border: "1.5px Solid #FC9155",
                }}
              />
            </Box>
            <Stack
              sx={{
                height: "52px",
                width: "834px",
                gap: "8px",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                marginTop: "5px",
              }}
            >
              <Stack
                sx={{
                  height: "24px",

                  display: "flex",
                  flexDirection: "row",
                }}
              >
                <Typography
                  sx={{
                    fontWeight: 500,
                    fontFamily: "Onest",
                    fontSize: "16px",
                  }}
                >
                  Paula Mora
                </Typography>
              </Stack>
              <Stack
                sx={{
                  height: "20px",

                  display: "flex",
                  flexDirection: "row",
                }}
              >
                <Typography
                  sx={{
                    fontWeight: 400,
                    fontFamily: "Onest",
                    fontSize: "14px",
                  }}
                >
                  Oct 17, 2023 1:55 am
                </Typography>
              </Stack>
            </Stack>

            <Stack
              sx={{
                display: "flex",
                marginLeft: "50px",
                justifyContent: "center",
              }}
            >
              <Box
                sx={{
                  height: 64,
                  width: 56,
                  border: "1px Solid #F2F4F7",
                  paddingTop: "4px",
                  paddingRight: "15px",
                  paddingBottom: "4px",
                  paddingLeft: "14px",
                  gap: "4px",
                  display: "flex",
                  boxShadow: "2px 0px 15px 0.05px #0000000D",
                  borderRadius: "8px",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Stack sx={{}}>
                  <Typography
                    sx={{
                      fontWeight: 600,
                      fontSize: "14px",
                      fontFamily: "Onest",
                      color: "#475467",
                    }}
                  >
                    Call
                  </Typography>
                </Stack>
              </Box>
            </Stack>
          </Stack>
          <Stack
            sx={{
              height: "96px",
              width: "1066px",
              borderRadius: "8px",
              padding: "16px",
              gap: "8px",
              border: "1px Solid #F2F4F7",
              display: "flex",
              flexDirection: "row",
            }}
          >
            <Box>
              <img
                src={Alex}
                alt="Profile"
                style={{
                  width: "64px",
                  height: "64px",
                  borderRadius: "12px",
                  border: "1.5px Solid #FC9155",
                }}
              />
            </Box>
            <Stack
              sx={{
                height: "52px",
                width: "834px",
                gap: "8px",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                marginTop: "5px",
              }}
            >
              <Stack
                sx={{
                  height: "24px",

                  display: "flex",
                  flexDirection: "row",
                }}
              >
                <Typography
                  sx={{
                    fontWeight: 500,
                    fontFamily: "Onest",
                    fontSize: "16px",
                  }}
                >
                  Alex Buckmaster
                </Typography>
              </Stack>
              <Stack
                sx={{
                  height: "20px",

                  display: "flex",
                  flexDirection: "row",
                }}
              >
                <Typography
                  sx={{
                    fontWeight: 400,
                    fontFamily: "Onest",
                    fontSize: "14px",
                  }}
                >
                  Oct 17, 2023 1:55 am
                </Typography>
              </Stack>
            </Stack>

            <Stack
              sx={{
                display: "flex",
                marginLeft: "50px",
                justifyContent: "center",
              }}
            >
              <Box
                sx={{
                  height: 64,
                  width: 56,
                  border: "1px Solid #F2F4F7",
                  paddingTop: "4px",
                  paddingRight: "15px",
                  paddingBottom: "4px",
                  paddingLeft: "14px",
                  gap: "4px",
                  display: "flex",
                  boxShadow: "2px 0px 15px 0.05px #0000000D",
                  borderRadius: "8px",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Stack sx={{}}>
                  <Typography
                    sx={{
                      fontWeight: 600,
                      fontSize: "14px",
                      fontFamily: "Onest",
                      color: "#475467",
                    }}
                  >
                    Call
                  </Typography>
                </Stack>
              </Box>
            </Stack>
          </Stack>
          <Stack
            sx={{
              height: "96px",
              width: "1066px",
              borderRadius: "8px",
              padding: "16px",
              gap: "8px",
              border: "1px Solid #F2F4F7",
              display: "flex",
              flexDirection: "row",
            }}
          >
            <Box>
              <img
                src={Profile1}
                alt="Profile"
                style={{
                  width: "64px",
                  height: "64px",
                  borderRadius: "12px",
                  border: "1.5px Solid #FC9155",
                }}
              />
            </Box>
            <Stack
              sx={{
                height: "52px",
                width: "834px",
                gap: "8px",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                marginTop: "5px",
              }}
            >
              <Stack
                sx={{
                  height: "24px",

                  display: "flex",
                  flexDirection: "row",
                }}
              >
                <Typography
                  sx={{
                    fontWeight: 500,
                    fontFamily: "Onest",
                    fontSize: "16px",
                  }}
                >
                  Stephanie Sharkey
                </Typography>
              </Stack>
              <Stack
                sx={{
                  height: "20px",

                  display: "flex",
                  flexDirection: "row",
                }}
              >
                <Typography
                  sx={{
                    fontWeight: 400,
                    fontFamily: "Onest",
                    fontSize: "14px",
                  }}
                >
                  Oct 17, 2023 1:55 am
                </Typography>
              </Stack>
            </Stack>

            <Stack
              sx={{
                display: "flex",
                marginLeft: "50px",
                justifyContent: "center",
              }}
            >
              <Box
                sx={{
                  height: 64,
                  width: 56,
                  border: "1px Solid #F2F4F7",
                  paddingTop: "4px",
                  paddingRight: "15px",
                  paddingBottom: "4px",
                  paddingLeft: "14px",
                  gap: "4px",
                  display: "flex",
                  boxShadow: "2px 0px 15px 0.05px #0000000D",
                  borderRadius: "8px",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Stack sx={{}}>
                  <Typography
                    sx={{
                      fontWeight: 600,
                      fontSize: "14px",
                      fontFamily: "Onest",
                      color: "#475467",
                    }}
                  >
                    Call
                  </Typography>
                </Stack>
              </Box>
            </Stack>
          </Stack>
          <Stack
            sx={{
              height: "96px",
              width: "1066px",
              borderRadius: "8px",
              padding: "16px",
              gap: "8px",
              border: "1px Solid #F2F4F7",
              display: "flex",
              flexDirection: "row",
            }}
          >
            <Box>
              <img
                src={Alex}
                alt="Profile"
                style={{
                  width: "64px",
                  height: "64px",
                  borderRadius: "12px",
                  border: "1.5px Solid #FC9155",
                }}
              />
            </Box>
            <Stack
              sx={{
                height: "52px",
                width: "834px",
                gap: "8px",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                marginTop: "5px",
              }}
            >
              <Stack
                sx={{
                  height: "24px",

                  display: "flex",
                  flexDirection: "row",
                }}
              >
                <Typography
                  sx={{
                    fontWeight: 500,
                    fontFamily: "Onest",
                    fontSize: "16px",
                  }}
                >
                  Alex Buckmaster
                </Typography>
              </Stack>
              <Stack
                sx={{
                  height: "20px",

                  display: "flex",
                  flexDirection: "row",
                }}
              >
                <Typography
                  sx={{
                    fontWeight: 400,
                    fontFamily: "Onest",
                    fontSize: "14px",
                  }}
                >
                  Oct 17, 2023 1:55 am
                </Typography>
              </Stack>
            </Stack>

            <Stack
              sx={{
                display: "flex",
                marginLeft: "50px",
                justifyContent: "center",
              }}
            >
              <Box
                sx={{
                  height: 64,
                  width: 56,
                  border: "1px Solid #F2F4F7",
                  paddingTop: "4px",
                  paddingRight: "15px",
                  paddingBottom: "4px",
                  paddingLeft: "14px",
                  gap: "4px",
                  display: "flex",
                  boxShadow: "2px 0px 15px 0.05px #0000000D",
                  borderRadius: "8px",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Stack sx={{}}>
                  <Typography
                    sx={{
                      fontWeight: 600,
                      fontSize: "14px",
                      fontFamily: "Onest",
                      color: "#475467",
                    }}
                  >
                    Call
                  </Typography>
                </Stack>
              </Box>
            </Stack>
          </Stack>
          <Stack
            sx={{
              height: "96px",
              width: "1066px",
              borderRadius: "8px",
              padding: "16px",
              gap: "8px",
              border: "1px Solid #F2F4F7",
              display: "flex",
              flexDirection: "row",
            }}
          >
            <Box>
              <img
                src={Dp}
                alt="Profile"
                style={{
                  width: "64px",
                  height: "64px",
                  borderRadius: "12px",
                  border: "1.5px Solid #FC9155",
                }}
              />
            </Box>
            <Stack
              sx={{
                height: "52px",
                width: "834px",
                gap: "8px",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                marginTop: "5px",
              }}
            >
              <Stack
                sx={{
                  height: "24px",

                  display: "flex",
                  flexDirection: "row",
                }}
              >
                <Typography
                  sx={{
                    fontWeight: 500,
                    fontFamily: "Onest",
                    fontSize: "16px",
                  }}
                >
                  Paula Mora
                </Typography>
              </Stack>
              <Stack
                sx={{
                  height: "20px",

                  display: "flex",
                  flexDirection: "row",
                }}
              >
                <Typography
                  sx={{
                    fontWeight: 400,
                    fontFamily: "Onest",
                    fontSize: "14px",
                  }}
                >
                  Oct 17, 2023 1:55 am
                </Typography>
              </Stack>
            </Stack>

            <Stack
              sx={{
                display: "flex",
                marginLeft: "50px",
                justifyContent: "center",
              }}
            >
              <Box
                sx={{
                  height: 64,
                  width: 56,
                  border: "1px Solid #F2F4F7",
                  paddingTop: "4px",
                  paddingRight: "15px",
                  paddingBottom: "4px",
                  paddingLeft: "14px",
                  gap: "4px",
                  display: "flex",
                  boxShadow: "2px 0px 15px 0.05px #0000000D",
                  borderRadius: "8px",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Stack sx={{}}>
                  <Typography
                    sx={{
                      fontWeight: 600,
                      fontSize: "14px",
                      fontFamily: "Onest",
                      color: "#475467",
                    }}
                  >
                    Call
                  </Typography>
                </Stack>
              </Box>
            </Stack>
          </Stack>
          <Stack
            sx={{
              height: "96px",
              width: "1066px",
              borderRadius: "8px",
              padding: "16px",
              gap: "8px",
              border: "1px Solid #F2F4F7",
              display: "flex",
              flexDirection: "row",
            }}
          >
            <Box>
              <img
                src={Profile1}
                alt="Profile"
                style={{
                  width: "64px",
                  height: "64px",
                  borderRadius: "12px",
                  border: "1.5px Solid #FC9155",
                }}
              />
            </Box>
            <Stack
              sx={{
                height: "52px",
                width: "834px",
                gap: "8px",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                marginTop: "5px",
              }}
            >
              <Stack
                sx={{
                  height: "24px",

                  display: "flex",
                  flexDirection: "row",
                }}
              >
                <Typography
                  sx={{
                    fontWeight: 500,
                    fontFamily: "Onest",
                    fontSize: "16px",
                  }}
                >
                  Stephanie Sharkey
                </Typography>
              </Stack>
              <Stack
                sx={{
                  height: "20px",

                  display: "flex",
                  flexDirection: "row",
                }}
              >
                <Typography
                  sx={{
                    fontWeight: 400,
                    fontFamily: "Onest",
                    fontSize: "14px",
                  }}
                >
                  Oct 17, 2023 1:55 am
                </Typography>
              </Stack>
            </Stack>

            <Stack
              sx={{
                display: "flex",
                marginLeft: "50px",
                justifyContent: "center",
              }}
            >
              <Box
                sx={{
                  height: 64,
                  width: 56,
                  border: "1px Solid #F2F4F7",
                  paddingTop: "4px",
                  paddingRight: "15px",
                  paddingBottom: "4px",
                  paddingLeft: "14px",
                  gap: "4px",
                  display: "flex",
                  boxShadow: "2px 0px 15px 0.05px #0000000D",
                  borderRadius: "8px",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Stack sx={{}}>
                  <Typography
                    sx={{
                      fontWeight: 600,
                      fontSize: "14px",
                      fontFamily: "Onest",
                      color: "#475467",
                    }}
                  >
                    Call
                  </Typography>
                </Stack>
              </Box>
            </Stack>
          </Stack>
        </Box>
      </Box>
    </>
  );
}
export default Bookings;
