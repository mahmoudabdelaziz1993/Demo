import React from "react";
import { ReactComponent as Me } from "../me.svg";
import downloadPDF from "../utils/DownLoadPDF";
import { Box, Button, Grid, Typography, IconButton } from "@material-ui/core";
import { CloudDownload, Work, KeyboardArrowDown } from "@material-ui/icons";

import { motion } from "framer-motion";

function Hero() {
  return (
    <Grid item container alignContent="center" style={{ minHeight: "80vh" }}>
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
            <KeyboardArrowDown style={{ fontSize: "30px" }} />
          </IconButton>
        </motion.span>
      </Grid>
    </Grid>
  );
}

export default Hero;
