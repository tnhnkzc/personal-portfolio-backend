import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  container: {
    [theme.breakpoints.down("xs")]: {
      marginBottom: "415px",
    },
  },
  formContainer: {
    marginTop: "100px",
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
