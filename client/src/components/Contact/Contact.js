import React, { useState } from "react";
import {
  Container,
  TextField,
  Button,
  Typography,
  Paper,
  TextareaAutosize,
} from "@material-ui/core";
import useStyles from "./styles";
import { sendEmail } from "../../api/index";
import axios from "axios";

const Contact = () => {
  const classes = useStyles();

  const [contactFormData, setContactFormData] = useState({
    fullName: "",
    subject: "",
    message: "",
  });

  const [send, setSend] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (contactFormData.message !== "") {
      axios
        .post("/contact", contactFormData, {
          headers: {
            "Content-type": "application/json",
          },
        })
        .then((res) => {
          alert("Email sent successfully!");
        })
        .catch((error) => {
          {
            console.log(error);
          }
        });
    }
    console.log(send);
  };

  return (
    <Container className={classes.container}>
      <Typography className={classes.formTitle} variant="h2">
        Contact Me !
      </Typography>
      <Paper className={classes.formContainer}>
        <form
          autoComplete="off"
          noValidate
          className={classes.form}
          onSubmit={handleSubmit}
        >
          <TextField
            className={classes.textField}
            name="email"
            variant="outlined"
            label="Email"
            fullWidth
            value={contactFormData.email}
            onChange={(e) =>
              setContactFormData({ ...contactFormData, email: e.target.value })
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
          <Button variant="contained" color="primary" type="submit">
            Submit
          </Button>
        </form>
      </Paper>
    </Container>
  );
};

export default Contact;
