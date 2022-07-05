import React, { useState, useEffect } from "react";
import { Container, AppBar, Typography, Button, Avatar } from "@mui/material";
import { Link, useNavigate, useLocation } from "react-router-dom";
import logo from "../../images/logo.png";
import useStyles from "./styles";
import { useDispatch } from "react-redux";
import { LOGOUT } from "../../constants/actionTypes";

const Navbar = () => {
  const classes = useStyles();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const token = user?.token;
    setUser(JSON.parse(localStorage.getItem("profile")));
  }, [location]);

  const logout = () => {
    dispatch({ type: LOGOUT });
    navigate("/");
    setUser(null);
  };

  return (
    <AppBar className={classes.appBar} color="inherit">
      <Container className={classes.logoContainer}>
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
        {user && (
          <div className={classes.userContainer}>
            <Avatar alt={user.result.name} src={user.result.imageURL}>
              {user.result.name.charAt(0)}
            </Avatar>
            <Typography variant="h6">{user.result.name}</Typography>
            <Button color="secondary" variant="contained" onClick={logout}>
              Log Out
            </Button>
          </div>
        )}
      </Container>

      <Container className={classes.linkContainer}>
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
