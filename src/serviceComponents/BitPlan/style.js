import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  bitPlan: {
    width: "100%",
    height: "auto",
    paddingTop: "50px",
    paddingBottom: "100px",
  },
  bigCont: {
    width: "100%",
    height: "auto",
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
    height: "auto",
  },
  item: {
    width: 390,
    height: 470,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    borderRadius: 10,
    backgroundColor: (dark) =>
      dark ? "rgb(22, 23, 26)" : "rgb(245, 245, 245)",
    [theme.breakpoints.down("xs")]: {
      width: "100%",
    },
  },
  topBox: {
    width: "100%",
    height: 150,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  iconBox: {
    marginTop: 40,
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: 100,
    height: 100,
    backgroundColor: "orange",
    borderRadius: 50,
    transition: "all 0.3s ease-in !important",
    cursor: "pointer",
    marginBottom: "20px",
    "&:hover": {
      width: 80,
      height: 80,
      "& $iconNum": {
        width: 23,
        height: 23,
        right: 5,
      },
      "& $icon": {
        fontSize: 38,
      },
    },
  },
  borderDiv: {
    border: "3px solid orange",
    borderRadius: 50,
    width: 100,
    height: 100,
    position: "absolute",
    transition: "all 0.3s ease-in !important",
    opacity: 0,
    "&:hover": {
      opacity: 1,
    },
  },
  icon: {
    fontSize: 50,
    color: "white",
    transition: "all 0.3s ease-in !important",
  },
  iconNum: {
    position: "absolute",
    transition: "all 0.3s ease-in",
    top: 0,
    right: 0,
    backgroundColor: "white",
    color: "#222",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: 30,
    height: 30,
    borderRadius: 15,
  },
  subtitle: {
    fontWeight: 500,
    fontSize: 26,
    marginTop: 10,
    marginBottom: 20,
  },
  smTxt: {
    width: "70%",
    textAlign: "center",
    lineHeight: 1.8,
    fontSize: 17,
  },
}));
