import { Box, Link, Typography } from "@material-ui/core";
import React from "react";
import { useGlobalContext } from "../../context";
import useStyles from "../Footer/style";
const OurServices = () => {
  const { dark } = useGlobalContext();
  const classes = useStyles(dark);
  return (
    <section className={classes.ourServices}>
      <Typography variant="h6" className={classes.title}>
        Our Services
      </Typography>
      <div className={classes.underline}></div>
      <Box className={classes.mineBox}>
        <Link to="#" className={classes.link}>
          Crypto Investments
        </Link>
        <Link to="#" className={classes.link}>
          Bitcoin Analytics
        </Link>
        <Link to="#" className={classes.link}>
          Bitcoin Mining
        </Link>
        <Link to="#" className={classes.link}>
          Bitcoin Shopping
        </Link>
        <Link to="#" className={classes.link}>
          Bitcoin Exchange
        </Link>
        <Link to="#" className={classes.link}>
          Bitcoin Consulting
        </Link>
      </Box>
    </section>
  );
};

export default OurServices;
