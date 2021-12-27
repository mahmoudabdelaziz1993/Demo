import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  makeStyles,
  Box,
} from "@material-ui/core";
import { ReactComponent as Logo } from "../logo.svg";
import { LinkedIn, GitHub } from "@material-ui/icons";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Tooltip from "@material-ui/core/Tooltip";

const useStyles = makeStyles({
  root: {
    boxShadow: "none",
    transition: " all 1s ease-in-out",
  },
  after: {
    transition: " all 1s ease-in-out",
  },
  space: {
    flexGrow: 1,
  },
});

const Topmenu = () => {
  const Trigger = useScrollTrigger({
    threshold: 100,
    disableHysteresis: true,
  });
  const classes = useStyles();
  const home = () => {
    window["scrollTo"]({ top: 0, behavior: "smooth" });
  };
  return (
    <Box xs={{ flexGrow: 1 }}>
      <AppBar
        className={!Trigger ? classes.root : classes.after}
        color={Trigger ? "secondary" : "transparent"}
      >
        <Toolbar>
          <Tooltip disableFocusListener title="Mahmoud Abdelaziz" arrow>
            <IconButton color="inherit" onClick={home}>
              <Logo width="40" height="40" fill="currentColor" />
            </IconButton>
          </Tooltip>

          <div className={classes.space} />
          {/* LinkedIn Account */}
          <Tooltip disableFocusListener title="LinkedIn Account " arrow>
            <IconButton
              color="inherit"
              href="https://www.linkedin.com/in/mahmoud-abdelaziz-salama/"
            >
              {" "}
              <LinkedIn />
            </IconButton>
          </Tooltip>
          <Tooltip disableFocusListener title="GitHub Account " arrow>
            <IconButton
              color="inherit"
              href="https://github.com/mahmoudabdelaziz1993/"
            >
              <GitHub />
            </IconButton>
          </Tooltip>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Topmenu;
