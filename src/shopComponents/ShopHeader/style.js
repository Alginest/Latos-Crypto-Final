import { makeStyles } from "@material-ui/core";

export default makeStyles(() => ({
  shopHeader: {
    width: "100%",
    height: 500,
    backgroundColor: (dark) => (dark ? "#262626" : "#fcf3f2"),
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  link: {
    color: (dark) => (dark ? "#fff" : "#222"),
    transition: "all 0.3s ease-in",
    "&:hover": {
      color: "orange",
    },
  },
}));
