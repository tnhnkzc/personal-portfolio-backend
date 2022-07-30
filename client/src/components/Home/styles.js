import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  contentContainer: {
    display: "flex !important",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    margin: "10px",
    marginTop: "150px",
    [theme.breakpoints.down("xs")]: {
      marginTop: "100px",
    },
  },
  aboutContainer: {
    display: "flex !important",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    margin: "10px",
    marginTop: "150px",
    [theme.breakpoints.down("xs")]: {
      marginTop: "100px",
    },
    [theme.breakpoints.down("md")]: {
      marginTop: "100px",
    },
  },
  languagesContainer: {
    marginTop: "150px",
    [theme.breakpoints.down("xs")]: {
      marginTop: "100px",
    },
  },

  logoContainer: {
    display: "flex !important",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    margin: "10px",
    gap: "15px",
    [theme.breakpoints.down("xs")]: {
      gap: "10px",
      marginBottom: "150px",
    },
    [theme.breakpoints.down("md")]: { marginBottom: "50px" },
  },
  text: {
    color: "beige",
    textAlign: "center",
  },
}));
