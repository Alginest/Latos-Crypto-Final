import React from "react";
import { CircularProgress, makeStyles } from "@material-ui/core";
const useStyles = makeStyles(() => ({
  center: {
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
  },
}));
const Loading = () => {
  const classes = useStyles();
  return (
    <div className={classes.center}>
      <CircularProgress color="primary" />;
    </div>
  );
};

export default Loading;
