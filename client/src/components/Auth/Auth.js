import React, { useEffect } from "react";
import { Container, Button } from "@material-ui/core";
import useStyles from "./styles";
import { GoogleLogin } from "react-google-login";
import { gapi } from "gapi-script";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import Icon from "./icon";
const Auth = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId:
          "119267361450-s5vanhk669lld8f4ojurerdaaldphptn.apps.googleusercontent.com",
        scope: "email",
      });
    }

    gapi.load("client:auth2", start);
  }, []);
  const googleSuccess = async (res) => {
    const result = res?.profileObj;
    const token = res?.tokenId;
    try {
      dispatch({ type: "AUTH", data: { result, token } });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  const googleFailure = (error) => {
    console.log(error);
    console.log("Google Sign in was unsuccessful! Try again later.");
  };
  return (
    <Container>
      <GoogleLogin
        clientId="496647822264-hj4l3f3i50de649810b6fpmri1iforva.apps.googleusercontent.com"
        render={(renderProps) => (
          <Button
            className={classes.googleButton}
            color="primary"
            onClick={renderProps.onClick}
            disabled={renderProps.disabled}
            variant="contained"
            startIcon={<Icon />}
          >
            Google Sign In
          </Button>
        )}
        buttonText="Login"
        onSuccess={googleSuccess}
        onFailure={googleFailure}
        cookiePolicy={"single_host_origin"}
      />
    </Container>
  );
};

export default Auth;
