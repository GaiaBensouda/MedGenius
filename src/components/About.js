import React from 'react';
import { motion } from 'framer-motion';
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
        initial={{ y: -50 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        About MedGenius
      </motion.h2>
      <motion.p 
        initial={{ y: 50 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        MedGenius is your trusted partner in personalized medical treatment, leveraging the power of AI to provide the best care solutions.
      </motion.p>
    </motion.div>
  );
};

export default About;
