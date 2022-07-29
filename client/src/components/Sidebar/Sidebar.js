import React, { useEffect } from "react";
import useStyles from "./styles";
import { Container, Grow, Typography } from "@mui/material";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import PictureAsPdfIcon from "@material-ui/icons/PictureAsPdf";
import { Link } from "react-router-dom";
import MyPDF from "../../files/CV.pdf";

const Sidebar = () => {
  const classes = useStyles();

  let prevScrollpos = window.pageYOffset;
  window.onscroll = function () {
    let currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      document.getElementById("mainContainer").style.right = "0";
    } else {
      document.getElementById("mainContainer").style.right = "-40px";
    }
    prevScrollpos = currentScrollPos;
  };

  return (
    <Grow in>
      <Container
        id="mainContainer"
        className={classes.mainContainer}
        style={{
          background:
            "linear-gradient(90deg, rgba(122,12,56,1) 0%, rgba(148,187,233,1) 100%)",
        }}
      >
        <Typography>
          <a target="_blank" href="https://www.github.com/tnhnkzc">
            <GitHubIcon
              className={classes.githubLogo}
              fontSize="medium"
              style={{
                color: "beige",
              }}
            />
          </a>
        </Typography>
        <Typography>
          <a target="_blank" href="https://www.linkedin.com/in/tunahankuzucu/">
            <LinkedInIcon
              className={classes.linkedinLogo}
              style={{
                color: "beige",
              }}
            />
          </a>
        </Typography>
        <Typography>
          <a href={MyPDF} target="_blank" download="CV.pdf">
            <PictureAsPdfIcon
              style={{
                color: "beige",
              }}
            />
          </a>
        </Typography>
      </Container>
    </Grow>
  );
};

export default Sidebar;
