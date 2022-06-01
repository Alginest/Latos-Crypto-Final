import React from "react";
import { motion } from "framer-motion";
import ServiceHeader from "../serviceComponents/serviceHeader/ServiceHeader";
import BitPlan from "../serviceComponents/BitPlan/BitPlan";
import Started from "../aboutComponents/Started/Started";
import Footer from "../components/Footer/Footer";
import UpsideSvg from "../components/UpsideSvg/UpsideSvg";
import ConntectedSvg from "../components/ConntectedSvg/ConntectedSvg";
import RoundSales from "../serviceComponents/RoundSales/RoundSales";
const Service = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.3 } }}
    >
      <ServiceHeader />
      <BitPlan />
      <UpsideSvg />
      <Started />
      <RoundSales />
      <ConntectedSvg />
      <Footer />
    </motion.div>
  );
};

export default Service;
