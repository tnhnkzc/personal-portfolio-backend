import React from "react";
import { useSelector } from "react-redux";
import Project from "./Project/Project";
import { Link } from "react-router-dom";
import {
  Container,
  Grow,
  Grid,
  Button,
  Typography,
  CircularProgress,
} from "@mui/material";
import useStyles from "./styles";
// import Form from "../Form/Form";
const Projects = () => {
  const projects = useSelector((state) => {
    return state.projects;
  });
  const classes = useStyles();
  return !projects.length ? (
    <CircularProgress />
  ) : (
    <>
      <Container className={classes.container} container>
        <Button className={classes.addButton}>
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
            spacing={6}
            sm={12}
          >
            {projects.map((project) => {
              return (
                <Grid key={project._id} item xs={12} sm={4}>
                  <Project project={project} />
                </Grid>
              );
            })}
          </Grid>
        </Grow>
      </Container>
    </>
  );
};

export default Projects;
