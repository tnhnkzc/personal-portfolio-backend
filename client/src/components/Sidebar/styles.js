import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  mainContainer: {
    display: "flex",
    flexDirection: "column",
    position: "fixed",
    right: "0",
    width: "auto !important",
    borderRadius: "10px",
    [theme.breakpoints.down("xs")]: {
      marginTop: "150px",
    },
  },
  links: {
    marginTop: "150px",
    display: "flex",
    flexDirection: "column",
    position: "fixed",
    left: "0",
    height: "50px !important",
    width: "40px !important",
  },

  githubLogo: {
    marginBottom: "10px",
    marginTop: "10px",
    [theme.breakpoints.down("xs")]: {
      width: "18px",
    },
  },
  linkedinLogo: {
    marginBottom: "10px",
    [theme.breakpoints.down("xs")]: {
      width: "18px",
    },
  },
  cvLogo: {
    marginBottom: "10px",
    [theme.breakpoints.down("xs")]: {
      width: "18px",
    },
  },
}));
