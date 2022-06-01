import React from "react";
import useStyles from "./style";
import { useGlobalContext } from "../../context";
import { Box, Container, Typography } from "@material-ui/core";
import imgOne from "../../images/desktop.png";
const BitCoinInfo = () => {
  const { dark } = useGlobalContext();
  const classes = useStyles(dark);
  return (
    <section className={classes.bitCoinInfo}>
      <div
        data-aos="zoom-in"
        data-aos-easing="ease-in-sine"
        data-aos-duration="600"
      >
        <Container className={classes.bigCont}>
          <Box className={classes.aboutInfo}>
            <Typography variant="h3" className={classes.title}>
              About Bitcoin
            </Typography>
            <div className={classes.underline}></div>
            <Typography
              variant="body1"
              style={{ margin: "20px 0", lineHeight: 1.7, fontWeight: 600 }}
              className={classes.text}
            >
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et.Lorem ipsum dolor sit amet
            </Typography>
            <Typography
              variant="body1"
              style={{ margin: "20px 0", lineHeight: 1.7 }}
              className={classes.text}
            >
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et.Lorem ipsum dolor sit amet,
              consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
              labore et.Lorem ipsum dolor sit amet.consectetur adipisicing elit,
              sed do eiusmod tempor incididunt ut labore et.Lorem ipsum dolor
              sit amet.
            </Typography>
          </Box>

          <Box className={classes.imageBox}>
            <img src={imgOne} alt="" className={classes.img} />
          </Box>
        </Container>
      </div>
    </section>
  );
};

export default BitCoinInfo;
