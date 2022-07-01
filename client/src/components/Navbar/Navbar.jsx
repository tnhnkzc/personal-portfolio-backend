import React from "react";
import { Container, AppBar, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import logo from "../../images/logo.png";
import useStyles from "./styles";
const Navbar = () => {
  const classes = useStyles();
  return (
    <AppBar className={classes.appBar} color="inherit">
      <Typography component={Link} to="/">
        <img
          component={Link}
          to="/"
          src={logo}
          alt="logo"
          height="40px"
          className={classes.logo}
        />
      </Typography>
      <Container className={classes.linkContainer}>
        <Button component={Link} to="/" className={classes.navbarLinks}>
          Home
        </Button>
        <Button component={Link} to="/about" className={classes.navbarLinks}>
          About
        </Button>
        <Button component={Link} to="/projects" className={classes.navbarLinks}>
          Projects
        </Button>
        <Button component={Link} to="/contact" className={classes.navbarLinks}>
          Contact
        </Button>
      </Container>
    </AppBar>
  );
};

export default Navbar;
