import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  footerContainer: {
    marginTop: "200px",
    borderRadius: "10px",
    display: "block",
    left: "0",
    right: "0",
    bottom: "0",
    width: "100% !important",
    [theme.breakpoints.down("xs")]: {
      position: "absolute",
      bottom: "0",
      right: "0",
      left: "0",
      width: "100% !important",
    },
    [theme.breakpoints.down("sm")]: { marginTop: "150px !important" },
  },
  footerTextContainer: {
    display: "flex !important",
    justifyContent: "center",
    alignItems: "center",
  },
  footerText: {
    color: "beige",
  },
}));
