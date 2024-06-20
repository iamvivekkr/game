import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const Navone = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="fixed"
        style={{ backgroundColor: "#FFFFFF", width: "100%" }}
      >
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <a href="/">
              <img
                src="/images/khelohublogo.png"
                alt="Khelohub Logo"
                width="33"
                height="37"
              />
            </a>
          </Typography>
          <Button color="inherit" style={{ backgroundColor: "#000000" }}>
            Login
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navone;
