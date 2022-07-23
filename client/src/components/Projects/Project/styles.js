import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  media: {
    height: 0,
    paddingTop: "56.25%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    backgroundBlendMode: "darken",
  },
  gitHub: {
    textDecoration: "none",
    color: "black",
  },
  siteLink: {
    textDecoration: "none",
    color: "black",
  },
  cardActions: {
    display: "flex !important",
    gap: "10px",
    justifyContent: "flex-end",
  },
}));
