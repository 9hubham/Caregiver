import CloseIcon from "@mui/icons-material/Close";
import "@fontsource-variable/onest";
import React from "react";
import { Box, Stack, Typography, IconButton, Button } from "@mui/material";
import "@fontsource-variable/onest";

// Move DetailCard definition OUTSIDE and ABOVE main component

const FamilyMemberCard = () => {
  return (
    <Box
      width="494px"
      height="500px"
      bgcolor="white"
      fontFamily="OnestVariable"
      gap="32px"
      borderRadius="8px"
      paddingTop="10px"
      paddingLeft="20px"
      paddingright="20px"
      paddingBottom="10px"
      border="1px #F2F4F7"
    >
      {/* Stack 1: Title + Close */}
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        gap="32px"
      >
        <Typography variant="h6" fontWeight="600">
          Family Member Details
        </Typography>
        <IconButton>
          <CloseIcon />
        </IconButton>
      </Stack>

      {/* Stack 2: Details - Name, Age, Gender, DOB */}
      <Stack sx={{height:"180px",width:"468px",gap:"32px",marginBottom:"50px",marginTop:"20px"}}> 
      <Stack
        sx={{
          display: "flex",
          flexDirection: "row",
          gap: "32px",
          height: "74px",
          width: "468px",
        }}
      >
        <Box
          sx={{
            padding: "16px",
            borderRadius: "8px",
            boxShadow: "2px 2px 15px 0px #0000000D",
            width: "218px",
            height: "74px",
            border: "1px #F2F4F7",
            paddingTop: "10px",
            paddingLeft: "20px",
            paddingright: "20px",
            paddingBottom: "10px",
            gap: "4px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
          }}
        >
          <Typography
            sx={{
              fontSize: "14px",
              color: "#101828",
              fontWeight: 400,
              fontFamily: "Onest",
            }}
          >
            Name
          </Typography>
          <Typography
            sx={{
              fontSize: "20px",
              color: "#101828",
              fontWeight: 700,
              fontFamily: "Onest",
            }}
          >
            kane William
          </Typography>
        </Box>
        <Box
          sx={{
            padding: "16px",
            borderRadius: "8px",
            boxShadow: "2px 2px 15px 0px #0000000D",
            width: "218px",
            height: "74px",
            border: "1px #F2F4F7",
            paddingTop: "10px",
            paddingLeft: "20px",
            paddingright: "20px",
            paddingBottom: "10px",
            gap: "4px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
          }}
        >
          <Typography
            sx={{
              fontSize: "14px",
              color: "#101828",
              fontWeight: 400,
              fontFamily: "Onest",
            }}
          >
            Name
          </Typography>
          <Typography
            sx={{
              fontSize: "20px",
              color: "#101828",
              fontWeight: 700,
              fontFamily: "Onest",
            }}
          >
            kane William
          </Typography>
        </Box>
      </Stack>
      <Stack
        sx={{
          display: "flex",
          flexDirection: "row",
          gap: "32px",
          height: "74px",
          width: "468px",
        }}
      >
        <Box
          sx={{
            padding: "16px",
            borderRadius: "8px",
            boxShadow: "2px 2px 15px 0px #0000000D",
            width: "218px",
            height: "74px",
            border: "1px #F2F4F7",
            paddingTop: "10px",
            paddingLeft: "20px",
            paddingright: "20px",
            paddingBottom: "10px",
            gap: "4px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
          }}
        >
          <Typography
            sx={{
              fontSize: "14px",
              color: "#101828",
              fontWeight: 400,
              fontFamily: "Onest",
            }}
          >
            Name
          </Typography>
          <Typography
            sx={{
              fontSize: "20px",
              color: "#101828",
              fontWeight: 700,
              fontFamily: "Onest",
            }}
          >
            kane William
          </Typography>
        </Box>
        <Box
          sx={{
            padding: "16px",
            borderRadius: "8px",
            boxShadow: "2px 2px 15px 0px #0000000D",
            width: "218px",
            height: "74px",
            border: "1px #F2F4F7",
            paddingTop: "10px",
            paddingLeft: "20px",
            paddingright: "20px",
            paddingBottom: "10px",
            gap: "4px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
          }}
        >
          <Typography
            sx={{
              fontSize: "14px",
              color: "#101828",
              fontWeight: 400,
              fontFamily: "Onest",
            }}
          >
            Name
          </Typography>
          <Typography
            sx={{
              fontSize: "20px",
              color: "#101828",
              fontWeight: 700,
              fontFamily: "Onest",
            }}
          >
            kane William
          </Typography>
        </Box>
      </Stack>
      </Stack>

      {/* Stack 3: Address */}
      <Stack >
        <Box
          sx={{
            padding: "16px",
            borderRadius: "8px",
            boxShadow: "2px 2px 15px 0px rgba(0,0,0,0.05)",
            width: "468px",
            height: "104px",
            border: "1px #F2F4F7",
            paddingTop: "10px",
            paddingLeft: "20px",
            paddingright: "20px",
            paddingBottom: "10px",
            gap: "4px",
            marginBottom:"20px",
          }}
        >
          <Typography
            sx={{
              fontSize: "14px",
              color: "#101828",
              fontWeight: 400,
              fontFamily: "Onest",
            }}
          >
            Address
          </Typography>
          <Typography
            sx={{
              fontSize: "20px",
              color: "#101828",
              fontWeight: 700,
              fontFamily: "Onest",
            }}
          >
            31, Xavir Colony, Akhbar nagar, Ahemdabad, Gujarat-382732
          </Typography>
        </Box>
      </Stack>

      {/* Stack 4: Action Buttons */}
      <Stack direction="row" justifyContent="space-between">
        <Button
          variant="outlined"
          color="error"
          style={{
            width: "48%",
            borderRadius: "24px",
            padding: "10px 0",
            fontWeight: "600",
          }}
        >
          Delete
        </Button>
        <Button
          variant="contained"
          style={{
            backgroundColor: "#0047FF",
            width: "48%",
            borderRadius: "24px",
            padding: "10px 0",
            fontWeight: "600",
          }}
        >
          Edit
        </Button>
      </Stack>
    </Box>
  );
};

export default FamilyMemberCard;
