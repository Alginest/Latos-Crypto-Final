import React from "react";
import useStyles from "./style";
import { useGlobalContext } from "../../context";
import { Box, Container, Grid, Typography } from "@material-ui/core";
import FavoriteIcon from "@material-ui/icons/Favorite";
import TelegramIcon from "@material-ui/icons/Telegram";
import RowingIcon from "@material-ui/icons/Rowing";
import MonetizationOnIcon from "@material-ui/icons/MonetizationOn";
import SettingsIcon from "@material-ui/icons/Settings";
import StorageIcon from "@material-ui/icons/Storage";
const BitPlan = () => {
  const { dark } = useGlobalContext();
  const classes = useStyles(dark);
  return (
    <section className={classes.bitPlan}>
      <div
        data-aos="zoom-in"
        data-aos-easing="ease-in-sine"
        data-aos-duration="600"
      >
        <Container className={classes.bigCont}>
          <Typography variant="h3" align="center">
            Why Choose BitCoin
          </Typography>
          <Box className={classes.center}>
            <div className={classes.underline}></div>
          </Box>
          <Box className={classes.center}>
            <Typography
              variant="body1"
              align="center"
              className={classes.lorem}
            >
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatem dolorem dicta libero veritatis reiciendis quis pariatur
              magni.
            </Typography>
          </Box>
          <Grid container className={classes.gridCont} spacing={4}>
            <Grid item lg={4} className={classes.gridItem}>
              <Box className={classes.item}>
                <Box className={classes.topBox}>
                  <Box className={classes.iconBox}>
                    <div className={classes.borderDiv}></div>
                    <FavoriteIcon className={classes.icon} />
                    <Typography className={classes.iconNum}>1</Typography>
                  </Box>
                </Box>
                <Typography className={classes.subtitle} variant="subtitle1">
                  Safe and Secure
                </Typography>
                <Typography variant="body1" className={classes.smTxt}>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Accusantium beatae consectetur ea eaque facilis hic, impedit
                  ipsa laudantium modi nostrum.
                </Typography>
              </Box>
            </Grid>
            <Grid item lg={4} className={classes.gridItem}>
              <Box className={classes.item}>
                <Box className={classes.topBox}>
                  <Box className={classes.iconBox}>
                    <TelegramIcon className={classes.icon} />
                    <div className={classes.borderDiv}></div>
                    <Typography className={classes.iconNum}>2</Typography>
                  </Box>
                </Box>
                <Typography className={classes.subtitle} variant="subtitle1">
                  Mobile App
                </Typography>
                <Typography variant="body1" className={classes.smTxt}>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Accusantium beatae consectetur ea eaque facilis hic, impedit
                  ipsa laudantium modi nostrum.
                </Typography>
              </Box>
            </Grid>
            <Grid item lg={4} className={classes.gridItem}>
              <Box className={classes.item}>
                <Box className={classes.topBox}>
                  <Box className={classes.iconBox}>
                    <div className={classes.borderDiv}></div>
                    <RowingIcon className={classes.icon} />
                    <Typography className={classes.iconNum}>3</Typography>
                  </Box>
                </Box>
                <Typography className={classes.subtitle} variant="subtitle1">
                  Secure Wallet
                </Typography>
                <Typography variant="body1" className={classes.smTxt}>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Accusantium beatae consectetur ea eaque facilis hic, impedit
                  ipsa laudantium modi nostrum.
                </Typography>
              </Box>
            </Grid>
            <Grid item lg={4} className={classes.gridItem}>
              <Box className={classes.item}>
                <Box className={classes.topBox}>
                  <Box className={classes.iconBox}>
                    <div className={classes.borderDiv}></div>
                    <MonetizationOnIcon className={classes.icon} />
                    <Typography className={classes.iconNum}>4</Typography>
                  </Box>
                </Box>
                <Typography className={classes.subtitle} variant="subtitle1">
                  Covered By Insurance
                </Typography>
                <Typography variant="body1" className={classes.smTxt}>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Accusantium beatae consectetur ea eaque facilis hic, impedit
                  ipsa laudantium modi nostrum.
                </Typography>
              </Box>
            </Grid>
            <Grid item lg={4} className={classes.gridItem}>
              <Box className={classes.item}>
                <Box className={classes.topBox}>
                  <Box className={classes.iconBox}>
                    <div className={classes.borderDiv}></div>
                    <SettingsIcon className={classes.icon} />
                    <Typography className={classes.iconNum}>5</Typography>
                  </Box>
                </Box>
                <Typography className={classes.subtitle} variant="subtitle1">
                  Recurring Buying
                </Typography>
                <Typography variant="body1" className={classes.smTxt}>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Accusantium beatae consectetur ea eaque facilis hic, impedit
                  ipsa laudantium modi nostrum.
                </Typography>
              </Box>
            </Grid>
            <Grid item lg={4} className={classes.gridItem}>
              <Box className={classes.item}>
                <Box className={classes.topBox}>
                  <Box className={classes.iconBox}>
                    <div className={classes.borderDiv}></div>
                    <StorageIcon className={classes.icon} />
                    <Typography className={classes.iconNum}>6</Typography>
                  </Box>
                </Box>
                <Typography className={classes.subtitle} variant="subtitle1">
                  Instant Exchange
                </Typography>
                <Typography variant="body1" className={classes.smTxt}>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Accusantium beatae consectetur ea eaque facilis hic, impedit
                  ipsa laudantium modi nostrum.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </div>
    </section>
  );
};

export default BitPlan;
