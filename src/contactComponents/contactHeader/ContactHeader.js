import { Typography } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import useStyles from "./style";
import { useGlobalContext } from "../../context";
const AboutHContact = () => {
  const { dark } = useGlobalContext();
  const classes = useStyles(dark);
  return (
    <section className={classes.contactHeader}>
      <Typography variant="h2">Contact Us</Typography>
      <Typography variant="h6">
        <Link to="/" className={classes.link}>
          Home
        </Link>{" "}
        / Contact Us
      </Typography>
    </section>
  );
};

export default AboutHContact;
