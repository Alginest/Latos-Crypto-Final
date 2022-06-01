import { Box, Button, Container, Typography } from "@material-ui/core";
import React from "react";
import useStyles from "./style";
import bgRight from "../../images/2.png";
import { useGlobalContext } from "../../context";
const AboutInfo = () => {
  const { dark } = useGlobalContext();
  const props = {
    boxShadow: "10px 10px 5px 0px rgba(0,0,0,0.75)",
    dark: dark,
  };

  const classes = useStyles(props);
  return (
    <section className={classes.aboutInfo}>
      <div
        data-aos="fade-up"
        data-aos-offset="200"
        data-aos-easing="ease-in-sine"
        data-aos-duration="600"
      >
        <Container className={classes.bigCont}>
          <Box className={classes.boxLeft}>
            <Typography variant="h4" className={classes.title}>
              About This Project
            </Typography>
            <Typography variant="body1" className={classes.paraSm}>
              BiCoin is a lending and investment, multicurrency and
              multifunctional online platform based on blockchain technology.
              There investors and borrowers meet each other and have the
              opportunity to lend money on mutually beneficial.
            </Typography>
            <Typography variant="body1" className={classes.paraSm}>
              BiCoin is a unique service that allows individuals to access loans
              from the comfort of their home in fiat currencies or
              crypto-currencies.
            </Typography>
            <Typography variant="body1" className={classes.paraSm}>
              BiCoin is a multi-functional platform which allows each
              participant to keep money in a multi-currency online wallet, buy
              and sell currency on the exchange, invest money, get a loan in a
              convenient currency.
            </Typography>
            <Box className={classes.btnBox}>
              <Button className={classes.btnCoinOne}>Whitepaper</Button>
              <Button className={classes.btnCoin}>Buy tokens now!</Button>
            </Box>
          </Box>

          <Box className={classes.boxRight}>
            <img src={bgRight} alt="bg_right" className={classes.img} />
          </Box>
        </Container>
      </div>
    </section>
  );
};

export default AboutInfo;
