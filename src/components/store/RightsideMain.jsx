import React from "react";
import { Typography } from "@mui/material";

const RightsideMain = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh", // Ensures full height of the viewport
        textAlign: "center",
      }}
    >
      <picture>
        <img
          src="/images/khelohublogo.png"
          alt="Khelohub Logo"
          width="300"
          height="338"
        />
      </picture>

      {/* Text With color Start */}
      <Typography
        variant="h4"
        component="h4"
        sx={{
          fontSize: "2em",
          fontWeight: "bolder",
          textTransform: "uppercase",
          WebkitTextFillColor: "transparent",
          background:
            "-webkit-linear-gradient(180deg, #f47201, #f37100, #2bac05)",
          WebkitBackgroundClip: "text",
          marginTop: "20px",
        }}
      >
        STARADDA LUDO WINS = REAL CASH IN!
      </Typography>
      {/* Text With color End */}

      {/* Text about better experience Start */}
      <Typography
        variant="h4"
        component="h4"
        sx={{
          color: "#1A1A1A",
          fontFamily: "Poppins, sans-serif",
          fontSize: "1.3em",
          fontWeight: "500",
          lineHeight: "32px",
          textAlign: "center",
          marginTop: "20px",
        }}
      >
        For the best experience, open&nbsp;
        <a
          href="https://staradda.in/"
          style={{
            color: "#1284FE",
            fontWeight: "500",
            textDecoration: "none",
          }}
        >
          staradda.in
        </a>
        &nbsp;on&nbsp;
        <img
          src="/images/chrome.png"
          alt="Chrome"
          style={{
            height: "25px",
            marginTop: "4px",
            width: "25px",
            verticalAlign: "middle",
          }}
        />
        &nbsp;Chrome mobile
      </Typography>
      {/* Text about better experience End */}
    </div>
  );
};

export default RightsideMain;
