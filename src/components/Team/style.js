import { makeStyles } from "@material-ui/core";
export default makeStyles((theme) => ({
  team: {
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
  caroWrap: {
    width: "100%",
    height: "auto",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  memberBox: {
    width: "300px",
    height: "560px",
    position: "relative",
    backgroundColor: (dark) => (dark ? "#16171a" : "#e6e6e6"),
    paddingBottom: "10px",
    borderRadius: "10px",
    transition: "all 0.3s ease-in",
    "&:hover": {
      backgroundColor: (dark) => (dark ? "#131111" : "#f7f7f7"),
    },
    [theme.breakpoints.down("xs")]: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },
  },

  memberImg: {
    width: "100%",
    height: "450px",
    borderTopLeftRadius: "10px",
    borderTopRightRadius: "10px",
    zIndex: 999,
    objectFit: "cover",
  },
}));
