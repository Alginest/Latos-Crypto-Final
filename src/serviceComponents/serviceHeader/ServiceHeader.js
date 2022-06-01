import { Typography } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import useStyles from "./style";
import { useGlobalContext } from "../../context";
const ServiceHeader = () => {
  const { dark } = useGlobalContext();
  const classes = useStyles(dark);
  return (
    <section className={classes.serviceHeader}>
      <Typography variant="h2">Service Us</Typography>
      <Typography variant="h6">
        <Link to="/" className={classes.link}>
          Home
        </Link>{" "}
        / Service Us
      </Typography>
    </section>
  );
};

export default ServiceHeader;
