import React, { useEffect } from "react";
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
import WebFont from "webfontloader";

const Projects = ({ setCurrentId }) => {
  const projects = useSelector((state) => {
    return state.projects;
  });
  const classes = useStyles();
  const user = JSON.parse(localStorage.getItem("profile"));

  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Droid Sans", "Chilanka", "Grape Nuts"],
      },
    });
  }, []);

  return !projects.length ? (
    <CircularProgress className={classes.circularProgress} />
  ) : (
    <>
      <Grow in>
        <Container>
          <Container className={classes.titleContainer}>
            <Typography
              variant="h3"
              className={classes.title}
              style={{ fontFamily: "Chilanka" }}
            >
              My Works
            </Typography>
            <Container className={classes.container} container>
              {user && (
                <Button className={classes.addButton} variant="contained">
                  <Typography
                    component={Link}
                    to="/projects/createProject"
                    className={classes.addButtonText}
                    style={{ fontFamily: "Droid Sans" }}
                  >
                    Add a Project
                  </Typography>
                </Button>
              )}
            </Container>
          </Container>
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
                <Grid key={project._id} item xs={12} sm={6}>
                  <Project setCurrentId={setCurrentId} project={project} />
                </Grid>
              );
            })}
          </Grid>
        </Container>
      </Grow>
    </>
  );
};

export default Projects;
