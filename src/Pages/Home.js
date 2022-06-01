import React from "react";
import AboutInfo from "../components/AboutInfo/AboutInfo";
import Banner from "../components/Banner/Banner";
import BitCount from "../components/BitCount/BitCount";
import CoinsTable from "../components/CoinsTable/CoinsTable";
import ConntectedSvg from "../components/ConntectedSvg/ConntectedSvg";
import Features from "../components/Features/Features";
import Footer from "../components/Footer/Footer";
import News from "../components/LatestNews/News";
import ParticleBackground from "../components/ParticleBackground/ParticleBackground";
import Team from "../components/Team/Team";
import UpsideSvg from "../components/UpsideSvg/UpsideSvg";

import { motion } from "framer-motion";
const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.3 } }}
    >
      <ParticleBackground />
      <Banner />
      <AboutInfo />
      <ConntectedSvg />
      <Features />
      <UpsideSvg />
      <BitCount />
      <CoinsTable />
      <Team />
      <News />
      <ConntectedSvg />
      <Footer />
    </motion.div>
  );
};

export default Home;
