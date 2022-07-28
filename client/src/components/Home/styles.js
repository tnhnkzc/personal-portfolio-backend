import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  contentContainer: {
    display: "flex !important",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    margin: "10px",
    marginTop: "150px",
  },
  aboutContainer: {
    display: "flex !important",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    margin: "10px",
    marginTop: "150px",
  },
  logoContainer: {
    display: "flex !important",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    margin: "10px",
    gap: "15px",
  },
  text: {
    color: "beige",
    textAlign: "center",
  },
}));
