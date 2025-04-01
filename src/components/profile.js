import "@fontsource-variable/onest";
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
//import Lang from "../assests/language-square@2x.png";
import Down from "../assests/chevron-down.png";
import Search from "../assests/search 1.png";
import Dp from "../assests/dp.png";
import Tick from "../assests/shield-tick.png";

function Profile() {
  //   const [lang, setLang] = React.useState("");
  //   const handleChange = (event) => {
  //     setLang(event.target.value);
  //   };
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
          height: "1288px",
          gap: "16px",
          border: "1.5px",
          borderRadius: "12px",
          borderColor: "#FC9155",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",

        }}
      >
        <Stack
          sx={{
            height: "176px",
            width: "1066px",
            backgroundColor: "white",
            borderRadius: "8px",
            borderColor: "#F2F4F7",
            gap: "8px",
            padding: "16px",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Box sx={{ height: "145px", width: "145px", borderRadius: "20px" }}>
            <img src={Dp} alt="Profile" height="144px" width="144px" />
          </Box>
          <Stack sx={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            <Typography
              sx={{
                fontSize: "14px",
                fontWeight: 400,
                fontFamily: "Onest",
                color: "#101828",
              }}
            >
              PART-TIME
            </Typography>
            <Typography
              sx={{
                fontSize: "20px",
                fontWeight: 700,
                fontFamily: "Onest",
                color: "#101828",
              }}
            >
              Paula Mora
            </Typography>
            <Typography>STAR</Typography>
            <Typography
              sx={{
                fontSize: "14px",
                fontWeight: 500,
                fontFamily: "Onest",
                color: "#667085",
                display: "flex",
                flexDirection: "row",
              }}
            >
              <img src={Tick} alt="Shield Tick" height="24px" width="24px" />
              Background check done
            </Typography>
          </Stack>
          <Button
            variant="contained"
            type="submit"
            sx={{
              color: "#024FAA",
              borderRadius: "40px",
              paddingtop: "16px",
              paddingBottom: "16px",
              paddingRight: "42px",
              paddingLeft: "42px",
              height: "52px",
              width: "157px",
              gap: "8px",
              display: "flex",
            }}
          >
            <Typography
              sx={{
                fontSize: "14px",
                fontWeight: 500,
                color: "#FFFFFF",
                fontFamily: "Onest,sans-serif",
                textTransform: "none",
              }}
            >
              Book Paula
            </Typography>
          </Button>
        </Stack>
        <Stack sx={{height:"1066",width:"196"}}>

        </Stack>
      </Box>
    </>
  );
}

export default Profile;
