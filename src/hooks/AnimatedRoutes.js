import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import About from "../Pages/About";
import Home from "../Pages/Home";
import Service from "../Pages/Service";
import Shop from "../Pages/Shop";
import Blog from "../Pages/Blog";
import Contact from "../Pages/Contact";
import Loading from "../Pages/Loading";
import SingleCoinPage from "../Pages/SingleCoinPage/SingleCoinPage";
import { AnimatePresence } from "framer-motion";
const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/coins/:id" element={<SingleCoinPage />} />
        <Route path="/loading" element={<Loading />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
