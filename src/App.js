import React, { useState, useEffect } from "react";
import "./App.scss";
import Topmenu from "./components/Topmenu";
import {
  createMuiTheme,
  Grid,
  Typography,
  responsiveFontSizes,
  MuiThemeProvider,
  Toolbar,
  Box,
} from "@material-ui/core";
import { ReactComponent as Logo } from "./logo.svg";
import Project from "./components/Project";
import { projects } from "./data";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { motion, AnimatePresence } from "framer-motion";
import Thick from "./components/Thick";
import Hero from "./components/Hero";
import AboutSection from "./components/sections/AboutSection";
import WorkSection from "./components/sections/WorkSection";

let theme = createMuiTheme({
  palette: {
    primary: {
      main: "#D72323",
    },
    secondary: {
      main: "#000000",
    },
  },
  typography: {
    fontFamily: "Spartan , sans-serif",
    h2: {
      fontWeight: 600,
    },
    subtitle1: {
      fontWeight: 600,
    },
    h3: {
      fontWeight: 600,
    },
    h6: {
      fontWeight: 600,
    },
  },
});
theme = responsiveFontSizes(theme);

function App(props) {
  //protfolio is on !
  const [IsOn, setIsOn] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsOn(true);
    }, 10);
  }, []);

  return (
    <MuiThemeProvider theme={theme}>
      <Grid>
        {!IsOn ? (
          <AnimatePresence>
            <motion.div
              style={{
                height: "100vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "#D72323",
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                animate={{ scale: 1.2 }}
                transition={{ yoyo: Infinity, duration: 0.5 }}
                style={{
                  display: "flex",
                  width: "20%",
                  height: "20%",
                  justifyContent: "center",
                }}
              >
                <Logo style={{ width: "100%" }} />
              </motion.div>
            </motion.div>
          </AnimatePresence>
        ) : (
          <>
            <AnimatePresence>
              <motion.div
                style={{ display: "contents" }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <Topmenu />
                <Box style={{ position: "relative" }}>
                  {IsOn && <Thick />}
                  <Toolbar />
                  <Toolbar />
                  {/* hero section */}
                  <Hero />
                </Box>
                {/* about Me section */}
                {/* <Grid
                  item
                  container
                  alignContent="center"
                  id="about"
                  justify="center"
                  style={{ minHeight: "80vh" }}
                >
                  <Grid item xs={2} md={2} />
                  <Grid
                    item
                    container
                    direction="column"
                    alignContent="center"
                    xs={4}
                    md={4}
                  >
                    <Grid item>
                      {" "}
                      <Typography variant="h3" gutterBottom={true}>
                        {" "}
                        About me
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography
                        variant="subtitle2"
                        component="p"
                        display="block"
                      >
                        I’ve always sought out opportunities and challenges that
                        are meaningful to me. Although my professional path has
                        taken many twists and turns , from Sales and tour
                        oprating to a Fullstack dev
                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid item xs={4} md={4}>
                    <Mogo style={{ width: "100%" }} />
                  </Grid>
                  <Grid item xs={2} md={2} />
                </Grid> */}
                <AboutSection />

                {/* Work section */}

                <WorkSection />
                {/* Let's talk section  */}
                {/* <Grid item container>
                  <Grid item xs={2} md={2} />
                  <Grid
                    item
                    container
                    direction="column"
                    spacing={3}
                    xs={8}
                    md={8}
                    justify="center"
                    id="contact"
                    alignContent="center"
                  >
                    <Grid item>
                      {" "}
                      <Typography
                        variant="h3"
                        color="primary"
                        style={{ marginTop: "50px" }}
                      >
                        Let's talk
                      </Typography>
                    </Grid>
                    <Grid item id="contact">
                      <Contact />
                    </Grid>
                  </Grid>
                  <Grid item xs={2} md={2} />
                </Grid> */}

                <Footer />
              </motion.div>
            </AnimatePresence>
          </>
        )}
      </Grid>
    </MuiThemeProvider>
  );
}

export default App;
