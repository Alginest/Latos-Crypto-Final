import { makeStyles } from "@material-ui/core";
export default makeStyles((theme) => ({
  started: {
    width: "100%",
    height: "auto",
    paddingTop: "50px",
    paddingBottom: "100px",
    backgroundColor: theme.palette.secondary.main,
  },
  bigCont: {
    width: "100%",
  },
  center: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  underline: {
    marginTop: "20px",
    width: 100,
    height: 5,
    backgroundColor: (dark) => (dark ? "#fff" : "#222"),
    borderRadius: 10,
  },
  lorem: {
    width: "600px",
    marginTop: "20px",
    marginBottom: "100px",
    [theme.breakpoints.down("md")]: {
      width: "100%",
    },
  },
  gridCont: {
    width: "100%",
    height: "auto",
    display: "flex",
    [theme.breakpoints.down("md")]: {
      width: "100%",
      justifyContent: "center",
    },
  },
  item: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    height: 300,
  },
  iconBox: {
    width: 130,
    height: 130,
    borderRadius: 70,
    color: "#fff",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    border: (dark) => (dark ? `1px solid  #fff` : `1px solid  #222`),
    cursor: "pointer",

    "&:hover": {
      background: "linear-gradient(to right, #fdc830, #f37335) ",
    },
  },
  icon: {
    fontSize: 30,
    color: (dark) => (dark ? "#fff" : "#222"),
  },
}));
