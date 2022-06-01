import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  news: {
    width: "100%",
    height: "auto",
    backgroundColor: theme.palette.secondary.main,
    paddingTop: "100px",
    paddingBottom: "100px",
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
  gridItem: {
    display: "flex",
    justifyContent: "center",
  },
  gridBox: {
    width: "90%",
    display: "block",
    position: "relative",
    height: "590px",
    backgroundColor: (dark) => (dark ? "#fff" : "#222"),
    [theme.breakpoints.down("md")]: {
      height: "auto",
      paddingBottom: "50px",
    },
  },
  img: {
    width: "100%",
  },
  dateBox: {
    position: "absolute",
    top: 10,
    left: 15,
    display: "flex",
  },
  date: {
    padding: "5px 15px",
    backgroundColor: "#222",
    color: "white",
  },
  dateSpan: {
    color: "white",
    padding: "5px 15px",
    backgroundColor: "orange",
  },
  btnCore: {
    background: "linear-gradient(to right, #fdc830, #f37335)",
    color: "white",
    width: 170,
    height: 50,
    borderRadius: 30,
    marginTop: "30px",
    cursor: "pointer",
    transition: "all 0.3s ease-in !important",
    fontWeight: "bold !important",
    "&:hover": {
      transform: "scale(1.1)",
    },
  },
}));
