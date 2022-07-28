import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  footerContainer: {
    marginTop: "25px",
    borderRadius: "10px",
    position: "fixed",
    bottom: "0",
    width: "100% !important",
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
