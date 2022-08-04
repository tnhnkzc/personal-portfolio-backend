import React, { useEffect, useState } from "react";
import useStyles from "./styles";
import { Container, Typography, Grow } from "@mui/material";
import WebFont from "webfontloader";

const Footer = () => {
  const classes = useStyles();
  const currentYear = new Date().getFullYear();

  const [show, setShow] = useState(false);

  const controlFooter = () => {
    if (window.scrollY < 50) {
      setShow(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", controlFooter);

    return () => {
      window.removeEventListener("scroll", controlFooter);
    };
  }, []);

  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Droid Sans", "Chilanka", "Grape Nuts"],
      },
    });
  }, []);

  return show ? (
    <Grow in>
      <Container
        style={{
          background: "transparent",
        }}
        className={classes.footerContainer}
      >
        <footer className={classes.footerContainer}>
          <Container className={classes.footerTextContainer}>
            <Typography
              className={classes.footerText}
              style={{ fontFamily: "Droid Sans", fontWeight: "bold" }}
            >
              Made with ❤️ by Tunahan Kuzucu
            </Typography>
          </Container>
          <Container className={classes.footerTextContainer}>
            <Typography
              className={classes.footerText}
              style={{ fontFamily: "Droid Sans", fontWeight: "bold" }}
            >
              &copy; Copyright {currentYear}
            </Typography>
          </Container>
        </footer>
      </Container>
    </Grow>
  ) : null;
};

export default Footer;
