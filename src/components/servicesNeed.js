import {
  Box,
  Typography,
  Stack,
  Button,
  
  FormControlLabel,
  Checkbox,
} from "@mui/material";

function ServicesNeed() {
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
          Service I Need
        </Typography>
      </Stack>
      <Stack sx={{ height: "24px", width: "452px" }}>
        <FormControlLabel
          control={<Checkbox />}
          label="Personals care"
          sx={{ color: "#344054" }}
        />
        <FormControlLabel
          control={<Checkbox />}
          label="Domestic Assistance"
          sx={{ color: "#344054" }}
        />
        <FormControlLabel
          control={<Checkbox />}
          label="Social Support & Community Participation"
          sx={{ color: "#344054" }}
        />
        <FormControlLabel
          control={<Checkbox />}
          label="Specialist Care"
          sx={{ color: "#344054" }}
        />
        <FormControlLabel
          control={<Checkbox />}
          label="Out and About Transport"
          sx={{ color: "#344054" }}
        />
        <FormControlLabel
          control={<Checkbox />}
          label="Relief Respite Care"
          sx={{ color: "#344054" }}
        />
        <FormControlLabel
          control={<Checkbox />}
          label="Coaching & Counselling"
          sx={{ color: "#344054" }}
        />
        <FormControlLabel
          control={<Checkbox />}
          label="Disability Products"
          sx={{ color: "#344054" }}
        />
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
export default ServicesNeed;
