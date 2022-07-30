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

  mainContainer: {
    display: "flex !important",
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      visibility: "hidden",
    },
  },

  navbarLinks: {
    textDecoration: "none !important",
    color: "inherit !important",
  },
  logo: {
    float: "left !important",
  },
  SwipeableDrawer: {},
  hamburgerMenu: {
    [theme.breakpoints.up("sm")]: {
      visibility: "hidden",
    },
  },
  chevronIcon: {
    width: "50px",
  },
  chevronIconDiv: {
    width: "100%",
  },
  hamburgerMenuContainer: {
    display: "flex !important",
    flexDirection: "column",
    height: "100%",
  },
  hamburgerMenuIcon: {
    color: "beige",
  },
  hmbrgMenuUserContainer: {
    display: "flex !important",
    flexDirection: "column",
    gap: "10px",
  },
  hmbrgMenuLinkContainer: {
    display: "flex !important",
    flexDirection: "column",
    margin: "0",
  },
}));
