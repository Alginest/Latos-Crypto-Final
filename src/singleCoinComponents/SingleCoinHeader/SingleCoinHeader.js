import { Typography } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import useStyles from "./style";
import { useGlobalContext } from "../../context";
const SingleCoinHeader = ({ id }) => {
  const name = id.charAt(0).toUpperCase() + id.slice(1);
  const { dark } = useGlobalContext();
  const classes = useStyles(dark);
  return (
    <section className={classes.singleCoinHeader}>
      <Typography variant="h2">{name}</Typography>
      <Typography variant="h6">
        <Link to="/" className={classes.link}>
          Home
        </Link>{" "}
        / {name}
      </Typography>
    </section>
  );
};

export default SingleCoinHeader;
