import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getProjects } from "../../actions/index";
import Projects from "../Projects/Projects";
import Home from "../Home/Home";
import Form from "../Form/Form";
import Contact from "../Contact/Contact";
import Auth from "../Auth/Auth";
import useStyles from "../../styles";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

function AnimatedRoutes() {
  const dispatch = useDispatch();
  const classes = useStyles();
  const [currentId, setCurrentId] = useState(null);
  const location = useLocation();
  useEffect(() => {
    dispatch(getProjects());
  }, [dispatch]);

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
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
          element={<Form currentId={currentId} setCurrentId={setCurrentId} />}
        />
        <Route
          path="/projects/editProject/:id"
          element={<Form currentId={currentId} setCurrentId={setCurrentId} />}
        />
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;
