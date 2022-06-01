import React from "react";
import useStyles from "./style";
import { useGlobalContext } from "../../context";
import { Box, Container, Grid, Typography } from "@material-ui/core";
import CreateIcon from "@material-ui/icons/Create";
import AccountBalanceIcon from "@material-ui/icons/AccountBalance";
const Started = () => {
  const { dark } = useGlobalContext();
  const classes = useStyles(dark);
  return (
    <section className={classes.started}>
      <Container className={classes.bigCont}>
        <Typography variant="h3" align="center">
          How To Get Started
        </Typography>
        <Box className={classes.center}>
          <div className={classes.underline}></div>
        </Box>
        <Box className={classes.center}>
          <Typography variant="body1" align="center" className={classes.lorem}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem
            dolorem dicta libero veritatis reiciendis quis pariatur magni.
          </Typography>
        </Box>
        <div
          data-aos="fade-down"
          data-aos-easing="ease-in-sine"
          data-aos-duration="600"
        >
          <Grid container spacing={2} className={classes.gridCont}>
            <Grid item lg={4} className={classes.item}>
              <Box className={classes.iconBox}>
                <CreateIcon className={classes.icon} />
              </Box>
              <Typography variant="h5" style={{ marginTop: 20 }}>
                {" "}
                Sign up for Buycoin
              </Typography>
              <Typography
                variant="body1"
                align="center"
                style={{ marginTop: 20 }}
              >
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Accusantium beatae consectetur ea eaque facilis hic impedit.
              </Typography>
            </Grid>
            <Grid item lg={4} className={classes.item}>
              <Box className={classes.iconBox}>
                <AccountBalanceIcon className={classes.icon} />
              </Box>
              <Typography variant="h5" style={{ marginTop: 20 }}>
                {" "}
                Connect Your Bank Account
              </Typography>
              <Typography
                variant="body1"
                align="center"
                style={{ marginTop: 20 }}
              >
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Accusantium beatae consectetur ea eaque facilis hic impedit.
              </Typography>
            </Grid>
            <Grid item lg={4} className={classes.item}>
              <Box className={classes.iconBox}>
                <CreateIcon className={classes.icon} />
              </Box>
              <Typography variant="h5" style={{ marginTop: 20 }}>
                {" "}
                Buy and Sell Coin
              </Typography>
              <Typography
                variant="body1"
                align="center"
                style={{ marginTop: 20 }}
              >
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Accusantium beatae consectetur ea eaque facilis hic impedit.
              </Typography>
            </Grid>
          </Grid>
        </div>
      </Container>
    </section>
  );
};

export default Started;
