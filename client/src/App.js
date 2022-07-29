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
          <Sidebar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/auth/signin" element={<Auth />} />
            <Route path="/auth/signup" element={<Auth />} />
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
          <Container className={classes.footerContainer}>
            <Footer />
          </Container>
        </Container>

        {/* <Container className={classes.projectsContainer}>
          <Projects />
        </Container>
        <Container className={classes.contactContainer}>
          <Contact />
        </Container> */}
      </BrowserRouter>
    </>
  );
}

export default App;
