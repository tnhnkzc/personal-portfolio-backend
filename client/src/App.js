import React, { useState, useEffect } from "react";
import { Container } from "@mui/material";
import { useDispatch } from "react-redux";
import { getProjects } from "./actions/index";
import Navbar from "./components/Navbar/Navbar";
import Projects from "./components/Projects/Projects";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Form from "./components/Form/Form";
import Contact from "./components/Contact/Contact";
import Auth from "./components/Auth/Auth";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import useStyles from "./styles";

function App() {
  const dispatch = useDispatch();
  const classes = useStyles();
  const [currentId, setCurrentId] = useState(null);

  useEffect(() => {
    dispatch(getProjects());
  }, [dispatch]);

  return (
    <>
      <BrowserRouter>
        <Container className={classes.homeContainer} maxidth="lg">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/auth" element={<Auth />} />
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
    </>
  );
}

export default App;
