import { Typography } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import useStyles from "./style";
import { useGlobalContext } from "../../context";
const BlogHeader = () => {
  const { dark } = useGlobalContext();
  const classes = useStyles(dark);
  return (
    <section className={classes.blogHeader}>
      <Typography variant="h2">Blog</Typography>
      <Typography variant="h6">
        <Link to="/" className={classes.link}>
          Home
        </Link>{" "}
        / Blog
      </Typography>
    </section>
  );
};

export default BlogHeader;
