import { Box, Link, Typography } from "@material-ui/core";
import React from "react";
import { useGlobalContext } from "../../context";
import useStyles from "../Footer/style";
const RecentPosts = () => {
  const { dark } = useGlobalContext();
  const classes = useStyles(dark);
  return (
    <section className={classes.posts}>
      <Typography variant="h6" className={classes.title}>
        Recent Posts
      </Typography>
      <div className={classes.underline}></div>
      <Box className={classes.mineBox}>
        <Box className={classes.postBox}>
          <Link to="/" variant="body1" className={classes.postLink}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Link>
          <Typography
            variant="subtitle1"
            style={{ textTransform: "uppercase", fontWeight: "bold" }}
          >
            By James Bond
          </Typography>
        </Box>
        <Box className={classes.postBox}>
          <Link to="/" variant="body1" className={classes.postLink}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Link>
          <Typography
            variant="subtitle1"
            style={{ textTransform: "uppercase", fontWeight: "bold" }}
          >
            By James Bond
          </Typography>
        </Box>
      </Box>
    </section>
  );
};

export default RecentPosts;
