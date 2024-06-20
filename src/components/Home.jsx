import React from "react";
import Navone from "./store/Navone";
import Fotterboxtext from "./store/Fotterboxtext";
import Cardgame from "./store/Cardgame";
import RightsideMain from "./store/RightsideMain";

import { Box, Typography, Grid } from "@mui/material";

const Home = () => {
  return (
    <div className="container">
      {/* Left Side All content Start */}
      <div className="leftContainer">
        {/* Without Login Navar Component(from Navone) Start */}
        <Navone />
        {/* Without Login Navar Component(from Navone) End */}
        <br />

        {/* Notification Start*/}
        <Box
          component="section"
          sx={{
            marginTop: "10%",
            color: "red",
            p: 2,
            border: "1px solid white",
          }}
        >
          आप सभी का पेमेंट सुरक्षित है थोड़ी देर में आप सबका विड्रॉल हो जायेगा
          और गेम भी थोड़ी देर बाद चालू किए जायेंगे हेल्पलाइन नंबर 8233007200
        </Box>
        {/* Notification End*/}

        {/* Text About Commission Start*/}
        <Box
          component="section"
          sx={{
            backgroundColor: "#DC3545",
            p: 2,
            border: "1px solid white",
            color: "white",
          }}
        >
          Commission: 5% ◉ Referral: 2% For All Games
        </Box>
        {/* Text About Commission End*/}

        {/* Alerting Users Start*/}
        <Box
          component="section"
          sx={{
            backgroundColor: "#008080",
            p: 2,
            border: "1px solid white",
            color: "white",
            borderRadius: "8px",
            margin: "10px",
            padding: "10px",
          }}
        >
          चेतावनी जिस user के गेम मे win screenshot मे room code कि जगह गेम
          history आ रहा है वो लुडो किंग ऐप ओपन करे और play with friends पर click
          करे गेम history पर click करे और room code के साथ screen shot ले फिर ss
          upload करे।
        </Box>
        {/* Alerting Users End*/}

        {/* Video Link Start */}
        <Box
          component="section"
          sx={{
            position: "relative",
            backgroundColor: "#fafafa",
            p: 2,
            borderRadius: "5px",
            margin: "20px",
            padding: "20px",
            border: "1px solid black",
            color: "blue",
          }}
        >
          <Typography
            component="span"
            sx={{
              position: "absolute",
              top: "-10px",
              left: "10px",
              backgroundColor: "#fafafa",
              px: 1,
              color: "black",
              fontSize: "0.875rem",
              fontWeight: "bold",
            }}
          >
            Video Help
          </Typography>
          <a
            href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "blue",
              textDecoration: "none",
            }}
          >
            "पेमेंट ऐड करना सीखें।"
          </a>
        </Box>
        {/* Video Link End */}

        {/* Game Section Start */}
        <Box
          component="section"
          sx={{ p: 2, border: "1px solid white", backgroundColor: "#F5F5F5" }}
        >
          <Typography
            variant="h4"
            component="h4"
            sx={{
              fontSize: "24px",
              fontWeight: "600",
              marginBottom: "24px",
              marginTop: "20px",
            }}
          >
            Our Games
          </Typography>

          {/* Adjust Grid container to show two cards per row on small screens */}
          <Grid container spacing={2}>
            <Grid item xs={6} sm={6} md={6} lg={6}>
              <Cardgame
                img="/images/manual.png"
                gamename="Manual Room Code"
                link="http://localhost:3000/Homepage/ludoClassicManual"
              />
            </Grid>
            <Grid item xs={6} sm={6} md={6} lg={6}>
              <Cardgame
                img="/images/auto.png"
                gamename="Auto Room Code"
                link="http://localhost:3000/Homepage/ludoClassicManual"
              />
            </Grid>
            <Grid item xs={6} sm={6} md={6} lg={6}>
              <Cardgame
                img="https://play-lh.googleusercontent.com/uwAh1c_GAjvyhl_r-68S6mlxbQ1-hwK8cjy27QQQlDwGG5sEetYIfIcPWLkfS_VoO4Ee"
                gamename="Coming Soon"
              />
            </Grid>
            <Grid item xs={6} sm={6} md={6} lg={6}>
              <Cardgame
                img="https://play-lh.googleusercontent.com/G5Xau7rC8Ue1YWPQHhw_s_pfylkIh1CQwpnVcdjAIyHd2gDlKyOgxCQvr1b060Sx4w"
                gamename="Coming Soon"
              />
            </Grid>
          </Grid>
        </Box>
        {/* Game Section End */}

        {/* Footer Section Start */}
        <Fotterboxtext
          heading="About Us"
          content='staradda is a real-money gaming product owned and operated by Anisha Webtech Solutions("Anisha Webtech Solutions" or "We" or "Us" or "Our").'
        />
        <Fotterboxtext
          heading="Our Business & Products"
          content={`We are an HTML5 game-publishing company and our mission is to make accessing games fast and easy by removing the friction of app-installs.
          staradda is a skill-based real-money gaming platform accessible only for our users in India. It is accessible on https://www.staradda.in. On staradda, users can compete for real cash in Tournaments and Battles. They can encash their winnings via popular options such as Paytm Wallet, Amazon Pay, Bank Transfer, Mobile Recharges etc.`}
        />
        <Fotterboxtext
          heading="Our Games"
          content="staradda has a wide-variety of high-quality, premium HTML5 games. Our games are especially compressed and optimised to work on low-end devices, uncommon browsers, and patchy internet speeds.
        We have games across several popular categories: Arcade, Action, Adventure, Sports & Racing, Strategy, Puzzle & Logic. We also have a strong portfolio of multiplayer games such as Ludo, Chess, 8 Ball Pool, Carrom, Tic Tac Toe, Archery, Quiz, Chinese Checkers and more! Some of our popular titles are: Escape Run, Bubble Wipeout, Tower Twist, Cricket Gunda, Ludo With Friends. If you have any suggestions around new games that we should add or if you are a game developer yourself and want to work with us, don't hesitate to drop in a line at info@staradda.in!"
        />
        {/* Footer Section End */}
      </div>
      {/* Left Side All content End */}

      {/* Right Side All content Start */}
      <div className="rightContainer">
        {/* Right Side all Content Component from (RightsideMain) Start */}
        <RightsideMain />
        {/* Right Side all Content Component from (RightsideMain) End */}
      </div>
      {/* Right Side All content End */}
    </div>
  );
};

export default Home;
