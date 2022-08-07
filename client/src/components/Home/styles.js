import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  contentContainer: {
    display: "flex !important",
    flexWrap: "wrap",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "100px",
    [theme.breakpoints.down("xs")]: {
      marginTop: "150px",
    },
  },

  aboutContainer: {
    display: "flex !important",
    flexWrap: "wrap",
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
    display: "flex !important",
    flexDirection: "row ",
    marginTop: "150px",
    [theme.breakpoints.down("xs")]: {
      marginTop: "100px",
      display: "flex !important",
      flexDirection: "column ",
      marginBottom: "100px",
    },
  },
  skillsContainer: {
    display: "flex !important",
    flexDirection: "row ",
    marginTop: "150px",
    [theme.breakpoints.down("xs")]: {
      marginTop: "100px",
      display: "flex !important",
      flexDirection: "column ",
      marginBottom: "100px",
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
  softSkillsContainer: {
    display: "flex",
    [theme.breakpoints.down("xs")]: {
      marginTop: "20px",
      gap: "10px",
    },
  },
  softSkillsImage: {
    [theme.breakpoints.down("xs")]: {
      width: "100%",
    },
  },
  competencesImage: {
    [theme.breakpoints.down("xs")]: {
      width: "100%",
    },
  },
}));
