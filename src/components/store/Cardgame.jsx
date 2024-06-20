import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea, CardActions, Box, Typography } from "@mui/material";
import { Link } from "react-router-dom"; // Assuming you're using react-router-dom for routing

export default function Cardgame(props) {
  return (
    <Card
      sx={{
        width: "100%", // Full width by default
        maxWidth: "141px", // Maximum width for larger screens
        backgroundColor: "#DBDBDB",
        borderRadius: "20px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        textAlign: "center",
        padding: "10px", // Adding padding to the card content
        margin: "auto", // Center align the card within its container
        // Adjust width for mobile view (xs breakpoint)
        "@media (min-width: 600px)": {
          maxWidth: "201px", // Increase width for mobile view
        },
      }}
    >
      <CardActionArea component={Link} to={props.link}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
          }}
        >
          <CardMedia
            component="img"
            height="141"
            width="141"
            image={props.img}
            alt="game"
            sx={{
              borderRadius: "20px",
              maxWidth: "100%",
              objectFit: "cover", // Use cover to fill the space and maintain aspect ratio
              "@media (min-width: 600px)": {
                height: "201px",
              },
            }}
          />
        </Box>
      </CardActionArea>
      <CardActions
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "8px",
        }}
      >
        <Typography
          variant="subtitle1"
          component="h4"
          sx={{
            fontSize: "11px", // Adjust font size for smaller screens
            fontWeight: "600",
            "@media (min-width: 600px)": {
              fontSize: "15px",
            },
          }}
        >
          {props.gamename}
        </Typography>
      </CardActions>
    </Card>
  );
}
