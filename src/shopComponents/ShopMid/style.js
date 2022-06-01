import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  shopMid: {
    width: "100%",
    height: "auto",
    paddingTop: "100px",
    paddingBottom: "100px",
  },
  bigCont: {
    width: "100%",
    height: "auto",
  },
  gridCont: {
    width: "100%",
    height: "auto",
  },
  gridItem: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
  },
  item: {
    width: 555,
    height: 650,
    margin: "20px 0",
    backgroundColor: (dark) => (dark ? "#222" : "rgb(245, 245, 245)"),
    position: "relative",
    transition: "all 0.3s ease-in",
    [theme.breakpoints.down("xs")]: {
      height: "550px",
    },
  },
  active: {
    width: 555,
    height: 650,
    margin: "20px 0",
    backgroundColor: "red",
    position: "relative",
    [theme.breakpoints.down("xs")]: {
      height: "550px",
    },
    "&::before": {
      content: '""',
      position: "absolute",
      width: "100%",
      height: "56%",
      zIndex: "10",
      top: 0,
      left: 0,
      boxShadow: "rgba(0, 0, 0, .7) 0 0 0 100000px inset",
      [theme.breakpoints.down("xs")]: {
        height: "46%",
      },
    },
    "&::after": {
      content: '"Add To Cart"',
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      fontWeight: "bold",
      fontSize: 18,
      width: 200,
      height: 50,
      top: 0,
      left: 0,
      borderRadius: 2,
      zIndex: 20,
      position: "absolute",
      color: "white",
      cursor: "pointer",
      background: "linear-gradient(to right, #fdc830, #f37335)",
    },
  },
  img: {
    width: "100%",
    height: 364,
    [theme.breakpoints.down("xs")]: {
      height: "250px",
    },
  },
  underline: {
    marginTop: "20px",
    width: "100%",
    height: 2,
    marginBottom: 20,
    backgroundColor: (dark) => (dark ? "#fff" : "#222"),
    borderRadius: 10,
  },
  ratePrice: {
    display: "flex",
    justifyContent: "space-between",
  },
}));
