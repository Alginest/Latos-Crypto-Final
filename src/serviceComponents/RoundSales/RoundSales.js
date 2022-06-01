import React from "react";
import useStyles from "./style";
import { useGlobalContext } from "../../context";
import { Box, Button, Container, Typography } from "@material-ui/core";
const RoundSales = () => {
  const { dark } = useGlobalContext();
  const classes = useStyles(dark);
  return (
    <section className={classes.roundSales}>
      <div
        data-aos="flip-up"
        data-aos-easing="ease-in-sine"
        data-aos-duration="600"
      >
        <Container className={classes.bigCont}>
          <Typography
            className={classes.title}
            align="center"
            variant="h2"
            style={{ marginTop: 50 }}
          >
            Rounds of Sale of Tokens
          </Typography>
          <Box className={classes.mainBox}>
            <Box className={classes.boxLeft}>
              <Typography className={classes.boxTitle}>
                Target - to Raise USD 500,000
              </Typography>
              <Button variant="outlined" className={classes.btnTxt}>
                {" "}
                Price 1 BIT - $0.25
              </Button>
              <Box className={classes.proBox}>
                <Typography variant="h3" style={{ fontWeight: "bold" }}>
                  20%
                </Typography>
                <Typography component={"span"} style={{ color: "gray" }}>
                  Special Bonus
                </Typography>
              </Box>
            </Box>
            <Box className={classes.boxRight}>
              <Typography className={classes.boxTitle}>
                Target - to Raise USD 500,000
              </Typography>
              <Button
                variant="contained"
                type="text"
                className={classes.btnTxtCont}
              >
                Price 1 BIT - $0.25
              </Button>
              <Typography
                variant="h5"
                align="center"
                style={{ fontWeight: "bold" }}
              >
                Bonus for ICO:
              </Typography>
              <Box className={classes.icoBox}>
                <Box className={classes.timeBox}>
                  <Typography className={classes.orangeSub}>Time</Typography>
                  <Typography className={classes.variantZ}>1 Day</Typography>
                  <Typography className={classes.variantZ}>2-4 Days</Typography>
                  <Typography className={classes.variantZ}>
                    5-15 Days
                  </Typography>
                  <Typography className={classes.variantZ}>
                    14-31 Days
                  </Typography>
                </Box>
                <Box className={classes.bonusBox}>
                  <Typography className={classes.orangeSub}>Bonus</Typography>
                  <Typography className={classes.variantZ}>35%</Typography>
                  <Typography className={classes.variantZ}>20%</Typography>
                  <Typography className={classes.variantZ}>10%</Typography>
                  <Typography className={classes.variantZ}>0%</Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Container>
      </div>
    </section>
  );
};

export default RoundSales;
