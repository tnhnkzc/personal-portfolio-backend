import React, { useEffect } from "react";
import { Container, Typography, Grow } from "@mui/material";
import useStyles from "./styles";
import javascript from "../../images/javascript.png";
import nodejs from "../../images/nodejs.png";
import react from "../../images/react.png";
import mongodb from "../../images/mongodb.png";
import WebFont from "webfontloader";

const Home = () => {
  const classes = useStyles();

  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Droid Sans", "Chilanka", "Grape Nuts"],
      },
    });
  }, []);

  return (
    <Grow in>
      <Container>
        <Container className={classes.contentContainer}>
          <Typography
            className={classes.text}
            style={{ fontFamily: "Grape Nuts" }}
            variant="h3"
            color="beige"
          >
            Hello, I'm Tunahan. Web developer based in France.
          </Typography>
        </Container>
        <Container className={classes.aboutContainer}>
          <Typography
            variant="h5"
            className={classes.text}
            style={{ fontFamily: "Chilanka" }}
          >
            A former English teacher who wanted to change his career path. Born
            and raised in Turkey, moved to France in December in 2020.
          </Typography>
          <Typography
            variant="h5"
            className={classes.text}
            style={{ fontFamily: "Chilanka" }}
          >
            Started self-studying web development in late 2021 and attended a
            bootcamp in September in 2022.
          </Typography>
        </Container>

        <Container className={classes.languagesContainer}>
          <Container>
            <Typography
              style={{ fontFamily: "Chilanka" }}
              variant="h4"
              color="beige"
              className={classes.text}
            >
              The Programming Languages I Use
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
      </Container>
    </Grow>
  );
};

export default Home;
