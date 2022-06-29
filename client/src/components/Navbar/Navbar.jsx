import React from "react";
import { Container, AppBar, Link, Typography } from "@mui/material";
import logo from "../../images/logo.png";
import useStyles from "./styles";
const Navbar = () => {
  const classes = useStyles();
  return (
    <Container>
      <AppBar className={classes.appBar} color="inherit">
        <Link to="/">
          <img component={Link} to="/" src={logo} alt="logo" height="40px" />
        </Link>
        <Container className={classes.container}>
          <Link to="/">
            <Typography className={classes.navBarItem}>Home</Typography>
          </Link>
          <Link to="/about">
            <Typography className={classes.navBarItem}>About</Typography>
          </Link>
          <Link to="/projects">
            <Typography className={classes.navBarItem}>Projects</Typography>
          </Link>
          <Link to="/contact">
            <Typography className={classes.navBarItem}>Contact</Typography>
          </Link>
        </Container>
      </AppBar>
    </Container>
  );
};

export default Navbar;
