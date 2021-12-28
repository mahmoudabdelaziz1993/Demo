import {
  Grid,
  Typography,
  Paper,
  Container,
  Box,
  Toolbar,
} from "@material-ui/core";
import React from "react";
import { ReactComponent as Mogo } from "../../logos.svg";
import SlideFiles from "./SlideFiles";
import SlideFilesx from "./SlideFilesx";

const AboutSection = () => {
  return (
    <Box id="about">
      <SlideFilesx />
      <Toolbar />
      <Container maxWidth={"md"}>
        <Box paddingLeft={1} paddingRight={1} paddingTop={2}>
          <Grid item container alignContent="center" justify="center">
            <Grid
              item
              container
              direction="column"
              alignContent="center"
              xs={12}
              sm={8}
            >
              <Grid item>
                {" "}
                <Typography variant="h4" gutterBottom={true}>
                  {" "}
                  About me
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="subtitle2" component="p" display="block">
                  I’ve always sought out opportunities and challenges that are
                  meaningful to me. Although my professional path has taken many
                  twists and turns , from Sales and tour oprating to a Fullstack
                  dev
                </Typography>
              </Grid>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Mogo style={{ width: "100%" }} />
            </Grid>
          </Grid>
        </Box>
        \
      </Container>
      <Toolbar />
    </Box>
  );
};

export default AboutSection;
