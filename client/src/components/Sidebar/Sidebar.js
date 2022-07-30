import React, { useEffect } from "react";
import useStyles from "./styles";
import { Container, Grow, Typography } from "@mui/material";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import PictureAsPdfIcon from "@material-ui/icons/PictureAsPdf";
import MyPDF from "../../files/CV.pdf";

const Sidebar = () => {
  const classes = useStyles();

  return (
    <Grow in>
      <Container className={classes.mainContainer}>
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
              className={classes.cvLogo}
            />
          </a>
        </Typography>
      </Container>
    </Grow>
  );
};

export default Sidebar;
