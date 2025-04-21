import {
  Box,
  Typography,
  Stack,
  TextField,
  Button
} from "@mui/material";
import * as React from "react";
function changePassword() {
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
          Change Password
        </Typography>
      </Stack>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Stack sx={{ gap: "6px" }}>
          <Typography
            sx={{
              fontFamily: "onest",
              fontWeight: 500,
              fontSize: "14px",
              color: "_Gray/700",
            }}
          >
            Old Password
          </Typography>
          <TextField
            Variant="Outlined"
            placeholder="Enter Password"
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
          />
        </Stack>
        <Stack sx={{ gap: "6px" }}>
          <Typography
            sx={{
              fontFamily: "onest",
              fontWeight: 500,
              fontSize: "14px",
              color: "_Gray/700",
            }}
          >
            New Password
          </Typography>
          <TextField
            Variant="Outlined"
            placeholder="Enter Password"
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
          />
        </Stack>
        <Stack sx={{ gap: "6px" }}>
          <Typography
            sx={{
              fontFamily: "onest",
              fontWeight: 500,
              fontSize: "14px",
              color: "_Gray/700",
            }}
          >
            Confirm Password
          </Typography>
          <TextField
            Variant="Outlined"
            placeholder="Enter Password"
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
          />
        </Stack>
        <Stack sx={{ display: "flex", flexDirection: "row", gap: "14px" }}>
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
      </Box>
    </>
  );
}
export default changePassword;
