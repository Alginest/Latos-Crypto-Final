import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  bitCoinInfo: {
    width: "100%",
    height: "auto",
    paddingTop: "50px",
    paddingBottom: "50px",
    [theme.breakpoints.down("md")]: {
      paddingTop: "100px",
      paddingBottom: "100px",
    },
  },
  bigCont: {
    width: "100%",
    display: "flex",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },
  },
  underline: {
    width: 70,
    height: 3,
    backgroundColor: (dark) => (dark ? "#fff" : "#222"),
    margin: "20px 0",
  },
  aboutInfo: {
    width: "50%",
    [theme.breakpoints.down("md")]: {
      width: "100%",
      flexDirection: "column",
      display: "flex",
      alignItems: "center",
    },
  },
  imageBox: {
    width: "50%",
    [theme.breakpoints.down("md")]: {
      width: "100%",
      display: "flex",
      justifyContent: "center",
    },
  },
  img: {
    width: "600px",
    [theme.breakpoints.down("xs")]: {
      width: "100%",
    },
  },
  text: {
    width: "500px",
    [theme.breakpoints.down("xs")]: {
      width: "100%",
    },
  },
}));
