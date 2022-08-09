import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import useStyles from "./styles";
import { Container, Typography } from "@mui/material";
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

  const { t } = useTranslation();

  return (
    <footer className={classes.footer}>
      <Container maxWidth="lg" style={{ textAlign: "center" }}>
        <Typography
          className={classes.footerText}
          style={{ fontFamily: "Droid Sans", fontWeight: "bold" }}
        >
          {t("footer.part1")}
        </Typography>

        <Typography
          className={classes.footerText}
          style={{ fontFamily: "Droid Sans", fontWeight: "bold" }}
        >
          &copy; Copyright {currentYear}
        </Typography>

        {/* {isVisible ? (
          <Button
            onClick={scrollToTop}
            style={{
              float: "right",
              color: "#ffcc00",
            }}
          >
            <ArrowUpwardRoundedIcon />
          </Button>
        ) : null} */}
      </Container>
    </footer>
  );
};

export default Footer;
