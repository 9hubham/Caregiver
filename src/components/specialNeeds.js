import {
  Box,
  Typography,
  Stack,
  TextField,
  Button,
  ListItem,
  List,
} from "@mui/material";
import Trash from "../assests/trash.png";
import * as React from "react";
import AddIcon from "@mui/icons-material/Add";

function SpecialNeeds() {
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
          Special needs
        </Typography>
      </Stack>

      <Stack
        sx={{ height: "330px", width: "468px", padding: "24px", gap: "24px" }}
      >
        <List
          sx={{
            width: "420px",
            display: "flex",
            flexDirection: "column",
            gap: "12px",
          }}
        >
          {/* Item 1 */}
          <ListItem
            sx={{
              display: "flex",
              justifyContent: "space-between",
              padding: 0,
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <Typography
                sx={{
                  fontWeight: 600,
                  fontSize: "16px",
                  color: "#344054",
                  fontFamily: "Onest",
                }}
              >
                • Bathing
              </Typography>
            </Box>
            <Box>
              <img src={Trash} alt="trash icon" height="16px" width="16px" />
            </Box>
          </ListItem>

          {/* Item 2 */}
          <ListItem
            sx={{
              display: "flex",
              justifyContent: "space-between",
              padding: 0,
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <Typography
                sx={{
                  fontWeight: 600,
                  fontSize: "16px",
                  color: "#344054",
                  fontFamily: "Onest",
                }}
              >
                • Walk on morning
              </Typography>
            </Box>
            <Box>
              <img src={Trash} alt="trash icon" height="16px" width="16px" />
            </Box>
          </ListItem>

          {/* Item 3 */}
          <ListItem
            sx={{
              display: "flex",
              justifyContent: "space-between",
              padding: 0,
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <Typography
                sx={{
                  fontWeight: 600,
                  fontSize: "16px",
                  color: "#344054",
                  fontFamily: "Onest",
                }}
              >
                • Personal care
              </Typography>
            </Box>
            <Box>
              <img src={Trash} alt="trash icon" height="16px" width="16px" />
            </Box>
          </ListItem>
        </List>
        <Stack
          sx={{
            gap: "16px",
            height: "70px",
            width: "420px",
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-end",
          }}
        >
          <Stack sx={{ width: "360px", gap: "18px" }}>
            <Typography
              sx={{
                fontFamily: "onest",
                fontWeight: 500,
                fontSize: "14px",
                color: "#475467",
              }}
            >
              Add condition
            </Typography>
            <TextField
              Variant="Outlined"
              placeholder="Enter condition"
              sx={{
                borderRadius: "30px",
                "& .MuiOutlinedInput-root": {
                  border: "1px",
                  borderRadius: "12px",
                  height: "44px",
                  width: "360px",
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
          <Box
            sx={{
              height: "44px",
              width: "44px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              border: "1px solid #F2F4F7",
              boxShadow: "2px 2px 15px 0px #0000000D",
              borderRadius: "12px",
              cursor: "pointer",
              marginTop: "24px",
            }}
          >
            <AddIcon sx={{ fontSize: 20, color: "#344054" }} />
          </Box>
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
    </>
  );
}

export default SpecialNeeds;
