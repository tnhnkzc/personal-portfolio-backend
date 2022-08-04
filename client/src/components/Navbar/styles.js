import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  appBar: {
    borderRadius: 15,
    flexWrap: "wrap",
    marginTop: "10px",
    display: "flex !important",
    flexDirection: "row !important",
    justifyContent: "space-between",
    padding: "10px ",
    position: "absolute",
    transitionTimingFunction: "ease-in",
    transition: "1.2s",
    delay: "1.2s",
  },
  logoContainer: {
    display: "flex !important",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingLeft: "25px",
  },
  userContainer: {
    display: "flex !important",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    flexWrap: "wrap",
    gap: "10px",
    [theme.breakpoints.down("xs")]: {
      width: "10px",
    },
  },

  mainContainer: {
    display: "flex !important",
    flexDirection: "row",
    justifyContent: "flex-end",
    flexWrap: "wrap",
    alignItems: "center",
    [theme.breakpoints.down("xs")]: {
      visibility: "hidden",
    },
  },

  navbarLinksUnderline: {
    textDecoration: "underline ",
  },
  navbarLinks: {
    color: "beige !important",
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
    marginRight: "10px",
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
