import React from "react";
import { motion } from "framer-motion";
import ContactHeader from "../contactComponents/contactHeader/ContactHeader";
import GoogleMap from "../contactComponents/googleMap/GoogleMap";
import ContactForm from "../contactComponents/ContactForm/ContactForm";
import Footer from "../components/Footer/Footer";
const Contact = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.3 } }}
    >
      <ContactHeader />
      <GoogleMap />
      <ContactForm />
      <Footer />
    </motion.div>
  );
};

export default Contact;
