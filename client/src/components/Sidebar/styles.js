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
      right: "0",
    },
  },

  githubLogo: {
    marginBottom: "10px",
    marginTop: "10px",
    [theme.breakpoints.down("xs")]: {
      textAlign: "center",
    },
  },
  linkedinLogo: {
    marginBottom: "10px",
  },
}));
