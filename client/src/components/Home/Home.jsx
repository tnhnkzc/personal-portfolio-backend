import React, { useEffect, useState } from "react";
import { Container, Typography, Grow } from "@mui/material";
import useStyles from "./styles";
import javascript from "../../images/javascript.png";
import nodejs from "../../images/nodejs.png";
import react from "../../images/react.png";
import mongodb from "../../images/mongodb.png";
import github from "../../images/github.png";
import gitbash from "../../images/gitbash.png";
import adobexd from "../../images/adobexd.png";
import WebFont from "webfontloader";
import { motion } from "framer-motion";

const Home = () => {
  const classes = useStyles();

  const images = [javascript, nodejs, react, mongodb, github, adobexd, gitbash];

  const [currentImage, setCurrentImage] = useState(0);

  // Logo change for languages.
  useEffect(() => {
    const interval = setInterval(() => {
      if (currentImage === images.length - 1) {
        setCurrentImage(0);
      } else {
        setCurrentImage(currentImage + 1);
      }
    }, 2000);
    return () => clearInterval(interval);
  });

  // Font Styles
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
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
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
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <Container className={classes.aboutContainer}>
            <Typography
              variant="h5"
              className={classes.text}
              style={{ fontFamily: "Chilanka" }}
            >
              A former English teacher who wanted to change his career path.
              Born and raised in Turkey, moved to France in December in 2020.
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
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.5, duration: 0.5 }}
        >
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
                  src={images[currentImage]}
                  alt="javascript"
                  height="75px"
                  className={classes.logo}
                />
              </Typography>
            </Container>
          </Container>
        </motion.div>
      </Container>
    </Grow>
  );
};

export default Home;
