import React from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  Button,
  Stack,
  Grid,
  Container,
} from "@mui/material";
import Rating from "@mui/material/Rating";
import shieldTick from "../assests/shield-tick.png";
import profile from "../assests/dp.png";
import Information from "./Information"; // Corrected import statement

const HomePage = () => {
  const caregivers = [
    {
      name: "Paula Mora",
      image: profile,
      rate: "$30-40/hr",
      experience: "5 yrs exp",
      location: "Mumbai, India",
      availability: "Full Time Available Caregiver",
      verified: false,
      rating: 4.5,
    },
    {
      name: "Paula Mora",
      image: profile,
      rate: "$30-40/hr",
      experience: "5 yrs exp",
      location: "Mumbai, India",
      availability: "Full Time Available Caregiver",
      verified: true,
      rating: 4.5,
    },
    {
      name: "Paula Mora",
      image: profile,
      rate: "$30-40/hr",
      experience: "5 yrs exp",
      location: "Mumbai, India",
      availability: "Full Time Available Caregiver",
      verified: true,
      rating: 4.5,
    },
    {
      name: "Paula Mora",
      image: profile,
      rate: "$30-40/hr",
      experience: "5 yrs exp",
      location: "Mumbai, India",
      availability: "Full Time Available Caregiver",
      verified: true,
      rating: 4.5,
    },
    {
      name: "Paula Mora",
      image: profile,
      rate: "$30-40/hr",
      experience: "5 yrs exp",
      location: "Mumbai, India",
      availability: "Full Time Available Caregiver",
      verified: true,
      rating: 4.5,
    },
    {
      name: "Paula Mora",
      image: profile,
      rate: "$30-40/hr",
      experience: "5 yrs exp",
      location: "Mumbai, India",
      availability: "Full Time Available Caregiver",
      verified: true,
      rating: 4.5,
    },
    {
      name: "Paula Mora",
      image: profile,
      rate: "$30-40/hr",
      experience: "5 yrs exp",
      location: "Mumbai, India",
      availability: "Full Time Available Caregiver",
      verified: true,
      rating: 4.5,
    },
  ];

  return (
    // Use maxWidth="false" to allow Container to take full width
    <Container maxWidth={false} disableGutters sx={{ p: 2 }}>
      <Grid container spacing={3} sx={{ width: "100%" }}>
        {/* Left Side - Information Component with reduced width */}
        <Grid item xs={12} md={2} lg={2}>
          <Information />
        </Grid>

        {/* Right Side - Caregivers List with increased width */}
        <Grid item xs={12} md={10} lg={10}>
          <Box
            sx={{
              boxShadow: 4,
              backgroundColor: "#f9f9f9",
              borderRadius: 2,
              p: 2,
              height: "800px", // Match the height of Information component
              display: "flex",
              flexDirection: "column",
              width: "100%",
            }}
          >
            <Typography variant="h6" sx={{ mb: 2 }}>
              Caregiver
            </Typography>

            {/* Scrollable container for cards */}
            <Box
              sx={{
                overflowY: "auto",
                flex: 1,
                width: "100%",
                "&::-webkit-scrollbar": {
                  width: "8px",
                },
                "&::-webkit-scrollbar-track": {
                  background: "#f1f1f1",
                  borderRadius: "10px",
                },
                "&::-webkit-scrollbar-thumb": {
                  background: "#888",
                  borderRadius: "10px",
                },
                "&::-webkit-scrollbar-thumb:hover": {
                  background: "#555",
                },
              }}
            >
              {caregivers.map((caregiver, index) => (
                <Card
                  key={index}
                  sx={{ mb: 2, borderRadius: 2, boxShadow: 3, width: "100%" }}
                >
                  <CardContent>
                    {/* Main Container with improved spacing */}
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        width: "100%",
                        px: 2, // Add horizontal padding
                      }}
                    >
                      {/* Left Side - Caregiver Image & Details */}
                      <Box
                        sx={{ display: "flex", alignItems: "center", flex: 1 }}
                      >
                        <img
                          src={caregiver.image}
                          alt={caregiver.name}
                          style={{
                            width: 50,
                            height: 50,
                            borderRadius: "50%",
                            objectFit: "cover",
                            marginRight: 16,
                          }}
                        />
                        <Box>
                          <Typography variant="subtitle1" fontWeight="bold">
                            {caregiver.name}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            {caregiver.location}
                          </Typography>
                        </Box>
                      </Box>

                      {/* Right Side - Rate, Experience, Book Button */}
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "flex-end",
                          minWidth: "150px",
                        }}
                      >
                        {/* Rate & Experience */}
                        <Typography variant="body2" color="text.secondary">
                          {caregiver.rate} - {caregiver.experience}
                        </Typography>

                        {/* Book Button */}
                        <Button
                          variant="contained"
                          color="primary"
                          sx={{
                            mt: 1,
                            borderRadius: 40,
                            backgroundColor: "#003580",
                            "&:hover": { backgroundColor: "#002766" },
                            width: "100px", // Fixed width for the button
                          }}
                        >
                          Book
                        </Button>
                      </Box>
                    </Box>

                    {/* Rating Component */}
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        mt: 1,
                        px: 2,
                      }}
                    >
                      <Rating
                        value={caregiver.rating}
                        precision={0.5}
                        readOnly
                      />
                      <Typography variant="body2" sx={{ ml: 1 }}>
                        ({caregiver.rating})
                      </Typography>
                    </Box>

                    {/* Availability & Verified Badge in Same Line */}
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        mt: 1,
                        justifyContent: "space-between",
                        width: "100%",
                        px: 2, // Add horizontal padding
                      }}
                    >
                      {/* Availability */}
                      <Typography
                        variant="body2"
                        sx={{
                          color: "text.primary",
                          px: 1,
                          borderRadius: 1,
                        }}
                      >
                        {caregiver.availability}
                      </Typography>

                      {/* Verification Badge  */}
                      {caregiver.verified && (
                        <Box sx={{ display: "flex", alignItems: "center" }}>
                          <img
                            src={shieldTick}
                            alt="Verified"
                            style={{ width: 16, height: 16, marginRight: 4 }}
                          />
                          <Typography variant="caption">
                            Background check done
                          </Typography>
                        </Box>
                      )}
                    </Box>
                  </CardContent>
                </Card>
              ))}
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default HomePage;
