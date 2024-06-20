import React from 'react'
import Navone from "./store/Navone";
import RightsideMain from "./store/RightsideMain";
import { Box, Typography, Divider, TextField, Button } from "@mui/material";

const Login = () => {
  return (
    <div className="container">
      <div className="leftContainer">
        <Box
          sx={{
            width: "86%", // Adjust the width as needed
            margin: "auto", // Center the box horizontally
            padding: "20px",
            border: "1px solid black", // Optional: adds a border to the box
            borderRadius: "10px",
            backgroundColor: "#f9f9f9", // Optional: background color
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Optional: adds a subtle shadow
            mt: "90px", // Adds margin top
          }}
        >
          <Navone />
          <Typography
            variant="h5"
            component="div"
            sx={{
              textAlign: "center",
              fontWeight: "600",
              mb: 2,
              fontSize: "20px",
            }}
          >
            Sign In
          </Typography>
          <Divider
            style={{
              width: "100%",
              borderColor: "black",
            }}
            sx={{ mb: 3 }}
          />

          <Typography
            variant="body1"
            component="div"
            sx={{
              fontWeight: "500",
              mb: 1,
              fontSize: "14px",
              color: "#212529",
            }}
          >
            Mobile Number
          </Typography>
          <TextField
            fullWidth
            variant="outlined"
            placeholder="Enter your mobile number"
            sx={{ mb: 2 }}
          />
          <Typography
            variant="body2"
            sx={{ mb: 3, textAlign: "center", fontSize: "16px" }}
          >
            By Continuing, you agree to our{" "}
            <a
              href="http://localhost:3000/Homepage/ludoClassicManual"
              style={{ color: "blue", textDecoration: "none" }}
            >
              Legal Terms
            </a>{" "}
            and you are 18 years or older.
          </Typography>
          <Button
            fullWidth
            variant="contained"
            sx={{ fontWeight: "600", backgroundColor: "#0DB25B" }}
          >
            Get OTP
          </Button>
        </Box>
      </div>
      <div className="rightContainer">
        <RightsideMain />
      </div>
    </div>
  );
}

export default Login