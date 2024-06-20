import React from "react";
import { Box, Typography, Divider } from "@mui/material";
import Linkify from "react-linkify";

const Fotterboxtext = (props) => {
  return (
    <Box
      component="section"
      sx={{ p: 2, border: "1px solid white", backgroundColor: "#FFFFFF" }}
    >
      <Divider
        sx={{ fontSize: "1em", fontWeight: "700", color: "#393939", mb: 1 }}
      >
        {props.heading}
      </Divider>
      <Typography
        variant="body1"
        component="div" // Use div instead of h6 for multiline content
        sx={{
          fontSize: ".8em",
          fontWeight: "400",
          color: "#3e3e3e",
          "& a": {
            // Style for links inside Typography
            color: "blue",
            textDecoration: "underline",
          },
        }}
      >
        <Linkify
          componentDecorator={(decoratedHref, decoratedText, key) => (
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={decoratedHref}
              key={key}
            >
              {decoratedText}
            </a>
          )}
        >
          {props.content}
        </Linkify>
      </Typography>
    </Box>
  );
};

export default Fotterboxtext;
