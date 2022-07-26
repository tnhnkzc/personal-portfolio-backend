import React from "react";
import { Container, Typography, Grow } from "@mui/material";
import useStyles from "./styles";
import javascript from "../../images/javascript.png";
import nodejs from "../../images/nodejs.png";
import react from "../../images/react.png";
import mongodb from "../../images/mongodb.png";
import { Link } from "react-router-dom";

const Home = () => {
  const classes = useStyles();
  return (
    <Grow in>
      <Container>
        <Container className={classes.contentContainer}>
          <Typography variant="h4" color="beige">
            Hello, I'm Tunahan.
          </Typography>
          <Typography variant="h4" color="beige">
            Web developer based in France.
          </Typography>
        </Container>
        <Container className={classes.aboutContainer}>
          <Typography className={classes.text}>
            A former English teacher who wanted to change his career path. Born
            and raised in Turkey, moved to France in December in 2020.
          </Typography>
          <Typography className={classes.text}>
            Started self-studying web development in late 2021 and attended a
            bootcamp in September in 2022.
          </Typography>
        </Container>
        <Container className={classes.contentContainer}>
          <Typography variant="h5" color="beige">
            The Tools I Use
          </Typography>
        </Container>
        <Container className={classes.logoContainer}>
          <Typography>
            <img
              src={javascript}
              alt="javascript"
              height="75px"
              className={classes.logo}
            />
          </Typography>
          <Typography>
            <img
              src={react}
              alt="react"
              height="75px"
              className={classes.logo}
            />
          </Typography>
          <Typography>
            <img
              src={nodejs}
              alt="nodejs"
              height="75px"
              className={classes.logo}
            />
          </Typography>
          <Typography>
            <img
              src={mongodb}
              alt="mongodb"
              height="75px"
              className={classes.logo}
            />
          </Typography>
        </Container>
      </Container>
    </Grow>
  );
};

export default Home;
