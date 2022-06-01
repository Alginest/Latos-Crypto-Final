import { makeStyles } from "@material-ui/core";
export default makeStyles((theme) => ({
  aboutInfo: {
    width: "100%",
    height: "auto",
    position: "relative",
    backgroundColor: theme.palette.secondary.main,
    paddingTop: "100px",
    paddingBottom: "100px",
    [theme.breakpoints.down("sm")]: {
      height: 1100,
    },
    [theme.breakpoints.down("xs")]: {
      height: 1200,
    },
  },

  bigCont: {
    width: "100%",
    height: "406px",
    display: "flex",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      justifyContent: "center",
      height: "auto",
    },
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
      justifyContent: "center",
      height: "auto",
    },
  },
  img: {
    width: "100%",
  },
  title: {
    fontWeight: "bold",
    marginBottom: "30px",
  },
  boxRight: {
    width: "49%",
    marginRight: "1%",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      marginRight: "0",
      marginTop: "50px",
    },
    [theme.breakpoints.down("xs")]: {
      width: "100%",
      marginRight: "0",
      marginTop: "50px",
    },
  },
  boxLeft: {
    width: "49%",
    marginLeft: "1%",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      marginLeft: "0",
    },
    [theme.breakpoints.down("xs")]: {
      width: "100%",
      marginLeft: "0",
    },
  },
  paraSm: {
    textAlign: "left",
    margin: "15px 0",
    color: "#9899A5",
  },
  btnBox: {
    marginTop: "50px",
    display: "flex",
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
    },
  },
  btnCoinOne: {
    background: "linear-gradient(to right, #fdc830, #f37335)",
    color: "#fff",
    width: 150,
    height: 50,
    borderRadius: 30,
    cursor: "pointer",
    transition: "all 0.3s ease-in !important",
    fontWeight: "bold !important",
    "&:hover": {
      transform: "scale(1.1)",
    },
  },

  btnCoin: {
    background: "linear-gradient(to right, #fdc830, #f37335)",
    color: "white",
    width: "200px !important",
    height: 50,
    borderRadius: 30,
    marginLeft: 30,
    cursor: "pointer",
    transition: "all 0.3s ease-in !important",
    fontWeight: "bold !important",
    "&:hover": {
      transform: "scale(1.1)",
    },
    [theme.breakpoints.down("xs")]: {
      marginLeft: 0,
      marginTop: 20,
    },
  },
  svg: {
    width: "100%",
    border: "1px solid white",
    position: "absolute",
    bottom: 0,
    height: 200,
  },
}));
