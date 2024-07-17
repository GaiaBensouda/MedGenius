import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import './About.css';

const About = () => {
  return (
    <motion.div 
      className="about" 
      id="about"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.h2 
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        About MedGenius
      </motion.h2>
      <motion.p 
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
       MedGenius is a cutting-edge, AI-powered healthcare platform designed to personalize and optimize medical treatment for individuals. By leveraging the latest advancements in artificial intelligence and machine learning, MedGenius aims to provide users with tailored healthcare solutions, ensuring the highest level of care and convenience.
      </motion.p>
    </motion.div>
  );
};

export default About;
