import React, { useEffect, useState } from "react";
import useStyles from "./styles";
import { Container, Typography, Grow, Box, Grid } from "@mui/material";
import WebFont from "webfontloader";

const Footer = () => {
  const classes = useStyles();
  const currentYear = new Date().getFullYear();

  // const [show, setShow] = useState(false);

  // const handleShow = () => {
  //   const currentScrollY = window.scrollY;
  //   if (currentScrollY > 100) {
  //     setShow(true);
  //   }
  // };

  // useEffect(() => {
  //   window.addEventListener("scroll", handleShow);

  //   return () => {
  //     window.removeEventListener("scroll", handleShow);
  //   };
  // });

  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Droid Sans", "Chilanka", "Grape Nuts"],
      },
    });
  }, []);

  return (
    <footer className={classes.footer}>
      <Container maxWidth="lg" style={{ textAlign: "center" }}>
        <Typography
          className={classes.footerText}
          style={{ fontFamily: "Droid Sans", fontWeight: "bold" }}
        >
          Made with ❤️ by Tunahan Kuzucu
        </Typography>

        <Typography
          className={classes.footerText}
          style={{ fontFamily: "Droid Sans", fontWeight: "bold" }}
        >
          &copy; Copyright {currentYear}
        </Typography>
      </Container>
    </footer>
  );
};

export default Footer;
