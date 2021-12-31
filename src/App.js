import React, { useState, useEffect } from "react";
import "./App.scss";
import Topmenu from "./components/Topmenu";
import {
  createMuiTheme,
  Grid,
  responsiveFontSizes,
  MuiThemeProvider,
  Toolbar,
  Box,
  makeStyles,
} from "@material-ui/core";
import { ReactComponent as Logo } from "./logo.svg";
import { motion, AnimatePresence } from "framer-motion";
import Thick from "./components/Thick";
import Hero from "./components/Hero";
import AboutSection from "./components/sections/AboutSection";
import WorkSection from "./components/sections/WorkSection";
import Loader from "./components/Loader";

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

let slideUpOut = {
  initial: {
    opacity: 0.5,
    y: "-100vh",
  },
  play: {
    opacity: 1,
    y: "0",
    transition: {
      delay: 0.5,
      when: "beforChildren",
    },
  },
  exit: {
    opacity: 0.5,
    y: "-100vh",
    transition: {
      delay: 0.5,
    },
  },
};
let slideUpOIn = {
  initial: {
    opacity: 0.5,
    y: "100vh",
  },
  play: {
    opacity: 1,
    y: "0",
  },
  exit: {
    opacity: 0.5,
    y: "100vh",
  },
};

theme = responsiveFontSizes(theme);

function App(props) {
  //protfolio is on !
  const [LoaderTrigger, setLoaderTrigger] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoaderTrigger(false);
    }, 3000);
  }, []);

  return (
    <MuiThemeProvider theme={theme}>
      <Grid>
        <AnimatePresence>
          {LoaderTrigger && (
            <Grid
              item
              component={motion.div}
              variants={slideUpOut}
              initial="initial"
              animate="play"
              exit="exit"
              id="loader"
            >
              <Loader />
            </Grid>
          )}

          {!LoaderTrigger && (
            <>
              <Topmenu />

              <Grid
                item
                component={motion.div}
                // style={{ display: "contents" }}
                variants={slideUpOIn}
                initial="initial"
                animate="play"
                exit="exit"
              >
                <Box style={{ position: "relative" }}>
                  <Thick />
                  <Toolbar />
                  <Toolbar />
                  {/* hero section */}
                  <Hero />
                </Box>
                {/* About Section */}
                <AboutSection />
                {/* Work section */}
                <WorkSection />
                {/* Let's talk section  */}
              </Grid>
            </>
          )}
        </AnimatePresence>
      </Grid>
    </MuiThemeProvider>
  );
}

export default App;
