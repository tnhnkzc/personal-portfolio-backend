import React, { useState, useEffect } from "react";
import { Container, Grow, Grid, AppBar } from "@mui/material";
import { useDispatch } from "react-redux";
import { getProjects } from "./actions/index";
import Navbar from "./components/Navbar/Navbar";
import Projects from "./components/Projects/Projects";
import useStyles from "./styles";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Form from "./components/Form/Form";
import Contact from "./components/Contact/Contact";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const classes = useStyles();
  const dispatch = useDispatch();

  const [currentId, setCurrentId] = useState(null);

  useEffect(() => {
    dispatch(getProjects());
  }, [dispatch]);

  return (
    <>
      <BrowserRouter>
        <Container maxidth="lg">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route
              path="/projects"
              element={<Projects setCurrentId={setCurrentId} />}
            />
            <Route path="/contact" element={<Contact />} />
            <Route
              path="/projects/createProject"
              element={
                <Form currentId={currentId} setCurrentId={setCurrentId} />
              }
            />
            <Route
              path="/projects/editProject/:id"
              element={
                <Form currentId={currentId} setCurrentId={setCurrentId} />
              }
            />
          </Routes>
        </Container>
      </BrowserRouter>

      {/*  */}
      {/* <Container className={classes.formContainer}>
          <Form />
        </Container> */}
    </>
  );
}

export default App;
