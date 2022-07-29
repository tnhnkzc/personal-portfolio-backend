import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  homeContainer: {
    [theme.breakpoints.down("xs")]: {
      position: "absolute",
    },
  },
  footerContainer: {
    [theme.breakpoints.down("xs")]: {
      position: "absolute",
      bottom: "0",
      right: "0",
      left: "0",
      marginTop: "100px",
    },
  },
}));
