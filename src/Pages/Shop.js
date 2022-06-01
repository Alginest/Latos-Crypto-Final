import React from "react";
import { motion } from "framer-motion";
import ShopHeader from "../shopComponents/ShopHeader/ShopHeader";
import Footer from "../components/Footer/Footer";
import ShopMid from "../shopComponents/ShopMid/ShopMid";
const Shop = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.3 } }}
    >
      <ShopHeader />
      <ShopMid />
      <Footer />
    </motion.div>
  );
};

export default Shop;
