import React from "react";
import { Grid, Typography, Toolbar, Box, Container } from "@material-ui/core";
import { projects } from "../../data";
import Project from "../Project";
import SimpleCard from "../SimpleCard";
import MediaCard from "../MediaCard";

const WorkSection = (props) => {
  return (
    <Box>
      {" "}
      <Toolbar />
      <Container maxWidth={"lg"}>
        <Typography variant="h3">Side Projects</Typography>
      </Container>
      <Toolbar />
      <Container maxWidth={"lg"}>
        <Grid container spacing={2}>
          {projects.map((project) => (
            <Grid item key={project.number} xs={12} md={4} sm={6}>
              {/* <Project project={project} /> */}
              {/* <SimpleCard /> */}
              <MediaCard project={project} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default WorkSection;
