import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  appBar: {
    borderRadius: 15,
    marginTop: "10px",
    display: "flex !important",
    flexDirection: "row !important",
    justifyContent: "space-between",
    padding: "10px 50px",
    position: "absolute",
  },
  logoContainer: {
    display: "flex !important",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: "10px",
  },
  userContainer: {
    display: "flex !important",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: "10px",
    [theme.breakpoints.down("xs")]: {
      width: "10px",
    },
  },
  logoutButton: {
    [theme.breakpoints.down("xs")]: {
      width: "10px",
    },
  },
  usernameContainer: {
    [theme.breakpoints.down("xs")]: {
      width: "10px",
    },
  },

  linkContainer: {
    display: "flex !important",
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    margin: "10px",
    gap: "10px",
  },
  navbarLinks: {
    textDecoration: "none !important",
    color: "inherit !important",
  },
  logo: {
    float: "left !important",
  },
}));
