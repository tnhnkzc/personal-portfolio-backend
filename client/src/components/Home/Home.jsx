import React from "react";
import { Container, Typography, Grow } from "@mui/material";
import useStyles from "./styles";
import javascript from "../../images/javascript.png";
import nodejs from "../../images/nodejs.png";
import react from "../../images/react.png";
import mongodb from "../../images/mongodb.png";

const Home = () => {
  const classes = useStyles();
  return (
    <Grow in>
      <>
        <Container component="container" className={classes.contentContainer}>
          <Typography variant="h4" color="white">
            Hello, I'm Tunahan.
          </Typography>
          <Typography variant="h5" color="primary">
            Web developer based in France.
          </Typography>
        </Container>
        <Container className={classes.contentContainer}>
          <Typography variant="h5" color="white">
            The Tools I Use are;
          </Typography>
        </Container>
        <Container className={classes.contentContainer}>
          <Typography>
            <img src={javascript} alt="logo" height="75px" />
          </Typography>
          <Typography>
            <img src={nodejs} alt="logo" height="75px" />
          </Typography>{" "}
          <Typography>
            <img src={react} alt="logo" height="75px" />
          </Typography>{" "}
          <Typography>
            <img src={mongodb} alt="logo" height="75px" />
          </Typography>
        </Container>
      </>
    </Grow>
  );
};

export default Home;
