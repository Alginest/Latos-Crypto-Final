import React from "react";
import AboutHeader from "../aboutComponents/AboutHeader/AboutHeader";
import BitCoinInfo from "../aboutComponents/BitCoinInfo/BitCoinInfo";
import BitCount from "../components/BitCount/BitCount";
import Footer from "../components/Footer/Footer";
import { motion } from "framer-motion";
import Started from "../aboutComponents/Started/Started";
import Sponsors from "../aboutComponents/sponsors/Sponsors";
const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <AboutHeader />
      <BitCoinInfo />
      <BitCount />
      <Sponsors />
      <Started />
      <Footer />
    </motion.div>
  );
};

export default About;
