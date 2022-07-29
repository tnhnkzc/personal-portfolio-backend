import React, { useState, useEffect } from "react";
import { Container, AppBar, Typography, Button, Avatar } from "@mui/material";
import { Link, useNavigate, useLocation } from "react-router-dom";
import logo from "../../images/logo.png";
import useStyles from "./styles";
import { useDispatch } from "react-redux";
import { LOGOUT } from "../../constants/actionTypes";
import decode from "jwt-decode";
import WebFont from "webfontloader";

const Navbar = () => {
  const classes = useStyles();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Droid Sans", "Chilanka", "KoHo"],
      },
    });
  }, []);

  useEffect(() => {
    const token = user?.token;
    if (token) {
      const decodedToken = decode(token);

      if (decodedToken.exp * 1000 < new Date().getTime()) logout();
    }
    setUser(JSON.parse(localStorage.getItem("profile")));
  }, [location]);

  const logout = () => {
    dispatch({ type: LOGOUT });
    navigate("/");
    setUser(null);
  };

  // Hide navbar when scrolling
  let prevScrollpos = window.pageYOffset;
  window.onscroll = function () {
    let currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      document.getElementById("navbar").style.top = "0";
    } else {
      document.getElementById("navbar").style.top = "-100px";
    }
    prevScrollpos = currentScrollPos;
  };

  return (
    <AppBar
      className={classes.appBar}
      id="navbar"
      style={{
        background:
          "linear-gradient(90deg, rgba(51,0,51,1) 26%, rgba(0,0,0,1) 39%, rgba(2,0,29,1) 64%, rgba(51,0,51,1) 77%)",
      }}
    >
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
              {user.result.username.charAt(0)}
            </Avatar>
            <Typography variant="h6">{user.result.name}</Typography>
            <Button color="secondary" variant="contained" onClick={logout}>
              Log Out
            </Button>
          </div>
        )}
      </Container>

      <Container className={classes.linkContainer}>
        <Button
          style={{ fontFamily: "Droid Sans" }}
          component={Link}
          to="/projects"
          className={classes.navbarLinks}
        >
          Projects
        </Button>
        <Button
          style={{ fontFamily: "Droid Sans" }}
          component={Link}
          to="/contact"
          className={classes.navbarLinks}
        >
          Contact
        </Button>
      </Container>
    </AppBar>
  );
};

export default Navbar;
