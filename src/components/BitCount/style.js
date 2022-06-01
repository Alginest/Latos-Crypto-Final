import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  bitCount: {
    width: "100%",
    height: "auto",
    paddingTop: "50px",
    paddingBottom: "50px",
    backgroundColor: theme.palette.secondary.main,
  },
  bigCont: {
    width: "100%",
    height: "auto",
    display: "flex",
    [theme.breakpoints.down("xs")]: {
      justifyContent: "center",
    },
  },
  gridCont: {
    width: "100%",
    height: "inherit",
    display: "flex",
    alignItems: "center",
    [theme.breakpoints.down("xs")]: {
      justifyContent: "center",
    },
  },
  gridItem: {
    height: "inherit",
    display: "flex",
    alignItems: "center",
    width: "100%",
    [theme.breakpoints.down("md")]: {
      justifyContent: "center",
    },
    [theme.breakpoints.down("sm")]: {
      justifyContent: "center",
    },
    [theme.breakpoints.down("xs")]: {
      justifyContent: "center",
    },
  },
  smBox: {
    width: "300px",
    height: "180px",
    position: "relative",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: theme.palette.primary.main,
    borderRadius: 5,
  },
  //linear-gradient(to right, #fdc830, #f37335);
  iconBox: {
    position: "absolute",
    top: "-40px",
    fontSize: 10,
    width: 80,
    height: 80,
    border: `2px solid ${theme.palette.primary.main}`,
    borderRadius: "40px",
    background: "linear-gradient(to right, #fdc830, #f37335)",
    color: theme.palette.primary.main,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    fontSize: 40,
  },
}));
