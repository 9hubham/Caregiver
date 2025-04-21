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
import Profileimg from "../assests/profileimg.png";
import Logo from "../assests/logo.png";
import Arrow from "../assests/arrow-down.png";
import Down from "../assests/chevron-down.png";
import Search from "../assests/search 1.png";
import "@fontsource-variable/onest";
import Dp from "../assests/dp.png";
import Profile1 from "../assests/profile(1).png"
import Alex from "../assests/profile(2).png"

function Bookings() {
  return (
    <>
      <AppBar
        sx={{
          backgroundColor: "white",
          boxShadow: "none",
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
          }}
        >
          <Box>
            <Box
              sx={{
                gap: "20px",
                borderRadius: "12px",
                paddingTop: "10px",
                paddingRight: "14px",
                paddingLeft: "14px",
                paddingBottom: "10px",
                border: "10px",
                borderColor: "Black",
                display: "flex",
                flexDirection: "row",
              }}
            >
              <img src={Logo} alt="lock" height="45px" width="135px" />

              <Stack sx={{ display: "flex", flexDirection: "column" }}>
                <Typography
                  sx={{
                    fontWeight: 500,
                    fontSize: "12px",
                    fontFamily: "Onest",
                    textTransform: "none",
                    color: "#FC9155",
                    display: "flex",
                    flexDirection: "row",
                  }}
                >
                  Your location
                </Typography>
                <Typography
                  sx={{
                    color: "#344054",
                    fontSize: "18px",
                    fontWeight: 500,
                    fontFamily: "Onest",
                  }}
                >
                  Thane, Mumbai
                  <img src={Arrow} alt="lock" height="24px" width="24px" />
                </Typography>
              </Stack>
            </Box>
          </Box>

          <Stack
            sx={{
              display: "flex",
              flexDirection: "row",
              gap: "34px",
              marginLeft: "400px",
            }}
          >
            <Button variant="text">
              <Typography
                sx={{
                  fontWeight: 500,
                  fontSize: "18px",
                  fontFamily: "Onest",
                  textTransform: "none",
                }}
              >
                {" "}
                Home
              </Typography>
            </Button>
            <Button variant="text">
              <Typography
                sx={{
                  fontWeight: 500,
                  fontSize: "18px",
                  fontFamily: "Onest",
                  textTransform: "none",
                }}
              >
                {" "}
                Appointment
              </Typography>
            </Button>
            <Button variant="text">
              <Typography
                sx={{
                  fontWeight: 500,
                  fontSize: "18px",
                  fontFamily: "Onest",
                  textTransform: "none",
                }}
              >
                {" "}
                Payments
              </Typography>
            </Button>
            <FormControl
              InputProps={{
                startAdornment: (
                  <InputAdornment>
                    <img src={Down} alt="lock" height="20px" width="20px" />
                  </InputAdornment>
                ),
              }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: "60px",
                  height: "48px",
                  width: "84px",
                  gap: "12px",
                  padding: "12px",
                },
              }}
            >
              <Select>
                <MenuItem value={"English"}>English</MenuItem>
                <MenuItem value={"Malaysian"}>Malaysian</MenuItem>
                <MenuItem value={"Thau"}>Thau</MenuItem>
                <MenuItem value={"Indonesian"}>Indonesian</MenuItem>
              </Select>
            </FormControl>
            <Button>
              {" "}
              <img src={Search} alt="Profile icon" height="24px" width="24px" />
            </Button>
            <Button
              variant="contained"
              sx={{
                gap: "14px",
                borderRadius: "40px",
                height: "52px",
                width: "138px",
                display: "flex",
                flexDirection: "row",
              }}
            >
              <img
                src={Profileimg}
                alt="Profil icon"
                height="24px"
                width="24px"
              />
              <Typography
                sx={{
                  fontSize: "10px",
                  fontWeight: 600,
                  fontFamily: "Onest",
                }}
              >
                John Doe
              </Typography>
            </Button>
          </Stack>
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
