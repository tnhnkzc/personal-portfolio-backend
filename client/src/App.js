import React, { useState, useEffect } from "react";
import { Container } from "@mui/material";
import { useDispatch } from "react-redux";
import { getProjects } from "./actions/index";
import Navbar from "./components/Navbar/Navbar";
import Projects from "./components/Projects/Projects";
import Home from "./components/Home/Home";
import Form from "./components/Form/Form";
import Contact from "./components/Contact/Contact";
import Auth from "./components/Auth/Auth";
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
        <Container className={classes.homeContainer} maxidth="lg">
          <Navbar />
          <Sidebar />
          <AnimatedRoutes />
          <Container className={classes.footerContainer}>
            <Footer />
          </Container>
        </Container>
      </BrowserRouter>
    </>
  );
}

export default App;
