import { Container } from "@material-ui/core";
import React from "react";
import useStyles from "./style";
import SocialLogo from "../SocialLogo/SocialLogo";
import OurServices from "../OurServices/OurServices";
import RecentPosts from "../RecentPosts/RecentPosts";
import SubscribeUs from "../SubscribeUs/SubscribeUs.js";

const Footer = () => {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Container className={classes.bigCont}>
        <SocialLogo />
        <OurServices />
        <RecentPosts />
        <SubscribeUs />
      </Container>
    </footer>
  );
};

export default Footer;
