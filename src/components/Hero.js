import React from "react";
import { ReactComponent as Me } from "../me.svg";
import downloadPDF from "../utils/DownLoadPDF";
import EmailMessage from "../utils/EmailMessage";
import {
  Box,
  Button,
  Grid,
  Typography,
  IconButton,
  Container,
  Toolbar,
  Tooltip,
} from "@material-ui/core";
import {
  CloudDownload,
  Work,
  Fingerprint,
  Email,
  Phone,
} from "@material-ui/icons";
import { motion } from "framer-motion";
import { makeStyles } from "@material-ui/core/styles";
import { useState } from "react";
const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

function Hero() {
  const classes = useStyles();
  const [trigger, setTrigger] = useState(false);
  const copyToClipboard = () => {
    navigator.clipboard.writeText("+201006936354");
    setTrigger(true);
    setTimeout(() => {
      setTrigger(false);
    }, 2000);
  };
  return (
    <>
      <Container maxWidth="md">
        <Grid container spacing={3}>
          <Grid item xs={12} sm={4}>
            <Me style={{ width: "100%", height: "auto" }} />
          </Grid>
          <Grid item xs={12} sm={8}>
            <Container>
              <Typography variant="h2" display="block" gutterBottom>
                {" "}
                Hi there, <br /> I'm Mahmoud Abdelaziz{" "}
              </Typography>
              <Typography variant="h6" color="primary" gutterBottom>
                Full Stack JavaScript Dev
              </Typography>
              <Button
                variant="contained"
                color="secondary"
                className={classes.button}
                startIcon={<CloudDownload />}
                onClick={downloadPDF}
              >
                download Resume
              </Button>
              <Button
                variant="contained"
                color="secondary"
                className={classes.button}
                startIcon={<Email />}
                onClick={EmailMessage}
              >
                Say Hi
              </Button>
              <Tooltip title="Copied to clipboard" open={trigger}>
                <Button
                  variant="contained"
                  color="secondary"
                  className={classes.button}
                  startIcon={<Phone />}
                  onClick={copyToClipboard}
                >
                  Phone
                </Button>
              </Tooltip>
            </Container>
          </Grid>
        </Grid>
      </Container>
      <Toolbar />
      <Container>
        <Box paddingTop={2} paddingBottom={3}>
          {/* <motion.div
            initial={{ y: "-50px" }}
            animate={{ y: "-40px" }}
            transition={{ y: { yoyo: Infinity, duration: 1 } }}
            style={{ position: "relative" }}
          > */}
          <IconButton href="#about" color="inherit">
            <Fingerprint style={{ fontSize: "30px" }} />
          </IconButton>
          {/* </motion.div> */}
        </Box>
      </Container>

      {/* old  */}
      {/* <Grid item container alignContent="center" style={{ minHeight: "80vh" }}>
        <Grid item xs={2} md={2} />
        <Grid item container direction="column" xs={6} md={6}>
          <Grid item>
            <Typography
              variant="h3"
              component="h3"
              display="block"
              gutterBottom={true}
            >
              {" "}
              Hello <br /> I'm Mahmoud abdelaziz{" "}
            </Typography>
          </Grid>
          <Grid item>
            {" "}
            <Typography
              variant="subtitle1"
              component="h3"
              className="subheadline"
              display="block"
              gutterBottom={true}
            >
              <span></span>
            </Typography>
          </Grid>
          <Grid item>
            <Box
              style={{
                display: "flex",
                alignItems: "stretch",
                justifyContent: "flex-start",
                flexWrap: "wrap",
              }}
            >
              <Button
                size="small"
                color="primary"
                variant="contained"
                style={{
                  marginRight: "5px",
                  marginBottom: "5px",
                  textTransform: "capitalize",
                }}
                startIcon={<CloudDownload />}
                onClick={downloadPDF}
              >
                download Resume
              </Button>
              <Button
                size="small"
                color="primary"
                variant="contained"
                style={{
                  marginBottom: "5px",
                  textTransform: "capitalize",
                }}
                startIcon={<Work />}
                href="#contact"
              >
                Hire me{" "}
              </Button>
            </Box>
          </Grid>
        </Grid>
        <Grid item xs={3} md={2}>
          <Me style={{ width: "100%", height: "auto" }} />
        </Grid>

        <Grid item xs={1} md={2}>
          <motion.span
            initial={{ y: "-50px" }}
            animate={{ y: "-40px" }}
            transition={{ y: { yoyo: Infinity, duration: 1 } }}
            style={{ position: "absolute", bottom: 10 }}
          >
            <IconButton href="#about" color="inherit" style={{ padding: 0 }}>
              <Fingerprint style={{ fontSize: "30px" }} />
            </IconButton>
          </motion.span>
        </Grid>
      </Grid> */}
    </>
  );
}

export default Hero;
