import React from "react";
import { useSelector } from "react-redux";
import Project from "./Project/Project";
import { Link } from "react-router-dom";
import { Container, Grow, Grid, Button, Typography } from "@mui/material";
import useStyles from "./styles";
// import Form from "../Form/Form";
const Projects = () => {
  const projects = useSelector((state) => {
    return state.projects;
  });
  const classes = useStyles();
  return (
    <>
      <Container className={classes.container}>
        <Button>
          <Typography component={Link} to="/projects/createProject">
            Add a Project
          </Typography>
        </Button>
      </Container>
      <Container>
        <Grow in>
          <Grid
            className={classes.projectsGrid}
            container
            justify="space-between"
            alignItems="stretch"
            spacing={12}
            sm={6}
          >
            <Grid item xs={12} sm={7}>
              <Project />
              <Project />
              <Project />
            </Grid>
          </Grid>
        </Grow>
      </Container>
    </>
  );
};

export default Projects;
