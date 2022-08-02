import React, { useState, useEffect } from "react";
import useStyles from "./styles";
import { Button, Container, Grow, Typography } from "@mui/material";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import PictureAsPdfIcon from "@material-ui/icons/PictureAsPdf";
import MyPDF from "../../files/CV.pdf";
import { motion } from "framer-motion";

const Sidebar = () => {
  const classes = useStyles();

  const [show, setShow] = useState(true);

  const controlSidebar = () => {
    if (window.scrollY > 75) {
      setShow(false);
    } else if (window.scrollY < 75) {
      setShow(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", controlSidebar);
    return () => {
      window.removeEventListener("scroll", controlSidebar);
    };
  }, []);

  return (
    show && (
      <Grow in>
        <Container className={classes.mainContainer}>
          <motion.button
            style={{
              backgroundColor: "#330033",
              border: "none",
              display: "flex",
              width: "30px",
              height: "40px",
              marginBottom: "10px",
            }}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            <Typography className={classes.githubButton}>
              <a target="_blank" href="https://www.github.com/tnhnkzc">
                <GitHubIcon
                  className={classes.githubLogo}
                  fontSize="medium"
                  style={{
                    color: "beige",
                    marginBottom: "10px",
                    marginTop: "10px",
                  }}
                />
              </a>
            </Typography>
          </motion.button>
          <motion.button
            style={{
              backgroundColor: "#330033",
              border: "none",
              display: "flex",
              width: "30px",
              height: "40px",
            }}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            <Typography>
              <a
                target="_blank"
                href="https://www.linkedin.com/in/tunahankuzucu/"
              >
                <LinkedInIcon
                  className={classes.linkedinLogo}
                  style={{
                    color: "beige",
                  }}
                />
              </a>
            </Typography>
          </motion.button>
          <motion.button
            style={{
              backgroundColor: "#330033",
              border: "none",
              display: "flex",
              width: "30px",
              height: "40px",
            }}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            <Typography>
              <a href={MyPDF} target="_blank" download="CV.pdf">
                <PictureAsPdfIcon
                  style={{
                    color: "beige",
                  }}
                  className={classes.cvLogo}
                />
              </a>
            </Typography>
          </motion.button>
        </Container>
      </Grow>
    )
  );
};

export default Sidebar;
