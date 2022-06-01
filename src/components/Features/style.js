import { makeStyles } from "@material-ui/core";
export default makeStyles((theme) => ({
  features: {
    width: "100%",
    height: "auto",
    position: "relative",
    paddingTop: "50px",
    paddingBottom: "50px",
  },
  center: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  underline: {
    width: 100,
    height: 5,
    backgroundColor: (props) => (props.dark ? "#fff" : "#222"),
    borderRadius: 10,
  },
  bigCont: {
    width: "100%",
    height: "inherit",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "100px",
  },
  gridCont: {
    width: "100%",
    height: "auto",
    alignItems: "center",
    justifyContent: "center",
  },
  gridItem: {
    width: "400px",
    height: "360px",
    position: "relative",
  },
  contSm: {
    width: "90%",
    height: "300px",
    zIndex: 1,
    position: "absolute",
    bottom: 40,
    left: 0,
    borderRadius: 30,
    backgroundColor: theme.palette.primary.main,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    transition: "all 0.5s ease-in-out",
    "&:hover": {
      bottom: 50,
    },
  },
  contXs: {
    width: "80%",
    height: "320px",
    background:
      "linear-gradient(to right, #fdc830, #f37335)" /* Chrome 10-25, Safari 5.1-6 */,
    zIndex: -1,
    position: "absolute",
    top: 0,
    left: 20,
    borderRadius: 30,
  },
  lorem: {
    marginTop: "20px",
  },
  "@keyframes myEffect": {
    "0%": {
      opacity: 1,
      transform: "translateY(-20%)",
    },
    "100%": {
      opacity: 1,
      transform: "translateY(0)",
    },
  },
}));
