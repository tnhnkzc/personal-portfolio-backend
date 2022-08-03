import React, { useState, useEffect } from "react";
import { Container } from "@mui/material";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Sidebar from "./components/Sidebar/Sidebar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import useStyles from "./styles";
import AnimatedRoutes from "./components/AnimatedRoutes/AnimatedRoutes";

function App() {
  const classes = useStyles();
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Sidebar />
        <Container className={classes.homeContainer} maxidth="lg">
          <AnimatedRoutes />
          <Footer className={classes.footerContainer} />
        </Container>
      </BrowserRouter>
    </>
  );
}

export default App;
