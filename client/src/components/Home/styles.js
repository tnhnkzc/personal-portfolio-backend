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
      marginTop: "150px",
    },
  },
  aboutContainer: {
    display: "flex !important",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    margin: "10px",
    marginTop: "150px",
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
  },
  text: {
    color: "beige",
    textAlign: "center",
  },
}));
