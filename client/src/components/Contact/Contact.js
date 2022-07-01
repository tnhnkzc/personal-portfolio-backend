import React from "react";
import { Container } from "@mui/material";
import useStyles from "./styles";

const Contact = () => {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <div>Contact</div>
    </Container>
  );
};

export default Contact;
