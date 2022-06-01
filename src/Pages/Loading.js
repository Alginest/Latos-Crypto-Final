import React from "react";
import { makeStyles } from "@material-ui/styles";
import ReactLoading from "react-loading";
const useStyles = makeStyles(() => ({
  loading: {
    backgroundColor: "#222",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));
const Spinner = () => (
  <ReactLoading type={"bars"} color={"#fff"} height={"15%"} width={"15%"} />
);

const Loading = () => {
  const classes = useStyles();
  return (
    <section className={classes.loading}>
      <Spinner />
    </section>
  );
};

export default Loading;
