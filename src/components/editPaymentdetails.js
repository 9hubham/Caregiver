import {
  Box,
  Typography,
  Stack,
  TextField,
  InputAdornment,
  FormControlLabel,Switch,Button
} from "@mui/material";
import * as React from "react";
import Image from "../assests/image.png";
import "@fontsource/onest";
import Calender from "../assests/calendar 1.png";
import Card from "../assests/card.png";
import { useNavigate } from "react-router-dom";


function EditPaymentdetails() {
    const navigate = useNavigate();
  return (
    <>
      <Stack
        sx={{
          gap: "10px",
          paddingTop: "16px",
          paddingRight: "24px",
          paddingBottom: "16px",
          paddingLeft: "24px",
          height: "116px",
          width: "500px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "flex-start",
        }}
      >
        <Typography
          sx={{
            fontSize: "36px",
            fontWeight: 600,
            color: "#101828",
            fontFamily: "onest",
          }}
        >
          Edit Payment details
        </Typography>
      </Stack>
      <Stack sx={{width:"468px",height:"426px",padding:"26px",gap:"24px"}}>
        
      <Stack sx={{width:"420px",height:"378px",gap:"20px"}}>

      <Stack sx={{width:"420px",height:"306px",gap:"16px"}}>
      <Stack sx={{ gap: "6px" }}>
        <Typography
          sx={{
            fontFamily: "onest",
            fontWeight: 500,
            fontSize: "14px",
            color: "#344054",
          }}
        >
          Name on card
        </Typography>
        <TextField
          Variant="Outlined"
          placeholder="Parth Patel"
          sx={{
            borderRadius: "30px",
            "& .MuiOutlinedInput-root": {
              border: "1px",
              borderRadius: "12px",
              height: "44px",
              width: "420px",
              gap: "8px",
              paddingTop: "10px",
              paddingBottom: "10px",
              paddingLeft: "14px",
              paddingRight: "14px",
              borderColor: "#475467",
            },
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <img src={Image} alt="lock" height="20px" width="20px" />
              </InputAdornment>
            ),
          }}
        />
      </Stack>
      <Stack sx={{ gap: "6px" }}>
        <Typography
          sx={{
            fontFamily: "onest",
            fontWeight: 500,
            fontSize: "14px",
            color: "#475467",
          }}
        >
          Card Number
        </Typography>
        <TextField
          Variant="Outlined"
          placeholder="1234-1234-1234-1234"
          sx={{
            borderRadius: "30px",
            "& .MuiOutlinedInput-root": {
              border: "1px",
              borderRadius: "12px",
              height: "44px",
              width: "420px",
              gap: "8px",
              paddingTop: "10px",
              paddingBottom: "10px",
              paddingLeft: "14px",
              paddingRight: "14px",
              borderColor: "#475467",
            },
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <img src={Card} alt="lock" height="20px" width="20px" />
              </InputAdornment>
            ),
          }}
        />
      </Stack>
      <Stack sx={{height:"70px",width:"420px",gap:"16px",display:"flex",flexDirection:"row"}}>
      <Stack sx={{ gap: "6px",height:"70px",width:"304px" }}>
        <Typography
          sx={{
            fontFamily: "onest",
            fontWeight: 500,
            fontSize: "14px",
            color: "_Gray/700",
          }}
        >
          Expiry Date
        </Typography>
        <TextField
          Variant="Outlined"
          placeholder="23/25"
          sx={{
            borderRadius: "30px",
            "& .MuiOutlinedInput-root": {
              border: "1px Solid #475467",
              borderRadius: "12px",
              height: "44px",
              width: "304px",
              gap: "8px",
              paddingTop: "10px",
              paddingBottom: "10px",
              paddingLeft: "14px",
              paddingRight: "14px",
              boxShadow:"0px 1px 2px 0px #1018280D 0.5px "
            },
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <img src={Calender} alt="lock" height="20px" width="20px" />
              </InputAdornment>
            ),
          }}
        />
      </Stack>
      <Stack sx={{ gap: "6px",height:"70px",width:"100px" }}>
        <Typography
          sx={{
            fontFamily: "onest",
            fontWeight: 500,
            fontSize: "14px",
            color: "#344054",
          }}
        >
          CVV
        </Typography>
        <TextField
          Variant="Outlined"
          placeholder="XXX"
          sx={{
            borderRadius: "30px",
            "& .MuiOutlinedInput-root": {
              border: "1px Solid #475467",
              borderRadius: "12px",
              height: "44px",
              width: "100px",
              gap: "8px",
              paddingTop: "10px",
              paddingBottom: "10px",
              paddingLeft: "14px",
              paddingRight: "14px",
              boxShadow:"0px 1px 2px 0px #1018280D 0.5px "
            },
          }}
          
        />
      </Stack>
      </Stack>
      <Stack
        sx={{
          height: "44px",
          width: "420px",
          borderBottom: "1px solid #D0D5DD",
          paddingTop: "12px",
          paddingBottom: "12px",
          gap: "12px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <FormControlLabel
          control={
            <Switch
              defaultChecked
              onClick={() => {
                navigate("/target"); // Replace with your actual route
              }}
            />
          }
          label={
            <Typography
              sx={{
                fontFamily: "onest",
                fontSize: "14px",
                fontWeight: 500,
                color: "#344054",
              }}
            >
              Set as primary card
            </Typography>
          }
        />
      </Stack>

      </Stack>
      <Stack
          sx={{
            display: "flex",
            flexDirection: "row",
            gap: "14px",
            height: "52px",
            width: "420px",
          }}
        >
          <Button
            variant="outlined"
            sx={{
              color: "#024FAA",
              borderRadius: "40px",
              paddingtop: "16px",
              paddingBottom: "16px",
              paddingRight: "42px",
              paddingLeft: "42px",
              height: "52px",
              width: "203px",
              gap: "8px",
            }}
          >
            <Typography
              sx={{
                fontSize: "14px",
                fontWeight: 500,
                color: "#024FAA",
                fontFamily: "Onest,sans-serif",
                textTransform: "none",
              }}
            >
              Cancel
            </Typography>
          </Button>
          <Button
            variant="contained"
            sx={{
              color: "#024FAA",
              borderRadius: "40px",
              paddingtop: "16px",
              paddingBottom: "16px",
              paddingRight: "42px",
              paddingLeft: "42px",
              height: "52px",
              width: "203px",
              gap: "8px",
            }}
          >
            <Typography
              sx={{
                fontSize: "16px",
                fontWeight: 600,
                color: "#FFFFFF",
                fontFamily: "Onest,sans-serif",
                textTransform: "none",
              }}
            >
              Save
            </Typography>
          </Button>
        </Stack>
      </Stack>
      </Stack>
    </>
  );
}
export default EditPaymentdetails;
