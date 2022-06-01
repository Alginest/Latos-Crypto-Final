import { Box, Container, Grid, Typography } from "@material-ui/core";
import React from "react";
import useStyles from "./style";
import { useGlobalContext } from "../../context";
//images
import imgOne from "../../images/6.png";
import imgTwo from "../../images/7.png";
import imgThree from "../../images/8.png";
import imgFour from "../../images/9.png";
import imgFive from "../../images/10.png";
import imgSix from "../../images/11.png";
const Features = () => {
  const { dark } = useGlobalContext();
  const props = {
    boxShadow: "10px 10px 5px 0px rgba(0,0,0,0.75)",
    dark: dark,
  };
  const classes = useStyles(props);

  return (
    <div
      data-aos="fade-up"
      data-aos-offset="200"
      data-aos-easing="ease-in-sine"
      data-aos-duration="600"
    >
      <section className={classes.features}>
        <Typography variant="h3" align="center" style={{ marginBottom: 30 }}>
          Advantage of the Project
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
        <Container className={classes.bigCont}>
          <Grid container spacing={4} className={classes.gridCont}>
            <Grid item lg={4} className={classes.gridItem}>
              <Box className={classes.contXs}></Box>
              <Box className={classes.contSm}>
                <img src={imgOne} alt="blockchain techno" />
                <Typography
                  variant="h5"
                  color="secondary"
                  style={{ marginTop: 10, fontWeight: "bold" }}
                >
                  Blockchain <br />
                  Technology
                </Typography>
              </Box>
            </Grid>
            <Grid item lg={4} className={classes.gridItem}>
              <Box className={classes.contXs}></Box>
              <Box className={classes.contSm}>
                <img src={imgTwo} alt="blockchain techno" />
                <Typography
                  variant="h5"
                  color="secondary"
                  style={{
                    marginTop: 10,
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  Advanced
                  <br />
                  Security System
                </Typography>
              </Box>
            </Grid>
            <Grid item lg={4} className={classes.gridItem}>
              <Box className={classes.contXs}></Box>
              <Box className={classes.contSm}>
                <img src={imgThree} alt="blockchain techno" />
                <Typography
                  variant="h5"
                  color="secondary"
                  style={{ marginTop: 10, fontWeight: "bold" }}
                >
                  Multicurrency <br />
                  Coins
                </Typography>
              </Box>
            </Grid>
            <Grid item lg={4} className={classes.gridItem}>
              <Box className={classes.contXs}></Box>
              <Box className={classes.contSm}>
                <img src={imgFour} alt="blockchain techno" />
                <Typography
                  variant="h5"
                  color="secondary"
                  style={{ marginTop: 10, fontWeight: "bold" }}
                >
                  Internal <br />
                  Exchange
                </Typography>
              </Box>
            </Grid>
            <Grid item lg={4} className={classes.gridItem}>
              <Box className={classes.contXs}></Box>
              <Box className={classes.contSm}>
                <img src={imgFive} alt="blockchain techno" />
                <Typography
                  variant="h5"
                  color="secondary"
                  style={{ marginTop: 10, fontWeight: "bold" }}
                >
                  Safety <br />
                  Fund
                </Typography>
              </Box>
            </Grid>
            <Grid item lg={4} className={classes.gridItem}>
              <Box className={classes.contXs}></Box>
              <Box className={classes.contSm}>
                <img src={imgSix} alt="blockchain techno" />
                <Typography
                  variant="h5"
                  color="secondary"
                  style={{ marginTop: 10, fontWeight: "bold" }}
                >
                  Cooperation
                  <br />
                  With Arbitration
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </section>
    </div>
  );
};

export default Features;
