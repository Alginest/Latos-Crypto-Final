import React from "react";
import { motion } from "framer-motion";
import { useParams } from "react-router-dom";
import SingleCoinHeader from "../../singleCoinComponents/SingleCoinHeader/SingleCoinHeader";
import SingleCoinCap from "../../singleCoinComponents/SingleCoinCap/SingleCoinCap";

const SingleCoinPage = () => {
  let { id } = useParams();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <SingleCoinHeader id={id} />
      <SingleCoinCap id={id} />
    </motion.div>
  );
};

export default SingleCoinPage;
