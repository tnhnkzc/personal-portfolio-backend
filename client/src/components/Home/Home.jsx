import React from "react";
import { Container, Typography, Grow } from "@mui/material";
import useStyles from "./styles";

const Home = () => {
  const classes = useStyles();
  return (
    <Grow in>
      <Container component="container" className={classes.contentContainer}>
        <Typography color="white">Hello, I'm Tunahan.</Typography>
        <Typography color="primary">Web developer based in France.</Typography>
      </Container>
    </Grow>
  );
};

export default Home;
