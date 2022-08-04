import React, { useState, useEffect } from "react";
import { Container } from "@mui/material";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Sidebar from "./components/Sidebar/Sidebar";
import { BrowserRouter } from "react-router-dom";
import useStyles from "./styles";
import AnimatedRoutes from "./components/AnimatedRoutes/AnimatedRoutes";

function App() {
  const classes = useStyles();
  var docWidth = document.documentElement.offsetWidth;

  [].forEach.call(document.querySelectorAll("*"), function (el) {
    if (el.offsetWidth > docWidth) {
      console.log(el);
    }
  });

  return (
    <>
      <BrowserRouter>
        <Container id="home" className={classes.htmlContainer}>
          <Navbar />
          <Sidebar />
          <section className={classes.homeSection}>
            <Container className={classes.homeContainer} maxidth="lg">
              <AnimatedRoutes />
            </Container>
          </section>
          <section className={classes.footerSection}>
            <Footer className={classes.footerContainer} />
          </section>
        </Container>
      </BrowserRouter>
    </>
  );
}

export default App;
