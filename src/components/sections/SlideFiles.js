import React from "react";
import { Box, Container, Typography } from "@material-ui/core";
import { motion } from "framer-motion";
import {
  SiTypescript,
  SiJavascript,
  SiJson,
  SiReact,
  SiMongodb,
  SiFirebase,
  SiGraphql,
  SiHtml5,
  SiCss3,
  SiSass,
  SiJsonwebtokens,
} from "react-icons/si";
import { makeStyles } from "@material-ui/core/styles";
let Logos = [
  { icon: <SiTypescript />, title: "Typescript" },
  { icon: <SiJavascript />, title: "Javascript" },
  { icon: <SiJson />, title: "Json" },
  { icon: <SiReact />, title: "React" },
  { icon: <SiMongodb />, title: "Mongodb" },
  { icon: <SiFirebase />, title: "Firebase" },
  { icon: <SiGraphql />, title: "Graphql" },
  { icon: <SiHtml5 />, title: "Html5" },
  { icon: <SiCss3 />, title: "Css3" },
  { icon: <SiSass />, title: "Sass" },
  { icon: <SiJsonwebtokens />, title: "Jsonwebtokens" },
];
const useStyles = makeStyles((theme) => ({
  slider: {
    position: "relative",
    margin: "auto",
    backgroundColor: theme.palette.primary.main,
    width: "100%",
    height: "100%",
    minHeight: "200px",
    display: "flex",
    alignItems: "center",
  },
  sliderTrack: {
    position: "relative",
    display: "flex",
    margin: theme.spacing(2),
    overflow: "hidden",
    flexShrink: 0,
    height: "100%",
  },
  slide: {
    display: "flex",
    alignItems: "center",
  },
  slideCard: {
    flexBasis: "200px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
    padding: theme.spacing(1),
    "& h2": {
      marginRight: theme.spacing(1),
    },
  },
}));

const SlideFiles = () => {
  const classes = useStyles();

  return (
    <Box>
      <Container>
        <Box className={classes.slider}>
          <Container maxWidth="md" className={classes.sliderTrack}>
            <Box
              className={classes.slide}
              //   component={motion.div}
              //   animate={{ x: "-100%" }}
              //   intial={{ x: 0 }}
              //   transition={{
              //     repeat: Infinity,
              //     type: "linear",
              //     duration: 10,
              //   }}
              //   exit={{ x: "-100%" }}
            >
              {Logos.map((logo, index) => (
                <Box className={classes.slideCard} key={index}>
                  <Typography variant="h2">{logo.icon}</Typography>
                  <Typography
                    gutterBottom
                    variant="h5"
                  >{`${logo.title}`}</Typography>
                </Box>
              ))}
            </Box>
          </Container>
        </Box>
      </Container>
    </Box>
  );
};

export default SlideFiles;
