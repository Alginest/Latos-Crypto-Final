import { Typography } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import useStyles from "./style";
import { useGlobalContext } from "../../context";
const ShopHeader = () => {
  const { dark } = useGlobalContext();
  const classes = useStyles(dark);
  return (
    <section className={classes.shopHeader}>
      <Typography variant="h2">Shop Us</Typography>
      <Typography variant="h6">
        <Link to="/" className={classes.link}>
          Home
        </Link>{" "}
        / Shop Us
      </Typography>
    </section>
  );
};

export default ShopHeader;
