import React from "react";
import { Container } from "@mui/material";
import NewNavbar from "./components/NewNavbar/NewNavbar";
import Footer from "./components/Footer/Footer";
import Sidebar from "./components/Sidebar/Sidebar";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import { BrowserRouter } from "react-router-dom";
import useStyles from "./styles";
import AnimatedRoutes from "./components/AnimatedRoutes/AnimatedRoutes";

function App() {
  const classes = useStyles();

  return (
    <>
      <BrowserRouter>
        <Container id="home" className={classes.htmlContainer}>
          <NewNavbar />
          <Container className={classes.homeContainer} maxidth="lg">
            <Sidebar />
            <AnimatedRoutes />
          </Container>
          <Footer />
          <ScrollToTop />
        </Container>
      </BrowserRouter>
    </>
  );
}

export default App;
