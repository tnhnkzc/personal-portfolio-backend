import React from "react";
import { Container, AppBar, Link, Typography } from "@mui/material";
import logo from "../../images/logo.png";
import useStyles from "./styles";
const Navbar = () => {
  const classes = useStyles();
  return (
    <AppBar className={classes.appBar} color="inherit">
      <Link to="/">
        <img
          component={Link}
          to="/"
          src={logo}
          alt="logo"
          height="40px"
          className={classes.logo}
        />
      </Link>
      <Container className={classes.linkContainer}>
        <Link to="/" className={classes.navbarLinks}>
          <Typography>Home</Typography>
        </Link>
        <Link to="/about" className={classes.navbarLinks}>
          <Typography>About</Typography>
        </Link>
        <Link to="/projects" className={classes.navbarLinks}>
          <Typography>Projects</Typography>
        </Link>
        <Link to="/contact" className={classes.navbarLinks}>
          <Typography>Contact</Typography>
        </Link>
      </Container>
    </AppBar>
  );
};

export default Navbar;
