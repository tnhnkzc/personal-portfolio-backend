import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  container: {
    [theme.breakpoints.down("xs")]: {
      marginBottom: "100px",
    },
  },
  formContainer: {
    marginTop: "75px",
    backgroundColor: "beige",
  },

  textField: {
    marginBottom: "10px",
  },
  form: {
    padding: "10px",
  },
  formTitle: {
    color: "beige",
    marginTop: "150px",
    textAlign: "center",
    [theme.breakpoints.down("sm")]: {
      fontSize: "36px !important",
    },
  },
  textArea: {
    width: "100% !important",
    marginBottom: "10px",
    color: "white",
    [theme.breakpoints.down("xs")]: {
      width: "100% !important",
    },
  },

  placeholder: {
    color: "white",
  },
}));
