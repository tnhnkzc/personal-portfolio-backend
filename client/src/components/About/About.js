import React from "react";
import { Container, Typography } from "@mui/material";
import useStyles from "./styles";
const About = () => {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <div>
        <Typography className={classes.text}>
          A former English teacher who wanted to change his career path. Born
          and raised in Turkey, moved to France in December in 2020.
        </Typography>
        <Typography className={classes.text}>
          Started self-studying web development in late 2021 and attended a
          bootcamp in September in 2022.
        </Typography>
      </div>
    </Container>
  );
};

export default About;
