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
  root: {
    backgroundColor: theme.palette.primary.main,
  },
  slider: {
    margin: "auto",
    backgroundColor: theme.palette.primary.main,
    minHeight: "200px",
    overflow: "hidden",
    display: "flex",
    position: "relative",
    alignItems: "center",
  },
  sliderTrack: {
    display: "flex",
    margin: theme.spacing(2),
    flexShrink: 0,
    height: "100%",
    width: 229 * Logos.length - 10,
  },
  slide: {
    display: "flex",
    alignItems: "center",
    flexShrink: 0,
    flexBasis: "220px",
    justifyContent: "center",
    padding: theme.spacing(1),
    "& h2": {
      marginRight: theme.spacing(1),
    },
  },
}));

const SlideFilesx = () => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Container maxWidth="md" className={classes.slider}>
        <Box className={classes.sliderTrack}>
          {Logos.map((logo, index) => (
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
              <Typography variant="h2">{logo.icon}</Typography>
              <Typography
                gutterBottom
                variant="h5"
              >{`${logo.title}`}</Typography>
            </Box>
          ))}
        </Box>
        <Box className={classes.sliderTrack}>
          {Logos.map((logo, index) => (
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
  );
};

export default SlideFilesx;
