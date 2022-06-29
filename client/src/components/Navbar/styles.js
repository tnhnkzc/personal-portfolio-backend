import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  appBar: {
    borderRadius: 15,
    margin: "10px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: "10px 50px",
  },
  navBarItem: {
    float: "right",
  },
  container1: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    margin: "10px",
    gap: "10px",
  },
}));
