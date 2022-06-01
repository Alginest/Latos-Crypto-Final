import { Box, Container, Grid, Typography } from "@material-ui/core";
import { Rating } from "@material-ui/lab";
import React, { useState } from "react";
import { useGlobalContext } from "../../context";
import useStyles from "./style";
import BitCoinOne from "../../images/bitCoin1.jpg";
import BitCoinTwo from "../../images/bitCoin2.jpg";
import BitCoinThree from "../../images/BitCoin3.webp";
import BitCoinFive from "../../images/BitCoin5.jpg";
import BitCoinFour from "../../images/BitCoin4.png";
import BitCoinSix from "../../images/BitCoin6.jpg";

const ShopMid = () => {
  const { dark } = useGlobalContext();
  const [statusOne, setStatusOne] = useState(false);
  const [statusTwo, setStatusTwo] = useState(false);
  const [statusThree, setStatusThree] = useState(false);
  const [statusFour, setStatusFour] = useState(false);
  const [statusFive, setStatusFive] = useState(false);
  const [statusSix, setStatusSix] = useState(false);

  const classes = useStyles(dark);

  return (
    <section className={classes.shopMid}>
      <div
        data-aos="fade-up"
        data-aos-easing="ease-in-sine"
        data-aos-duration="600"
      >
        <Container className={classes.bigCont}>
          <Grid container className={classes.gridCont}>
            <Grid
              item
              lg={6}
              className={classes.gridItem}
              onMouseOver={() => setStatusOne(true)}
              onMouseOut={() => setStatusOne(false)}
            >
              <Box
                className={`${
                  statusOne
                    ? `${classes.item} ${classes.active}`
                    : `${classes.item}`
                }`}
              >
                <img src={BitCoinOne} alt="" className={`${classes.img}`} />
                <div className={classes.shadow}></div>
                <Container className={classes.smCont}>
                  <Typography
                    variant="h6"
                    style={{ marginTop: 30, fontWeight: "bold" }}
                  >
                    Product Title Here
                  </Typography>
                  <Typography variant="body1" style={{ marginTop: 20 }}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad
                    assumenda culpa cumque dicta sint soluta voluptas eius iusto
                    modi reprehenderit sint.
                  </Typography>
                  <div className={classes.underline}></div>
                  <Box className={classes.ratePrice}>
                    <Rating name="read-only" value={5} readOnly />
                    <Typography variant="h6">$170.45</Typography>
                  </Box>
                </Container>
              </Box>
            </Grid>

            <Grid
              item
              lg={6}
              className={classes.gridItem}
              onMouseOver={() => setStatusTwo(true)}
              onMouseOut={() => setStatusTwo(false)}
            >
              <Box
                className={`${
                  statusTwo
                    ? `${classes.item} ${classes.active}`
                    : `${classes.item}`
                }`}
              >
                <img src={BitCoinTwo} alt="" className={`${classes.img}`} />
                <div className={classes.shadow}></div>
                <Container className={classes.smCont}>
                  <Typography
                    variant="h6"
                    style={{ marginTop: 30, fontWeight: "bold" }}
                  >
                    Product Title Here
                  </Typography>
                  <Typography variant="body1" style={{ marginTop: 20 }}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad
                    assumenda culpa cumque dicta sint soluta voluptas eius iusto
                    modi reprehenderit sint.
                  </Typography>
                  <div className={classes.underline}></div>
                  <Box className={classes.ratePrice}>
                    <Rating name="read-only" value={4} readOnly />
                    <Typography variant="h6">$170.45</Typography>
                  </Box>
                </Container>
              </Box>
            </Grid>
            <Grid
              item
              lg={6}
              className={classes.gridItem}
              onMouseOver={() => setStatusThree(true)}
              onMouseOut={() => setStatusThree(false)}
            >
              <Box
                className={`${
                  statusThree
                    ? `${classes.item} ${classes.active}`
                    : `${classes.item}`
                }`}
              >
                <img src={BitCoinThree} alt="" className={`${classes.img}`} />
                <div className={classes.shadow}></div>
                <Container className={classes.smCont}>
                  <Typography
                    variant="h6"
                    style={{ marginTop: 30, fontWeight: "bold" }}
                  >
                    Product Title Here
                  </Typography>
                  <Typography variant="body1" style={{ marginTop: 20 }}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad
                    assumenda culpa cumque dicta sint soluta voluptas eius iusto
                    modi reprehenderit sint.
                  </Typography>
                  <div className={classes.underline}></div>
                  <Box className={classes.ratePrice}>
                    <Rating name="read-only" value={5} readOnly />
                    <Typography variant="h6">$170.45</Typography>
                  </Box>
                </Container>
              </Box>
            </Grid>
            <Grid
              item
              lg={6}
              className={classes.gridItem}
              onMouseOver={() => setStatusFour(true)}
              onMouseOut={() => setStatusFour(false)}
            >
              <Box
                className={`${
                  statusFour
                    ? `${classes.item} ${classes.active}`
                    : `${classes.item}`
                }`}
              >
                <img src={BitCoinFour} alt="" className={`${classes.img}`} />
                <div className={classes.shadow}></div>
                <Container className={classes.smCont}>
                  <Typography
                    variant="h6"
                    style={{ marginTop: 30, fontWeight: "bold" }}
                  >
                    Product Title Here
                  </Typography>
                  <Typography variant="body1" style={{ marginTop: 20 }}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad
                    assumenda culpa cumque dicta sint soluta voluptas eius iusto
                    modi reprehenderit sint.
                  </Typography>
                  <div className={classes.underline}></div>
                  <Box className={classes.ratePrice}>
                    <Rating name="read-only" value={3} readOnly />
                    <Typography variant="h6">$170.45</Typography>
                  </Box>
                </Container>
              </Box>
            </Grid>
            <Grid
              item
              lg={6}
              className={classes.gridItem}
              onMouseOver={() => setStatusFive(true)}
              onMouseOut={() => setStatusFive(false)}
            >
              <Box
                className={`${
                  statusFive
                    ? `${classes.item} ${classes.active}`
                    : `${classes.item}`
                }`}
              >
                <img src={BitCoinFive} alt="" className={`${classes.img}`} />
                <div className={classes.shadow}></div>
                <Container className={classes.smCont}>
                  <Typography
                    variant="h6"
                    style={{ marginTop: 30, fontWeight: "bold" }}
                  >
                    Product Title Here
                  </Typography>
                  <Typography variant="body1" style={{ marginTop: 20 }}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad
                    assumenda culpa cumque dicta sint soluta voluptas eius iusto
                    modi reprehenderit sint.
                  </Typography>
                  <div className={classes.underline}></div>
                  <Box className={classes.ratePrice}>
                    <Rating name="read-only" value={5} readOnly />
                    <Typography variant="h6">$170.45</Typography>
                  </Box>
                </Container>
              </Box>
            </Grid>
            <Grid
              item
              lg={6}
              className={classes.gridItem}
              onMouseOver={() => setStatusSix(true)}
              onMouseOut={() => setStatusSix(false)}
            >
              <Box
                className={`${
                  statusSix
                    ? `${classes.item} ${classes.active}`
                    : `${classes.item}`
                }`}
              >
                <img src={BitCoinSix} alt="" className={`${classes.img}`} />
                <div className={classes.shadow}></div>
                <Container className={classes.smCont}>
                  <Typography
                    variant="h6"
                    style={{ marginTop: 30, fontWeight: "bold" }}
                  >
                    Product Title Here
                  </Typography>
                  <Typography variant="body1" style={{ marginTop: 20 }}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad
                    assumenda culpa cumque dicta sint soluta voluptas eius iusto
                    modi reprehenderit sint.
                  </Typography>
                  <div className={classes.underline}></div>
                  <Box className={classes.ratePrice}>
                    <Rating name="read-only" value={2} readOnly />
                    <Typography variant="h6">$170.45</Typography>
                  </Box>
                </Container>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </div>
    </section>
  );
};

export default ShopMid;
