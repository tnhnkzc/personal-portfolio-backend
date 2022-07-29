import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  container: {
    marginTop: "125px",
    [theme.breakpoints.down("xs")]: {
      marginBottom: "50px",
    },
  },

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
    justifyContent: "center",
    marginBottom: "25px",
  },
}));
