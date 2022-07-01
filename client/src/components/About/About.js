import React from "react";
import { Container } from "@mui/material";
import useStyles from "./styles";
const About = () => {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <div>About</div>
    </Container>
  );
};

export default About;
