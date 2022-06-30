import React from "react";
import { Container, Grow, Grid, AppBar } from "@mui/material";
import Navbar from "./components/Navbar/Navbar";
import Projects from "./components/Projects/Projects";
import useStyles from "./styles";
import Home from "./components/Home/Home";

function App() {
  const classes = useStyles();
  return (
    <>
      <Container>
        <Navbar />
      </Container>
      <Container container className={classes.contentContainer}>
        <Container>
          <Home />
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
                <Projects />
              </Grid>
            </Grid>
          </Grow>
        </Container>
      </Container>
    </>
  );
}

export default App;
