import React from "react";
import useStyles from "./style";
import { useGlobalContext } from "../../context";
import { Container, Grid, Typography } from "@material-ui/core";
import logoOne from "../../images/logo1.png";
import logoTwo from "../../images/logo2.png";
import logoThree from "../../images/logo3.png";
import logoFour from "../../images/logo4.png";
import logoFive from "../../images/logo5.png";
import logoSix from "../../images/logo6.png";
const Sponsors = () => {
  const { dark } = useGlobalContext();
  const classes = useStyles(dark);
  return (
    <section className={classes.sponsors}>
      <Container className={classes.bigCont}>
        <Typography className={classes.title} align="center" variant="h3">
          Press(Media)
        </Typography>
        <div
          data-aos="fade-right"
          data-aos-easing="ease-in-sine"
          data-aos-duration="600"
        >
          <Grid container className={classes.gridCont} spacing={4}>
            <Grid item className={classes.gridItem} lg={4}>
              <img src={logoOne} alt="logo1" className={classes.img} />
            </Grid>
            <Grid item className={classes.gridItem} lg={4}>
              <img src={logoTwo} alt="logo1" className={classes.img} />
            </Grid>
            <Grid item className={classes.gridItem} lg={4}>
              <img src={logoThree} alt="logo1" className={classes.img} />
            </Grid>
            <Grid item className={classes.gridItem} lg={4}>
              <img src={logoFour} alt="logo1" className={classes.img} />
            </Grid>
            <Grid item className={classes.gridItem} lg={4}>
              <img src={logoFive} alt="logo1" className={classes.img} />
            </Grid>
            <Grid item className={classes.gridItem} lg={4}>
              <img src={logoSix} alt="logo1" className={classes.img} />
            </Grid>
          </Grid>
        </div>
      </Container>
    </section>
  );
};

export default Sponsors;
