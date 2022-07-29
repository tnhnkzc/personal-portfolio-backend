import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  body: {
    [theme.breakpoints.down("xs")]: {
      overflow: "hidden",
    },
  },
  footerContainer: {
    marginTop: "25px",
    borderRadius: "10px",
    position: "absolute",
    left: "0",
    right: "0",
    bottom: "0",
    width: "100% !important",
    [theme.breakpoints.down("xs")]: {
      bottom: "0",
      left: "0",
      right: "0",
    },
  },
  footerTextContainer: {
    display: "flex !important",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.down("xs")]: {},
  },
  footerText: {
    color: "beige",
  },
}));
