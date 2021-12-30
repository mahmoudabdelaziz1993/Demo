import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  makeStyles,
  Box,
  Container,
  Fab,
  Zoom,
  Tooltip,
} from "@material-ui/core";
import { ReactComponent as Logo } from "../logo.svg";
import { LinkedIn, GitHub } from "@material-ui/icons";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import { CloudDownload, Email, Phone } from "@material-ui/icons";
import { useState } from "react";
import EmailMessage from "../utils/EmailMessage";
import DownLoadPDF from "../utils/DownLoadPDF";

const useStyles = makeStyles((theme) => ({
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
  custom: {
    display: "flex",
  },
  down: {
    position: "fixed",
    bottom: theme.spacing(2),
    right: theme.spacing(2),
    zIndex: 20,
    display: "flex",
    gap: theme.spacing(2),
    flexDirection: "column",
  },
  flotingThings: {
    margin: theme.spacing(1),
  },
}));

const Topmenu = () => {
  const Trigger = useScrollTrigger({
    threshold: 100,
    disableHysteresis: true,
  });
  const Trigger2 = useScrollTrigger({
    threshold: 300,
    disableHysteresis: true,
  });
  const [copydone, setCopydone] = useState(false);
  const copyToClipboard = () => {
    navigator.clipboard.writeText("+201006936354");
    setCopydone(true);
    setTimeout(() => {
      setCopydone(false);
    }, 2000);
  };
  const classes = useStyles();
  const home = () => {
    window["scrollTo"]({ top: 0, behavior: "smooth" });
  };
  return (
    <>
      <Box xs={{ flexGrow: 1 }}>
        <AppBar
          className={!Trigger ? classes.root : classes.after}
          color={Trigger ? "secondary" : "transparent"}
        >
          <Container className={classes.custom}>
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
          </Container>
        </AppBar>
      </Box>
      <Box className={classes.down}>
        <Zoom in={Trigger2}>
          <Fab
            className={classes.flotingThings}
            color="secondary"
            onClick={DownLoadPDF}
          >
            <CloudDownload />
          </Fab>
        </Zoom>
        <Zoom in={Trigger2}>
          <Fab
            className={classes.flotingThings}
            color="secondary"
            onClick={EmailMessage}
          >
            <Email />
          </Fab>
        </Zoom>
        <Zoom in={Trigger2}>
          <Tooltip title="Copied to clipboard" open={copydone}>
            <Fab
              className={classes.flotingThings}
              color="secondary"
              onClick={copyToClipboard}
            >
              <Phone />
            </Fab>
          </Tooltip>
        </Zoom>
      </Box>
    </>
  );
};

export default Topmenu;
