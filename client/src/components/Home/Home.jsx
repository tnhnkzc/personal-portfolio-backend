import React from "react";
import { Container, Typography } from "@mui/material";
import useStyles from "./styles";

const Home = () => {
  const classes = useStyles();
  return (
    <Container component="container" className={classes.mainContainer}>
      <Typography>Hello, I'm Tunahan.</Typography>
      <Typography>Web developer based in France.</Typography>
    </Container>
  );
};

export default Home;
