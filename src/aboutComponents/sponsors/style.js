import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  sponsors: {
    width: "100%",
    height: "auto",
    paddingTop: "100px",
    paddingBottom: "100px",
  },
  title: {
    marginBottom: 50,
  },
  gridCont: {
    width: "100%",
    height: "auto",
    [theme.breakpoints.down("md")]: {
      justifyContent: "center",
    },
  },
  gridItem: {
    display: "flex",
    justifyContent: "center",
  },
  img: {
    boxShadow: (dark) =>
      dark
        ? "3px 3px 5px 0px rgba(255,255,255,0.75)"
        : "10px 10px 10px 0px rgba(0,0,0,0.75)",
  },
}));
