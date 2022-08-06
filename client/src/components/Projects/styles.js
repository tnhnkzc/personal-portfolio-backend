import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  addButton: {
    float: "right",
  },
  addButtonText: {
    textDecoration: "none",
    color: "white",
  },
  circularProgress: {
    marginTop: "100px",
  },
  title: {
    color: "beige",
  },
  titleContainer: {
    display: "flex !important",
    flexWrap: "wrap",
    marginTop: "100px",
    justifyContent: "center",
    marginBottom: "25px",
    [theme.breakpoints.down("xs")]: {
      marginTop: "150px",
    },
  },
  projectsContainer: {
    marginBottom: "150px",
  },
}));
