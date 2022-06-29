import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  appBar: {
    borderRadius: 15,
    margin: "10px",
    display: "flex",
    flexDirection: "row",
    padding: "10px 50px",
  },
  navBarItem: {
    float: "right",
  },
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "right",
    margin: "10px",
    gap: "10px",
  },
}));
