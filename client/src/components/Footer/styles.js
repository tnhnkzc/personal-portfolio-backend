import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  footerContainer: {
    display: "block",
    left: "0",
    right: "0",
    bottom: "0",
    width: "100% !important",
    [theme.breakpoints.down("xs")]: {
      position: "fixed",
      bottom: "0",
      right: "0",
      left: "0",
      width: "100% !important",
    },
    [theme.breakpoints.up("sm")]: {
      marginTop: "150px !important",
      position: "absolute",
    },
  },
  footerTextContainer: {
    display: "flex !important",
    justifyContent: "center",
    flexWrap: "wrap",
    alignItems: "center",
    bottom: "0",
  },
  footerText: {
    color: "beige",
  },
}));
