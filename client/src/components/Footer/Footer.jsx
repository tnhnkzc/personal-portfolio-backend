import React, { useEffect } from "react";
import useStyles from "./styles";
import { Container, Typography, Grow } from "@mui/material";
import WebFont from "webfontloader";

const Footer = () => {
  const classes = useStyles();
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Droid Sans", "Chilanka", "Grape Nuts"],
      },
    });
  }, []);

  return (
    <Grow in>
      <Container
        style={{
          background:
            "linear-gradient(90deg, rgba(122,12,56,1) 0%, rgba(148,187,233,1) 100%)",
        }}
        className={classes.footerContainer}
      >
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
      </Container>
    </Grow>
  );
};

export default Footer;
