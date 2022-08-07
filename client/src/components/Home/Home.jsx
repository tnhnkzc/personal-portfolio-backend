import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Container, Typography, Grow, Grid } from "@mui/material";
import useStyles from "./styles";
import javascript from "../../images/javascript.png";
import nodejs from "../../images/nodejs.png";
import react from "../../images/react.png";
import mongodb from "../../images/mongodb.png";
import github from "../../images/github.png";
import gitbash from "../../images/gitbash.png";
import html from "../../images/html.png";
import css from "../../images/css.png";
import expressjs from "../../images/expressjs.png";
import mysql from "../../images/mysql.png";
import adobexd from "../../images/adobexd.png";
import WebFont from "webfontloader";
import { motion } from "framer-motion";

const Home = () => {
  const classes = useStyles();

  const frontEndImages = [javascript, html, react, css];
  const backEndImages = [mysql, expressjs, nodejs, mongodb];
  const toolImages = [github, adobexd, gitbash];

  const [currentFrontEndImage, setCurrentFrontEndImage] = useState(0);
  const [currentBackEndImage, setCurrentBackEndImage] = useState(0);
  const [currentToolsImage, setCurrentToolsImage] = useState(0);

  // Logo change for front-end languages.
  useEffect(() => {
    const interval = setInterval(() => {
      if (currentFrontEndImage === frontEndImages.length - 1) {
        setCurrentFrontEndImage(0);
      } else {
        setCurrentFrontEndImage(currentFrontEndImage + 1);
      }
    }, 1500);
    return () => clearInterval(interval);
  });
  // Logo change for back-end languages.
  useEffect(() => {
    const interval = setInterval(() => {
      if (currentBackEndImage === backEndImages.length - 1) {
        setCurrentBackEndImage(0);
      } else {
        setCurrentBackEndImage(currentBackEndImage + 1);
      }
    }, 1500);
    return () => clearInterval(interval);
  });
  // Logo change for tools.
  useEffect(() => {
    const interval = setInterval(() => {
      if (currentToolsImage === toolImages.length - 1) {
        setCurrentToolsImage(0);
      } else {
        setCurrentToolsImage(currentToolsImage + 1);
      }
    }, 1500);
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

  const { t, i18n } = useTranslation();

  return (
    <Grow in>
      <Container id="home">
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
              {t("homePage.title")}
              <span style={{ color: "#ffcc00" }}> Tunahan Kuzucu.</span>
            </Typography>
            <Typography
              className={classes.text}
              style={{ fontFamily: "Grape Nuts" }}
              variant="h3"
              color="beige"
            >
              {t("homePage.description.part1")}{" "}
              <span style={{ color: "#ffcc00" }}>
                {t("homePage.description.part2")}{" "}
              </span>
              {t("homePage.description.part3")}
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
              {t("aboutMessage.part1")}
            </Typography>
            <Typography
              variant="h5"
              className={classes.text}
              style={{ fontFamily: "Chilanka" }}
            >
              {t("aboutMessage.part2")}
            </Typography>
          </Container>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.5, duration: 0.5 }}
        >
          <Container className={classes.languagesContainer}>
            <Container style={{ textAlign: "center" }}>
              <Typography
                style={{ fontFamily: "Chilanka" }}
                variant="h4"
                color="beige"
                className={classes.text}
              >
                {t("languagesMessage.part1")}
              </Typography>
              <Typography>
                <img
                  src={frontEndImages[currentFrontEndImage]}
                  alt="javascript"
                  height="75px"
                  className={classes.logo}
                />
              </Typography>
            </Container>
            <Container style={{ textAlign: "center" }}>
              <Typography
                style={{ fontFamily: "Chilanka" }}
                variant="h4"
                color="beige"
                className={classes.text}
              >
                {t("languagesMessage.part2")}
              </Typography>
              <Typography>
                <img
                  src={backEndImages[currentBackEndImage]}
                  alt="javascript"
                  height="75px"
                  className={classes.logo}
                />
              </Typography>
            </Container>
            <Container style={{ textAlign: "center" }}>
              <Typography
                style={{ fontFamily: "Chilanka" }}
                variant="h4"
                color="beige"
                className={classes.text}
              >
                {t("languagesMessage.part3")}
              </Typography>
              <Typography>
                <img
                  src={toolImages[currentToolsImage]}
                  alt="javascript"
                  height="75px"
                  className={classes.logo}
                />
              </Typography>
            </Container>
          </Container>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.8, duration: 0.5 }}
          style={{ marginBottom: "100px" }}
        >
          <Container className={classes.skillsContainer}>
            <Grid container columnSpacing={4} rowSpacing={4}>
              <Grid item md={6} xs={12}>
                <Container style={{ textAlign: "center" }}>
                  <Typography
                    style={{ fontFamily: "Chilanka" }}
                    variant="h4"
                    color="beige"
                    className={classes.text}
                  >
                    {t("skillsMessage.part1")}
                  </Typography>
                  <ul>
                    <li>
                      <Typography
                        style={{ color: "beige", fontFamily: "Droid Sans" }}
                      >
                        {t("skillsMessage.competences.part1")}
                      </Typography>
                    </li>
                    <li>
                      <Typography
                        style={{ color: "beige", fontFamily: "Droid Sans" }}
                      >
                        {t("skillsMessage.competences.part2")}
                      </Typography>
                    </li>
                    <li>
                      <Typography
                        style={{ color: "beige", fontFamily: "Droid Sans" }}
                      >
                        {t("skillsMessage.competences.part3")}
                      </Typography>
                    </li>
                    <li>
                      <Typography
                        style={{ color: "beige", fontFamily: "Droid Sans" }}
                      >
                        {t("skillsMessage.competences.part4")}
                      </Typography>
                    </li>
                  </ul>
                </Container>
              </Grid>
              <Grid item md={6} xs={12}>
                <Container
                  className={classes.softSkillsContainer}
                  style={{
                    textAlign: "center",
                  }}
                >
                  <Typography
                    style={{ fontFamily: "Chilanka" }}
                    variant="h4"
                    color="beige"
                    className={classes.text}
                  >
                    {t("skillsMessage.part2")}
                  </Typography>
                  <ul>
                    <li>
                      <Typography
                        style={{ color: "beige", fontFamily: "Droid Sans" }}
                      >
                        {t("skillsMessage.softSkills.part1")}
                      </Typography>
                    </li>
                    <li>
                      <Typography
                        style={{ color: "beige", fontFamily: "Droid Sans" }}
                      >
                        {t("skillsMessage.softSkills.part2")}
                      </Typography>
                    </li>
                    <li>
                      <Typography
                        style={{ color: "beige", fontFamily: "Droid Sans" }}
                      >
                        {t("skillsMessage.softSkills.part3")}
                      </Typography>
                    </li>
                    <li>
                      <Typography
                        style={{ color: "beige", fontFamily: "Droid Sans" }}
                      >
                        {t("skillsMessage.softSkills.part4")}
                      </Typography>
                    </li>
                  </ul>
                </Container>
              </Grid>
            </Grid>
          </Container>
        </motion.div>
      </Container>
    </Grow>
  );
};

export default Home;
