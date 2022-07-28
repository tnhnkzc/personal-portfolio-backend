import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  mainContainer: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "red",
    position: "fixed",
    right: "0",
    width: "auto !important",
    height: "auto",
    borderRadius: "10px",
  },
  githubLogo: {
    marginBottom: "10px",
    marginTop: "10px",
  },
  linkedinLogo: {
    marginBottom: "10px",
  },
}));
