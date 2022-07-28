import React, { useState, useEffect } from "react";
import {
  Container,
  TextField,
  Button,
  Typography,
  Paper,
  TextareaAutosize,
  Grow,
} from "@material-ui/core";
import useStyles from "./styles";
import { sendEmail } from "../../api/index";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Alert from "@mui/material/Alert";
import WebFont from "webfontloader";

const Contact = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Droid Sans", "Chilanka", "Grape Nuts"],
      },
    });
  }, []);

  const [contactFormData, setContactFormData] = useState({
    email: "",
    fullName: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const clear = () => {
    setContactFormData({ email: "", fullName: "", subject: "", message: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      contactFormData.message !== "" &&
      contactFormData.fullName !== "" &&
      contactFormData.subject !== ""
    ) {
      setStatus("success");
      setTimeout(() => {
        setStatus("");
      }, 1500);
      setTimeout(() => {
        navigate("/");
      }, 2000);
      dispatch(sendEmail(contactFormData));
    } else {
      setStatus("error");
      setTimeout(() => {
        setStatus("");
      }, 2000);
      clear();
    }
  };

  return (
    <Grow in>
      <Container className={classes.container}>
        <Typography
          style={{ fontFamily: "Chilanka" }}
          className={classes.formTitle}
          variant="h2"
        >
          Contact Me !
        </Typography>
        <Paper className={classes.formContainer}>
          <form
            style={{
              background:
                "linear-gradient(274deg, rgba(122,12,56,0.5172443977591037) 15%, rgba(148,218,233,0.458420868347339) 74%)",
            }}
            autoComplete="off"
            noValidate
            className={classes.form}
            onSubmit={handleSubmit}
          >
            <TextField
              className={classes.textField}
              labelClassName={classes.placeholder}
              name="email"
              variant="outlined"
              label="Email"
              fullWidth
              value={contactFormData.email}
              onChange={(e) =>
                setContactFormData({
                  ...contactFormData,
                  email: e.target.value,
                })
              }
            />
            <TextField
              className={classes.textField}
              name="fullName"
              variant="outlined"
              label="Full Name"
              fullWidth
              value={contactFormData.fullName}
              onChange={(e) =>
                setContactFormData({
                  ...contactFormData,
                  fullName: e.target.value,
                })
              }
            />
            <TextField
              className={classes.textField}
              name="subject"
              variant="outlined"
              label="Subject"
              fullWidth
              value={contactFormData.subject}
              onChange={(e) =>
                setContactFormData({
                  ...contactFormData,
                  subject: e.target.value,
                })
              }
            />
            <div>
              <TextareaAutosize
                style={{
                  background: "#11ffee00",
                  color: "black",
                  borderColor: "black",
                }}
                className={classes.textArea}
                name="message"
                minRows={10}
                placeholder="How can I help you?"
                value={contactFormData.message}
                onChange={(e) =>
                  setContactFormData({
                    ...contactFormData,
                    message: e.target.value,
                  })
                }
              />
            </div>
            <Button
              style={{ fontFamily: "Droid Sans" }}
              variant="contained"
              color="primary"
              type="submit"
            >
              Submit
            </Button>
          </form>
        </Paper>
        {status === "success" && (
          <Container>
            <Alert variant="filled" severity="success">
              Your message is successfully sent !
            </Alert>
          </Container>
        )}
        {status === "error" && (
          <Container fullWidth>
            <Alert variant="filled" severity="error">
              There has been a problem ! Please try again later.
            </Alert>
          </Container>
        )}
      </Container>
    </Grow>
  );
};

export default Contact;
