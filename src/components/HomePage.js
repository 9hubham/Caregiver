
import shieldTick from "../assests/shield-tick.png"
import profile from "../assests/dp.png"


import React from "react";
import { Box, Typography, Card, CardContent, Button, Stack } from "@mui/material";
import Rating from '@mui/material/Rating';


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
      rating: 4.5
    },
    {
      name: "Paula Mora",
      image: profile,
      rate: "$30-40/hr",
      experience: "5 yrs exp",
      location: "Mumbai, India",
      availability: "Full Time Available Caregiver",
      verified: true,
      rating: 4.5
    },
    {
      name: "Paula Mora",
      image: profile,
      rate: "$30-40/hr",
      experience: "5 yrs exp",
      location: "Mumbai, India",
      availability: "Full Time Available Caregiver",
      verified: true,
      rating: 4.5
    },
    {
      name: "Paula Mora",
      image: profile,
      rate: "$30-40/hr",
      experience: "5 yrs exp",
      location: "Mumbai, India",
      availability: "Full Time Available Caregiver",
      verified: true,
      rating: 4.5
    },
    {
      name: "Paula Mora",
      image: profile,
      rate: "$30-40/hr",
      experience: "5 yrs exp",
      location: "Mumbai, India",
      availability: "Full Time Available Caregiver",
      verified: true,
      rating: 4.5
    },
    {
      name: "Paula Mora",
      image: profile,
      rate: "$30-40/hr",
      experience: "5 yrs exp",
      location: "Mumbai, India",
      availability: "Full Time Available Caregiver",
      verified: true,
      rating: 4.5
    },
    {
      name: "Paula Mora",
      image: profile,
      rate: "$30-40/hr",
      experience: "5 yrs exp",
      location: "Mumbai, India",
      availability: "Full Time Available Caregiver",
      verified: true,
      rating: 4.5
    }
 
  ];

  return (
        

    <Stack sx={{display:"flex",alignItems:"flex-end"}}>
      <Box sx={{ width:673, marginLeft:75,
      boxShadow: 4,  // Add a soft shadow for visibility
    backgroundColor: "#f9f9f9" // Light background color

     }}>
    
      

      <Typography variant="h6" sx={{ mb: 2 }}>Caregiver</Typography>

      {caregivers.map((caregiver, index) =>(
        <Card key={index} sx={{ mb: 2, borderRadius: 2, boxShadow: 3 }}>
          <CardContent>
            {/* Main Container (Left: Image & Details, Right: Extra Info & Book Button) */}
            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              
              {/* Left Side - Caregiver Image & Details */}
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <img 
                  src={caregiver.image} 
                  alt={caregiver.name} 
                  style={{
                    width: 50, 
                    height: 50, 
                    borderRadius: "50%", 
                    objectFit: "cover", 
                    marginRight: 16
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
              <Box sx={{ display: "flex", flexDirection: "column", alignItems: "flex-end" }}>
                {/* Rate & Experience */}
                <Typography variant="body2" color="text.secondary">
                  {caregiver.rate} - {caregiver.experience}
                </Typography>

                {/* Book Button */}
                <Button variant="contained" color="primary" sx={{ mt: 1, borderRadius:40,  backgroundColor: "#003580", 
                    "&:hover": { backgroundColor: "#002766" }   }}>
                  Book
                </Button>
              </Box>
            </Box>

            {/* Rating Component */}
            <Box sx={{ display: "flex", alignItems: "center", mt: 1 }}>
              <Rating value={caregiver.rating} precision={0.5} readOnly />
              <Typography variant="body2" sx={{ ml: 1 }}>
                ({caregiver.rating})
              </Typography>
            </Box>

            {/* Availability & Verified Badge in Same Line */}
            <Box sx={{ display: "flex", alignItems: "center", mt: 1, }}>
              {/* Availability */}
              <Typography variant="body2" sx={{ 
                //bgcolor: "primary.light", 
                color: "text.primary",

                px: 1, 
                borderRadius: 1
              }}>
                {caregiver.availability}
              </Typography>

               {/* Verification Badge  */}
              {caregiver.verified && (
                <Box sx={{ display: "flex", alignItems: "center",ml:35 }}>
                  <img
                    src={shieldTick}
                    alt="Verified"
                    style={{ width: 16, height: 16, marginRight: 4 }}
                  />
                  <Typography variant="caption">Background check done</Typography>
                </Box>
              )}
            </Box>

          </CardContent>
        </Card>
      ))}
    </Box>
   
    </Stack>

     
     
     
  );
};

   


export default HomePage;
