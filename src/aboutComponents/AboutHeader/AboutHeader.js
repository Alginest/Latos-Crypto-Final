import { Typography } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import useStyles from "./style";
import { useGlobalContext } from "../../context";
const AboutHeader = () => {
  const { dark } = useGlobalContext();
  const classes = useStyles(dark);
  return (
    <section className={classes.aboutHeader}>
      <Typography variant="h2">About Us</Typography>
      <Typography variant="h6">
        <Link to="/" className={classes.link}>
          Home
        </Link>{" "}
        / About Us
      </Typography>
    </section>
  );
};

export default AboutHeader;
