import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  googleButton: {
    marginBottom: "10px",
  },
  form: {
    borderRadius: "10px",
    backgroundColor: "white",
    marginTop: "250px",
    [theme.breakpoints.down("xs")]: {
      marginBottom: "370px",
    },
  },
  formGrid: {
    padding: "10px",
  },
}));
