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

const useStyles = makeStyles({
  root: {
    boxShadow: "none",
  },
  LogoContainer: {
    width: 60,
    height: 60,
    backgroundColor: "transparent",
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: "48px",
    height: "48px",
    marginLeft: "-15px",
  },
  space: {
    flexGrow: 1,
  },
});

function Topmenu() {
  const classes = useStyles();
  const home = () => {
    window["scrollTo"]({ top: 0, behavior: "smooth" });
  };
  return (
    <AppBar position="sticky" color="transparent" className={classes.root}>
      <Toolbar>
        <Box className={classes.LogoContainer} onClick={home}>
          <Logo className={classes.logo} />
        </Box>

        <div className={classes.space} />
        <IconButton
          color="inherit"
          href="https://www.linkedin.com/in/mahmoud-abdelaziz-salama/"
          size="large"
        >
          {" "}
          <LinkedIn />
        </IconButton>
        <IconButton
          color="inherit"
          href="https://github.com/mahmoudabdelaziz1993/"
          size="large"
        >
          <GitHub />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}

export default Topmenu;
