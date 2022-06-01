import React from "react";
import { motion } from "framer-motion";
import BlogHeader from "../blogComponents/blogHeader/blogHeader";
import BlogMid from "../blogComponents/blogMid/BlogMid";
const Blog = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.3 } }}
    >
      <BlogHeader />
      <BlogMid />
    </motion.div>
  );
};

export default Blog;
