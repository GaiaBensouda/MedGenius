import React from 'react';
import { motion } from 'framer-motion';
import './Project.css';

const Project = () => {
  return (
    <motion.div 
      className="project" 
      id="project"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.h2 
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        Our Projects
      </motion.h2>
      <motion.p 
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        Discover the innovative projects we are working on to revolutionize medical treatments.
      </motion.p>
    </motion.div>
  );
};

export default Project;
