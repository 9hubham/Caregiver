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
  Avatar
} from "@mui/material";
import Profileimg from "../assests/profileimg.png";
import Logo from "../assests/logo.png";
import Arrow from "../assests/arrow-down.png";
import Down from "../assests/chevron-down.png";
import Search from "../assests/search 1.png";
import React from "react";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PermPhoneMsgIcon from "@mui/icons-material/PermPhoneMsg";
import FemaleIcon from "@mui/icons-material/Female";
import CheckIcon from "../assests/check-circle 1.png";
import Woman from "../assests/woman.png";
import Man from "../assests/man.png"

import Profile from "../assests/profile.png";

function Profile2() {
  const cardData = [
    {
      title: "My Condition",
      editable: true,
      items: ["Improvement of Heath Fitness", "Covid 19 recovery"],
      useCheckIcon: true,
    },
    {
      title: "Special Needs",
      editable: true,
      items: ["Bathing", "Walk on morning", "Personal care"],
    },
    {
      title: "Services I need",
      editable: true,
      items: [
        "Personals care",
        "Domestic Assistance",
        "Out and About Transport",
      ],
    },
  ];
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
          width: "1142px",
          height: "234px",
          gap: "16px",
          border: "1px solid #F2F4F7",
          borderRadius: "8px",
          paddingTop: "28px",
          paddingRight: "38px",
          paddingBottom: "28px",
          paddingLeft: "38px",
          boxShadow: "2px 2px 15px 0px #0000000D",
          marginTop: "141px",
          marginLeft: "149px",
        }}
      >
        <Stack
          sx={{
            height: "178px",
            width: "894px",
            gap: "20px",
            display: "flex",
            flexDirection: "row",
          }}
        >
          <Box sx={{}}>
            <img
              src={Profile}
              alt="John Doe"
              sx={{ width: 114, height: 114 }}
            />
          </Box>
          <Stack
            sx={{
              display: "flex",
              flexDirection: "column",
              height: "178px",
              width: "760px",
              gap: "13px",
            }}
          >
            <Stack
              sx={{
                display: "flex",
                flexDirection: "row",
                height: "30px",
                width: "760px",
                gap: "13px",
              }}
            >
              <Typography variant="h6">John Doe</Typography>
              <FemaleIcon
                sx={{ height: "24px", width: "24px" }}
                color="action"
              />
              <Typography
                sx={{
                  fontSize: "16px",
                  fontWeight: 500,
                  fontFamily: "Onest",
                  color: "#667085",
                }}
              >
                Female
              </Typography>
            </Stack>
            <Stack
              sx={{
                height: "30px",
                width: "760px",
                gap: "13px",
                flexDirection: "row",
              }}
            >
              <PhoneIcon color="action" />
              <Typography
                sx={{
                  color: "#667085",
                  fontWeight: 500,
                  fontSize: "16px",
                  fontFamily: "Onest",
                }}
              >
                +91 987654322
              </Typography>
              <EmailIcon color="action" />
              <Typography
                sx={{
                  color: "#667085",
                  fontWeight: 500,
                  fontSize: "16px",
                  fontFamily: "Onest",
                }}
              >
                abc@gmail.com
              </Typography>
            </Stack>

            <Stack
              sx={{
                height: "30px",
                width: "760px",
                gap: "13px",
                flexDirection: "row",
              }}
            >
              <CalendarTodayIcon
                color="action"
                sx={{ height: "24px", width: "24px" }}
              />
              <Typography
                color="text.secondary"
                fontWeight={600}
                sx={{ fontSize: "16px", fontFamily: "Onest" }}
              >
                Date of Birth
              </Typography>
              <Typography
                fontWeight={600}
                sx={{ fontSize: "16px", fontFamily: "Onest" }}
              >
                Jan 24th 1997
              </Typography>
            </Stack>

            <Stack
              sx={{
                height: "30px",
                width: "760px",
                gap: "13px",
                flexDirection: "row",
              }}
            >
              <PermPhoneMsgIcon color="action" />
              <Typography color="text.secondary">Emergency contact</Typography>
              <Typography fontWeight={500}>+91 987654322</Typography>
            </Stack>

            <Stack
              sx={{
                height: "30px",
                width: "760px",
                gap: "13px",
                flexDirection: "row",
              }}
            >
              <LocationOnIcon fontSize="small" color="action" />
              <Typography variant="body2" color="text.secondary">
                Address
              </Typography>
              <Typography variant="body2" fontWeight={500}>
                2323 Dancing Dove Lane, Long Island City, NY 11101
              </Typography>
            </Stack>
          </Stack>
          <Stack
            sx={{ display: "flex", flexDirection: "row", marginTop: "50px" }}
          >
            <Button
              variant="outlined"
              sx={{
                color: "#024FAA",
                boxShadow: "0px 1px 2px 0px #1018280D",
                height: "52px",
                width: "156px",
                borderRadius: "40px",
              }}
            >
              Edit Profile
            </Button>
          </Stack>
        </Stack>
      </Box>
      <Stack direction={{ xs: "column", sm: "row" }} spacing={2} mt={4}>
        {cardData.map((card, index) => (
          <Box
            key={index}
            sx={{
              flex: 1,
              border: "1px solid #E4E7EC",
              borderRadius: "12px",
              p: 2,
              minWidth: 250,
              height: "172px",
              width: "367.33px",
            }}
          >
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              mb={1}
            >
              <Typography
                variant="subtitle1"
                sx={{
                  fontWeight: 600,
                  color: "#344054",
                  fontFamily: "Onest",
                }}
              >
                {card.title}
              </Typography>
              {card.editable && (
                <Typography
                  variant="body2"
                  sx={{
                    color: "#024FAA",
                    fontWeight: 500,
                    cursor: "pointer",
                    fontFamily: "Onest",
                  }}
                >
                  Edit
                </Typography>
              )}
            </Stack>

            <Stack spacing={1}>
              {card.items.map((item, i) => (
                <Stack key={i} direction="row" alignItems="center" spacing={1}>
                  {card.useCheckIcon ? (
                    <Box
                      component="img"
                      src={CheckIcon}
                      alt="check"
                      sx={{ width: 16, height: 16 }}
                    />
                  ) : (
                    <Box
                      sx={{
                        width: 6,
                        height: 6,
                        bgcolor: "#667085",
                        borderRadius: "50%",
                      }}
                    />
                  )}
                  <Typography
                    variant="body2"
                    sx={{ color: "#667085", fontFamily: "Onest" }}
                  >
                    {item}
                  </Typography>
                </Stack>
              ))}
            </Stack>
          </Box>
        ))}
      </Stack>
      <Stack sx={{flexDirection:"row", gap:"20px",display:"flex",justifyContent:"center"}}>
      <Box sx={{height:"250px",width:"561px",borderRadius:"8px",padding:"16px",gap:"18px",border:"1px Solid #F2F4F7",backgroundColor:"white",flexDirection:"column",marginTop:"10px"}}>
        <Stack sx={{height:"30px",width:"529px",gap:"18px",flexDirection:"row"}}>
          <Typography sx={{fontFamily:"Onest",fontSize:"20px",fontWeight:600, color:"#344054"}}>Family Member Details</Typography >
          <Typography sx={{fontFamily:"Onest",fontSize:"20px",fontWeight:600,color:"#024FAA",display:"flex",marginLeft:"100px"}}>Add new member</Typography >

        </Stack>
        <Stack sx={{gap:"5px"}}><Box sx={{width:"529px",height:"76px",borderRadius:"8px",padding:"16px",gap:"4px",boxShadow:"2px 2px 15px 0px #0000000D"}}>
          <Stack
                                        sx={{
                                          width: "442px",
                                          height: "44px",
                                          gap: "12px",
                                          display: "flex",
                                          flexDirection: "row",
                                        }}
                                      >
                                        {" "}
                                        <Avatar
                                          sx={{
                                            backgroundColor: "#D1E6FF",
                                            color: "#024FAA",
                                            fontSize: "14px",
                                            fontWeight: 500,
                                            height: "32px",
                                            width: "32px",
                                          }}
                                        >
                                          OR
                                        </Avatar>
                                        <Stack
                                          sx={{
                                            height: "44px",
                                            width: "398px",
                                            display: "flex",
                                            flexDirection: "column",
                                          }}
                                        >
                                          <Typography
                                            sx={{
                                              color: "#101828",
                                              fontFamily: "Onest",
                                              fontWeight: 500,
                                              fontSize: "16x",
                                            }}
                                          >
                                            Olivia Rhye
                                          </Typography>
                                          <Typography
                                            sx={{
                                              color: "#101828",
                                              fontFamily: "Onest",
                                              fontWeight: 400,
                                              fontSize: "14x",
                                            }}
                                          >
                                            21 years
                                          </Typography>
                                        </Stack>
                                        <Stack
                                          sx={{
                                            height: "20px",
                                            width: "67px",
                                            gap: "4px",
                                            display: "flex",
                                            flexDirection: "row",
                                          }}
                                        >
                                          <img
                                            src={Man}
                                            alt="woman"
                                            height="16px"
                                            width="16px"
                                          />
                                          <Typography
                                            sx={{
                                              color: "#667085",
                                              fontFamily: "Onest",
                                              fontWeight: 400,
                                              fontSize: "14x",
                                            }}
                                          >
                                            Male
                                          </Typography>
                                        </Stack>
                                      </Stack>
        </Box>
        <Box sx={{width:"529px",height:"76px",borderRadius:"8px",padding:"16px",gap:"4px",boxShadow:"2px 2px 15px 0px #0000000D"}}>
          <Stack
                                        sx={{
                                          width: "442px",
                                          height: "44px",
                                          gap: "12px",
                                          display: "flex",
                                          flexDirection: "row",
                                        }}
                                      >
                                        {" "}
                                        <Avatar
                                          sx={{
                                            backgroundColor: "#D1E6FF",
                                            color: "#024FAA",
                                            fontSize: "14px",
                                            fontWeight: 500,
                                            height: "32px",
                                            width: "32px",
                                          }}
                                        >
                                          OR
                                        </Avatar>
                                        <Stack
                                          sx={{
                                            height: "44px",
                                            width: "398px",
                                            display: "flex",
                                            flexDirection: "column",
                                          }}
                                        >
                                          <Typography
                                            sx={{
                                              color: "#101828",
                                              fontFamily: "Onest",
                                              fontWeight: 500,
                                              fontSize: "16x",
                                            }}
                                          >
                                            Olivia Rhye
                                          </Typography>
                                          <Typography
                                            sx={{
                                              color: "#101828",
                                              fontFamily: "Onest",
                                              fontWeight: 400,
                                              fontSize: "14x",
                                            }}
                                          >
                                            21 years
                                          </Typography>
                                        </Stack>
                                        <Stack
                                          sx={{
                                            height: "20px",
                                            width: "67px",
                                            gap: "4px",
                                            display: "flex",
                                            flexDirection: "row",
                                          }}
                                        >
                                          <img
                                            src={Woman}
                                            alt="woman"
                                            height="16px"
                                            width="16px"
                                          />
                                          <Typography
                                            sx={{
                                              color: "#667085",
                                              fontFamily: "Onest",
                                              fontWeight: 400,
                                              fontSize: "14x",
                                            }}
                                          >
                                            Male
                                          </Typography>
                                        </Stack>
                                      </Stack>
        </Box>
        </Stack>
      </Box>
      <Box sx={{height:"250px",width:"561px",borderRadius:"8px",padding:"16px",gap:"18px",border:"1px Solid #F2F4F7",backgroundColor:"white",flexDirection:"column",marginTop:"10px"}}>
        <Stack sx={{height:"30px",width:"529px",gap:"18px",flexDirection:"row"}}>
          <Typography sx={{fontFamily:"Onest",fontSize:"20px",fontWeight:600, color:"#344054"}}>Family Member Details</Typography >
          <Typography sx={{fontFamily:"Onest",fontSize:"20px",fontWeight:600,color:"#024FAA",display:"flex",marginLeft:"100px"}}>Add new member</Typography >

        </Stack>
        <Stack sx={{gap:"5px"}}><Box sx={{width:"529px",height:"76px",borderRadius:"8px",padding:"16px",gap:"4px",boxShadow:"2px 2px 15px 0px #0000000D"}}>
          <Stack
                                        sx={{
                                          width: "442px",
                                          height: "44px",
                                          gap: "12px",
                                          display: "flex",
                                          flexDirection: "row",
                                        }}
                                      >
                                        {" "}
                                        <Avatar
                                          sx={{
                                            backgroundColor: "#D1E6FF",
                                            color: "#024FAA",
                                            fontSize: "14px",
                                            fontWeight: 500,
                                            height: "32px",
                                            width: "32px",
                                          }}
                                        >
                                          OR
                                        </Avatar>
                                        <Stack
                                          sx={{
                                            height: "44px",
                                            width: "398px",
                                            display: "flex",
                                            flexDirection: "column",
                                          }}
                                        >
                                          <Typography
                                            sx={{
                                              color: "#101828",
                                              fontFamily: "Onest",
                                              fontWeight: 500,
                                              fontSize: "16x",
                                            }}
                                          >
                                            Olivia Rhye
                                          </Typography>
                                          <Typography
                                            sx={{
                                              color: "#101828",
                                              fontFamily: "Onest",
                                              fontWeight: 400,
                                              fontSize: "14x",
                                            }}
                                          >
                                            21 years
                                          </Typography>
                                        </Stack>
                                        <Stack
                                          sx={{
                                            height: "20px",
                                            width: "67px",
                                            gap: "4px",
                                            display: "flex",
                                            flexDirection: "row",
                                          }}
                                        >
                                          <img
                                            src={Man}
                                            alt="woman"
                                            height="16px"
                                            width="16px"
                                          />
                                          <Typography
                                            sx={{
                                              color: "#667085",
                                              fontFamily: "Onest",
                                              fontWeight: 400,
                                              fontSize: "14x",
                                            }}
                                          >
                                            Male
                                          </Typography>
                                        </Stack>
                                      </Stack>
        </Box>
        <Box sx={{width:"529px",height:"76px",borderRadius:"8px",padding:"16px",gap:"4px",boxShadow:"2px 2px 15px 0px #0000000D"}}>
          <Stack
                                        sx={{
                                          width: "442px",
                                          height: "44px",
                                          gap: "12px",
                                          display: "flex",
                                          flexDirection: "row",
                                        }}
                                      >
                                        {" "}
                                        <Avatar
                                          sx={{
                                            backgroundColor: "#D1E6FF",
                                            color: "#024FAA",
                                            fontSize: "14px",
                                            fontWeight: 500,
                                            height: "32px",
                                            width: "32px",
                                          }}
                                        >
                                          OR
                                        </Avatar>
                                        <Stack
                                          sx={{
                                            height: "44px",
                                            width: "398px",
                                            display: "flex",
                                            flexDirection: "column",
                                          }}
                                        >
                                          <Typography
                                            sx={{
                                              color: "#101828",
                                              fontFamily: "Onest",
                                              fontWeight: 500,
                                              fontSize: "16x",
                                            }}
                                          >
                                            Olivia Rhye
                                          </Typography>
                                          <Typography
                                            sx={{
                                              color: "#101828",
                                              fontFamily: "Onest",
                                              fontWeight: 400,
                                              fontSize: "14x",
                                            }}
                                          >
                                            21 years
                                          </Typography>
                                        </Stack>
                                        <Stack
                                          sx={{
                                            height: "20px",
                                            width: "67px",
                                            gap: "4px",
                                            display: "flex",
                                            flexDirection: "row",
                                          }}
                                        >
                                          <img
                                            src={Woman}
                                            alt="woman"
                                            height="16px"
                                            width="16px"
                                          />
                                          <Typography
                                            sx={{
                                              color: "#667085",
                                              fontFamily: "Onest",
                                              fontWeight: 400,
                                              fontSize: "14x",
                                            }}
                                          >
                                            Male
                                          </Typography>
                                        </Stack>
                                      </Stack>
        </Box>
        </Stack>
      </Box>
        
        
      </Stack>
    </>
  );
}
export default Profile2;
