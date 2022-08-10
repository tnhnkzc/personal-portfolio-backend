import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  appBar: {
    background: "transparent !important",
    width: "100%",
    height: "150px",
  },
  toolBar: {
    background: "transparent !important",
    width: "100%",
    height: "150px",
    display: "flex !important",
    flexDirection: "row",
    justifyContent: "center",
  },
  logo: {
    width: "auto",
    height: "150px",
    position: "relative",
    top: "20px",
    [theme.breakpoints.down("sm")]: {
      width: "auto",
      height: "100px",
    },
  },
  logoContainer: {
    display: "flex !important",
    justifyContent: "center",
    alignItems: "center",
    width: "50% !important",
  },
  navbarLinksContainer: {
    width: "50% !important",
    height: "150px",
    display: "flex !important",
    flexDirection: "row",
    justifyContent: "flex-end",
    [theme.breakpoints.down("xs")]: {
      visibility: "hidden",
    },
  },
  buttonContainers: {
    width: "33% !important",
  },
  navbarLinks: {
    color: "beige !important",
  },

  // Hamburger Menu Styles

  hamburgerMenu: {
    bottom: "5px",
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
